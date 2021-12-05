//
// call solr with axios
const axios = require('axios');

// 
// X-InMedia-Authorization: Bearer a91ae45e-4180-4aab-b9d9-bbe51a406c97 5ed3a6a4-123a-4a29-a2a9-919ee795eb78 305425290
// Cookie: warning6c50ebd8d68346a0a801a3edf3c44770=agreed; remember=true; user=E309603738; JSESSIONID=103485BBC0D70107825B6DBCCF8A3C58	
const headers = {
	'Accept-Language': 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3',
	'Accept-Encoding': 'gzip, deflate, br',
	'Content-Type': 'application/json',
	'X-microsite-id': 'mainSite'
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
  "pageSize": 1,
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

const url = 'https://catalogue-bm.geneve.ch/in/rest/api/search';


const imgSrc='https://catalogue-bm.geneve.ch';

const fieldExist = (field) => {
	return field? field[0].value: null
}
axios.post(url,buildQuery(news['romans adulte']),{headers}).then(result => {
	const solr = result.data;	
	const resultSet = solr.resultSet;
	console.log('---- hits',solr.numHits);
	console.log('---- page',solr.pageNo);
	if(solr.numHits > 0) {
		console.log('---- content',resultSet.length);
		console.log('---- content',JSON.stringify(resultSet[0],0,2));
		for (index in resultSet) {
			const img = resultSet[index].imageSource_256 || resultSet[index].imageSource_128;
			console.log(' ',fieldExist(resultSet[index].title));
			console.log(' ',fieldExist(resultSet[index].LocalNumber));
			console.log(' ',fieldExist(img));
			console.log(' ',fieldExist(resultSet[index].meta.creator));
			console.log(index+' ------------------ ');
	
		}

	}

}).catch(err => {
	console.log('---- error',err);
});

