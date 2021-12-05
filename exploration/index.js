

/**
 * 
 * Load images from CP.ch
 * url/id => /consultBien/imagesVideo/?id=61437 
 * 
 * Content
 * =======
 * <script type="text/javascript">		
 *	var listeMediasUrl = new Array();var listeMediasDescriptions = new Array();var listeMediaWidth = new Array();var numMediaActuel = 0;
 *  listeMediasUrl[0] = '/divers/getFile/?bienid=61437&id=511183&x=742&y=557';
 *  listeMediasDescriptions[0] = 'Sans description. (232Ko, image/jpeg, X=2048, Y=1536)';
 *  listeMediaWidth[0] = '742';
 *  var numMediaTotal = 1;
 * 
 */


//
// load config and settings
const ConfigService=require('./lib/config').ConfigService;
const prod='../config-production.json';
const cfg=(ConfigService.exists(prod))?prod:'../config.json';
const configService = ConfigService.instance(cfg);
const BMU = require('./lib/BMU').BMUService.instance();


const mapSaves = async (iterable, action) => {
  for (const x of iterable) {
    await action(x)
  }
}

BMU.books('bd').then(result => {
  console.log('RES(bd)',result.length);
  return BMU.books('romand');
}).then((result)=>{
  console.log('RES(romand)',result.length);
  // console.log('----',result);
  return ;
});


// BMU.token().then((result)=>{
//   console.log('----',result);
//   return ;
// });
