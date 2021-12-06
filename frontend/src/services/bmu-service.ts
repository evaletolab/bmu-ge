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

const querySolr = {
  "searchType": "all",
	"fl":"title,LocalNumber,imageSource_256,meta",
  "sf": "* NOT (TypeOfDocumentFacet:Event AND (start_date:[* TO NOW] OR end_date:[* TO NOW]))",
  "queryid": "NONE",
  "advancedQuery": {
    "searchContext": "advancedsearch",
    "terms": [],
    "limitClause": "LocalisationLimit_s:\"Cite\" contentLimit_s:\"BookBD\"",
    "searchType": "all",
    "pageSize": 100000,
    "sort": "SortkeyYOPD_DESC",
    "section": "* NOT (TypeOfDocumentFacet:Event AND (start_date:[* TO NOW] OR end_date:[* TO NOW]))"
  },
  "order": "SortkeyYOPD_DESC",
  "pageNo": 1,
  "pageSize": 100,
  "locale": "fr",
  "includeFacets": false
};


//
// nouveautés
const news = {
	'bd':'(ZMAT:BookBD) AND ((( (StockDateAdded_date:[ 2021-09-05T00:00:00.000Z TO *]) AND (DateOfPublicationSearch_date:[ 2019-12-05T00:00:00.000Z TO *]) )) AND (( AvailableAt_s:CIT OR AvailableAt_s:EVI OR AvailableAt_s:STA OR AvailableAt_s:SER OR AvailableAt_s:MIN OR AvailableAt_s:JON OR AvailableAt_s:PAQ OR AvaibleAt_s:SPO OR AvailableAt_s:BUS OR AvailableAt_s:BS1 OR AvailableAt_s:BS2 OR AvailableAt_s:BS3 OR AvailableAt_s:BS4 )))',
	'jeux vidéo':'(ZMAT:JeuxVideo) AND (( (StockDateAdded_date:[ 2021-06-05T00:00:00.000Z TO *]) AND (DateOfPublicationSearch_date:[ 2019-12-05T00:00:00.000Z TO *]) ))',
	'romans adulte':'(( (StockDateAdded_date:[ 2021-09-05T00:00:00.000Z TO *]) AND (DateOfPublicationSearch_date:[ 2019-12-05T00:00:00.000Z TO *]) )) AND ((ZMAT:BookNovel) AND ((audienceLimit_s:adult) AND (( AvailableAt_s:CIT OR AvailableAt_s:EVI OR AvailableAt_s:STA OR AvailableAt_s:SER OR AvailableAt_s:MIN OR AvailableAt_s:JON OR AvailableAt_s:PAQ OR AvaibleAt_s:SPO OR AvailableAt_s:BUS OR AvailableAt_s:BS1 OR AvailableAt_s:BS2 OR AvailableAt_s:BS3 OR AvailableAt_s:BS4 ))))',
	'romans jeunesse':'(( (StockDateAdded_date:[ 2021-09-05T00:00:00.000Z TO *]) AND (DateOfPublicationSearch_date:[ 2019-12-05T00:00:00.000Z TO *]) )) AND ((ZMAT:BookNovel) AND ((audienceLimit_s:young) AND (( AvailableAt_s:CIT OR AvailableAt_s:EVI OR AvailableAt_s:STA OR AvailableAt_s:SER OR AvailableAt_s:MIN OR AvailableAt_s:JON OR AvailableAt_s:PAQ OR AvaibleAt_s:SPO OR AvailableAt_s:BUS OR AvailableAt_s:BS1 OR AvailableAt_s:BS2 OR AvailableAt_s:BS3 OR AvailableAt_s:BS4 ))))'
};

//
// generic
const querySolrGen = {
  "searchType": "all",
	"fl":"title,LocalNumber,imageSource_256,meta",
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


    async getLoan() {
    }

    async queryNews(type) {
        const content:any[] = []
        try{
            const query = news[type];
            const result = await axios.post('/api/index.php',buildQuery(query),{headers});
            const solr = result.data;	
            const resultSet = solr.resultSet;
            // console.log('---- hits',solr.numHits);
            // console.log('---- page',solr.pageNo);
            if(solr.numHits > 0) {
                // console.log('---- content',JSON.stringify(resultSet[0],0,2));
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
        };    
    }
}

//
// services start with $
export const $bmu = new BMUService();