import axios from 'axios';
import { $config } from './config-service';

const url = 'https://catalogue-bm.geneve.ch/in/rest/api/search';

const headers = {
	'Accept-Language': 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3',
	'Accept-Encoding': 'gzip, deflate, br',
	'Content-Type': 'application/json',
	'X-microsite-id': 'mainSite',
    'X-Proxy-URL' : url
};

const queryBlog = {
    "queryid": "N-9820c681-bd6a-4c43-b2f3-955a6aea92e6",
    "query": [
        "profile:ac2e579e-41bc-462b-92f8-8f445025a8fc"
    ],
    "includeFacets": true,
    "sf": "*",
    "order": "start_sort_DESC",
    "pageSize": 20,
    "locale": "fr"
};

const querySolr = {
    "searchType": "all",
    "fl":"title,LocalNumber,imageSource_256,meta",
    "sf": "",
    "queryid": "NONE",
    "query":"__NAME__",
    "order": "SortkeyYOPD_DESC",
    "pageNo": 1,
    "pageSize": 100,
    "locale": "fr",
    "advancedQuery": {
      "searchContext": "advancedsearch",
      "terms": [],
      "limitClause": "LocalisationLimit_s:\"Cite\"",
      "searchType": "all"
    },
    "includeFacets": false
  };
  


//
// generic
const querySolrGen = {
  "searchType": "all",
  "fl":"title,LocalNumber,imageSource_256,imageSource_128,meta",
  "sf": "",
  "queryid": "NONE",
  "order": "SortkeyYOPD_DESC",
  "pageNo": 1,
  "pageSize": 100,
  "locale": "fr",
  "advancedQuery": {
    "searchContext": "advancedsearch",
    "terms": [],
    "limitClause": "LocalisationLimit_s:\"Cite\"",
    "searchType": "all"
  },
  "includeFacets": false
};

//
// search LocalNumber (T00711992X)
// TODO 

const buildQuery = (query) => {
	querySolrGen.sf = query;
	return querySolrGen;
}



const imgSrc='https://catalogue-bm.geneve.ch';

const fieldExist = (field) => {
	return field? field[0].value: null
}


class BMUService {


    async getBlog() {
        const content:any[] = []
        try{
            const result = await axios.post('/api/index.php',queryBlog,{headers});
            const solr = result.data;	
            const resultSet = solr.resultSet || [];
            // console.log('----',resultSet[0])
            for (let index in resultSet) {
                const img = resultSet[index].imageSource_256 || resultSet[index].imageSource_128;
                const imgLoader = new Image();
                imgLoader.src = imgSrc+fieldExist(img);
                // meta.auteurs
                // meta.category
                // id, https://catalogue-bm.geneve.ch/notice?id=h%3A%3A71c15133-4a6b-442d-8531-56c1f5a80123&queryId=N-9820c681-bd6a-4c43-b2f3-955a6aea92e6&posInSet=2
                const elem: any = {
                    title:(fieldExist(resultSet[index].title)),
                    image:imgSrc+fieldExist(img)
                };
                content.push(elem);
            }                

            return content;
        }catch(err) {
            console.log('---- error',err);
        };    
        return [];
    }

    async search(section, query) {
        const content:any[] = []
        try{
            const qsolr = Object.assign({},querySolr,{ query:[query]});
            //qsolr.advancedQuery.limitClause = limitClause.replace('__SECTION__',$config.config.section[section]);
            qsolr.sf = $config.config.section[section];
            const result = await axios.post('/api/index.php',qsolr,{headers});
            const solr = result.data;	
            const resultSet = solr.resultSet;
            // console.log('---- hits',solr.numHits);
            // console.log('---- page',solr.pageNo);
            if(solr.numHits > 0) {
                for (let index in resultSet) {
                    const img = resultSet[index].imageSource_128 || resultSet[index].imageSource_256;
                    const imgLoader = new Image();
                    imgLoader.src = imgSrc+fieldExist(img);
                    const elem: any = {
                        title:(fieldExist(resultSet[index].title)),
                        localNumber:fieldExist(resultSet[index].LocalNumber),
                        image:imgSrc+fieldExist(img),
                        creator:fieldExist(resultSet[index].meta.creator)
                    };
                    content.push(elem);
                }                
            }    
            return content;
        }catch(err) {
            console.log('---- error',err);
            return content;
        };    
    }


    async queryNews(type) {
        const content:any[] = []
        try{
            const query = $config.config.queries[type];
            const result = await axios.post('/api/index.php',buildQuery(query),{headers});
            const solr = result.data;	
            const resultSet = solr.resultSet;
            // console.log('---- hits',solr.numHits);
            // console.log('---- page',solr.pageNo);
            if(solr.numHits > 0) {
                for (let index in resultSet) {
                    const img = resultSet[index].imageSource_256 || resultSet[index].imageSource_128;
                    const imgLoader = new Image();
                    imgLoader.src = imgSrc+fieldExist(img);
                    const elem: any = {
                        title:(fieldExist(resultSet[index].title)),
                        localNumber:fieldExist(resultSet[index].LocalNumber),
                        image:imgSrc+fieldExist(img),
                        creator:fieldExist(resultSet[index].meta.creator)
                    };
                    content.push(elem);
                }                
            }    
            return content;
        }catch(err) {
            console.log('---- error',err);
            return [];
        };    
    }
}

//
// services start with $
export const $bmu = new BMUService();