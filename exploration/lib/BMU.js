const CLASS_INSTANCE="BMU";
const ConfigService = require("./config").ConfigService;
const request = require('request-promise');
const cheerio = require('cheerio');
const fs      = require('fs');

 


//
// DB
const allElements=[];
const low     = require('lowdb');
const FileSync= require('lowdb/adapters/FileSync');

//
// https://www.npmjs.com/package/camo
// http://stackabuse.com/nedb-a-lightweight-javascript-database/
// https://www.npmjs.com/package/db-lite


class BMUService{

  constructor(){    
    if(global[CLASS_INSTANCE]){
      throw new Error(CLASS_INSTANCE+" instance already exists");
    }
    global[CLASS_INSTANCE]=this;


    this.cookie;
    this.cookieJar = request.jar();//this.jarGet();
    this.config={};
    this.configService=ConfigService.instance();   
    this.URL_ROOT=this.configService.config.URL_ROOT;
    Object.assign(this.config,this.configService.config);

    //
    // create local database
    const adapter = new FileSync('./bmu.json');
    this.db = low(adapter);
    this.db.defaults({ bd: [], romand:[], documentary:[] }).write();    
    this.TYPES =[
      'bd','romand','documentary'
    ];
  }

  static instance(){
    if(!global[CLASS_INSTANCE]){
      return new BMUService();
    }
    return global[CLASS_INSTANCE];
  }

  books(type,deep){
    var options = {
      type:type,
      maxdeep: (deep || 10000000),
      fn:"Search",
      Style:"Portal3",
      q:this.config.collection.bd.query
    };    
    return this.search(this.config.collection.search, options);
  }

  clear(type) {
    if (this.TYPES.indexOf(params.type) == -1){
      throw new Error('Unkown Type: '+type);
    }
  }

  get(type) {
    if (this.TYPES.indexOf(type) == -1){
      throw new Error('Unkown Type: '+type);
    }
    console.log('--',type, this.db.get(type).value().length)
    return this.db.get(type).value();
  }

  jarGet(){
    try{
      let content=fs.readFileSync(__dirname+'/cookie.jar', 'utf8');
      this.cookieJar = content&&JSON.parse(content);  
    }catch(e){}
    return this.cookieJar = this.cookieJar||request.jar();
  }

  jarSave(){
    fs.writeFileSync(__dirname+'/cookie.jar',JSON.stringify(this.cookieJar,0,2));
  }


  login(){
    var username="TPERROUD";
    var password="5a7c3x";
    var options = {
      simple:false,
      resolveWithFullResponse: true,
      uri: this.URL_ROOT+'/login/login',
      jar:this.cookieJar,
      // transform:request_include_headers,
      form:{
        commit:'Login',
        username:username,
        password:password,
        goToEncaissementBienId:'',
        goToTiersId:'',
        goToEncaissementBienStatId:''
      }
    };    
    //
    // Goto login
    return new Promise((resolve,reject)=>{

      //
      // check for stored session
      if(this.cookieJar._jar.cookies&&this.cookieJar._jar.cookies.length){
        console.log('-- session loaded!!')
        return resolve();
      }

      request.get({
        url:this.URL_ROOT+'/home',
        jar:this.cookieJar,
      }).then((html)=>{
        return request.post(options)  
      })
      .then(html=>{
        // this.cookie=html.headers['set-cookie'];
        this.jarSave();
        resolve();
      }).catch(error=>{
        console.log('----ERROR LOGIN',Object.keys(error))
        console.log('----ERROR LOGIN',error.error)
        reject(error);
      });

    });

  }

  parseNext(uri){    
    uri=(uri||'').split('?');
    if(uri.length==1){
      return {};
    }
    let url={
      base:uri[0],
      params:this.parseParams(uri[1])
    };

    return url;
  }

  parseParams(params) {
    var elems={};
    
    params.split('&').forEach((elem)=>{
      let param=elem.split('=');
      elems[param[0]]=(param.length>1)?param[1]:'';
    });
    return elems;
  }


