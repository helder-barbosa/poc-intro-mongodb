const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

MongoClient.connect('mongodb://localhost:27017/intro-mongo', (err, db) => {
  const pessoas = db.collection('pessoas')

  pessoas.insert({
    name: 'John',
    birth: '1985-08-04'
  }, (err, res) => {
    console.log(err, res)
  })

  const cursorPessoas = pessoas.find({})
  cursorPessoas.forEach(doc => {
    console.log(doc)
  }, () => console.log('Fim'))
})