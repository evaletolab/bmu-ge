const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ posts: [] })
  .write()

//const type = db.get('posts');
const type = db.get('posts').push({ title: process.argv[2], arg:[1,2,3] })
const result = type.write()

console.log(result)