  //
  // example of page
  // https://collectionsbmu.ville-ge.ch/alswww2.dll/APS_PRESENT_BIB?Style=Portal3&SubStyle=&Lang=FRE&ResponseEncoding=utf-8&no=T00367872X&Via=Z3950&View=Annotated&ResponseEncoding=utf-8
  // bibliothèques:
  //  - stock_content_STA : Saint Jean
  //  - stock_content_MIN : Minoteries
  //  - stock_content_JON : Jonction
  //  - stock_content_CIT : Cité
  //  - stock_content_SER : Servette
  //
  // content example : Cité
  // - id="stock_content_CIT"
  //    Adultes - bande dessinée
  //    <b>BD RENI</b>
  //     D20 113 911 5 
  //    
  //    <!-- This misleadingly named flag actually
  //     means "not in free stock here" -->
  //    Actuellement cet exemplaire est indisponible dans ce site.
  //    
  //    <!-- First item truly is on loan -->
  //    Date de retour prévue d'un exemplaire
  //    16/02/2020

  parsePage($){

  }

  parseSearchResult($){
    let elems=[];
    let list=$(this.config.collection.bd.template.list);
    let error=$(this.config.collection.bd.template.error).text().trim();
    let down=$(this.config.collection.bd.template.down).html();
    let next=$(this.config.collection.bd.template.next);

    
    if(next.length) {
      // console.log('--- NEXT content',next.html());
      next = this.parseNext(next.attr('href'));
    } else {
      next = null;
    }

    if(error){
      return {error:error};
    }

    //
    // if(down){
    //   return {error:down.trim()};
    // }


    list.each((i, tr) => {
      const details = (tr) =>{
        const labels = $(tr).find(this.config.collection.bd.template.details.label).map((i,sel) => {return $(sel).text().toLowerCase().trim()}).get();
        const values = $(tr).find(this.config.collection.bd.template.details.value).map((i,sel) => {return $(sel).text().trim()}).get();
        return labels.map((label,i) => {
          return { name: label, value: values[i] }
        });
      };      
      let elem={
        title:$(tr).find(this.config.collection.bd.template.title).text().trim(),
        image:$(tr).find(this.config.collection.bd.template.image).attr('src'),
        id:$(tr).find(this.config.collection.bd.template.image).attr('id'),
        details: details(tr)
      };
      if(elem.id&&elem.id.indexOf('Bookcover_')>-1){
        elem.id=elem.id.split('Bookcover_')[1];
      }
      elems.push(elem);
      // console.log(i,'-- ',elem.title,elem.image);
    });        
    return { elems: elems, next:next };
  }

  searchGoogle(title,author) {
    const params = Object.assign({},this.config.googlebooks.params);
    params.q = params.q.replace('_SEARCH_',title||'').replace('_AUTHOR_',author||'');
    params.q.replace('_SEARCH_',title||'').replace('_AUTHOR_',author||'');

    const options = {
      uri: this.config.googlebooks.url,      
      qs:params
    }; 

    // console.log('-- wget',params.maxdeep, deep,url,params);
    return request(options).then(result => {
      console.log('----',result);
      return result;
    });
    
  }

  search(url,params,deep){
    deep = deep || 1;
    const $this = this;
    if (this.TYPES.indexOf(params.type) == -1){
      throw new Error('Unkown Type: '+type);
    }

    return new Promise((resolve,reject)=>{
      // recusive call
      const load = (url,params, deep) => {
        return this.wget(url,params, deep).then(async (result)=>{
          result.elems.forEach(elem=>allElements.push(elem));
          $this.store(params.type,result.elems);
          process.stdout.write(".");
          if(result.next && params.maxdeep > deep ) {
            const _params = Object.assign(result.next.params,{maxdeep:params.maxdeep, type: params.type});
            return load($this.config.collection.next+result.next.base, _params,(++deep));
          }
          
          return allElements;
        });
      }
      load(url,params,deep).then((elems)=>{  
        resolve(elems);
      }).catch(error=>{
        console.log('----ERROR BD',error.message);
        this.cookieJar=request.jar();
        this.jarSave();
        reject(error);
      });  
    })

  }

  store(type,elems) {
    if (this.TYPES.indexOf(type) == -1){
      throw new Error('Unkown Type: '+type);
    }
    elems.forEach(elem=>{
      this.db.get(type).push(elem).write();
    });
  }

  update(type,id,item){
    return this.db(type).chain().find({ id: id}).assign(item).write();
  }

  wget(url,params, deep) {
    deep = deep || 1;
    params.maxdeep = params.maxdeep || 10000000000;
    const $this = this;
    const options = {
      uri: url,      
      jar:$this.cookieJar,
      qs:params,
      transform: function (body) {
          return cheerio.load(body,{decodeEntities:false});
      }
    }; 

    // console.log('-- wget',params.maxdeep, deep,url,params);
    return request(options).then($ => {
      return $this.parseSearchResult($,$this);
    });
  }

}

module.exports.BMUService=BMUService;
