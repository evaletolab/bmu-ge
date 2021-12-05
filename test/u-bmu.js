const assert = require('chai').assert;
const should = require("chai").should();

const configService=require('../lib/config').ConfigService.instance('../config.json');
const BMU = require('../lib/BMU').BMUService.instance();


describe('bmu', function() {
  it('bmu config service', (done) => {
    should.exist(configService);
    should.exist(configService.VERSION);
    should.exist(configService.config);
    done();
  });

  it('bmu load one page of BD', async () => {
    const config = configService.config;
    const options = {
      maxdeep: 1,
      fn:"Search",
      Style:"Portal3",
      q:config.collection.bd.query
    };    
    const url = config.collection.search;

    const result = await BMU.wget(url,options);
    should.exist(result);
    const elems = result.elems;
    elems.should.be.an('array');
    elems[0].title.should.be.a('string');
    elems[0].image.should.be.a('string');
    elems[0].id.should.be.a('string');
    assert.lengthOf(elems, 10, 'maxdeep of 1 should return 10 elements');

  });

  it('bmu load one page of ROMAND', async () => {
    const config = configService.config;
    const options = {
      maxdeep: 1,
      fn:"Search",
      Style:"Portal3",
      q:config.collection.romand.query
    };    
    const url = config.collection.search;

    const result = await BMU.wget(url,options);
    should.exist(result);
    const elems = result.elems;
    elems.should.be.an('array');
    elems[0].title.should.be.a('string');
    elems[0].image.should.be.a('string');
    elems[0].id.should.be.a('string');
    assert.lengthOf(elems, 10, 'maxdeep of 1 should return 10 elements');

  });

  it('bmu load two page', async () => {
    const config = configService.config;
    const options = {
      maxdeep: 2,
      fn:"Search",
      Style:"Portal3",
      q:config.collection.bd.query
    };    
    const url = config.collection.search;

    let elems = [];
    let result = await BMU.wget(url,options);
    result.elems.forEach(elem=>elems.push(elem));
    assert.lengthOf(elems, 10, 'maxdeep of 1 should return 10 elements');
    result = await BMU.wget(config.collection.next+result.next.base, result.next.params);
    should.exist(result);
    result.elems.forEach(elem=>elems.push(elem));    
    elems.should.be.an('array');
    elems[0].title.should.be.a('string');
    elems[0].image.should.be.a('string');
    elems[0].id.should.be.a('string');
    elems[0].details.should.be.an('array');
    should.exist(elems[0].details[0].name);
    should.exist(elems[0].details[0].value);
    assert.lengthOf(elems, 20, 'maxdeep of 2 should return 20 elements');
    // elems.forEach((elem,i)=>{
    //   console.log('--',i+1,elem.title)
    // })
  });

  it('bmu load two page', async () => {
    const elems = await BMU.books('bd',2);

    elems.should.be.an('array');
    elems[0].title.should.be.a('string');
    elems[0].image.should.be.a('string');
    elems[0].id.should.be.a('string');
    // elems.forEach((elem,i)=>{
    //   console.log('--',i+1,elem.title)
    // })
    assert.lengthOf(elems, 20, 'maxdeep of 2 should return 20 elements');
  });
});
