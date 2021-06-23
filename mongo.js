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

  pessoas.update(
    {
      _id: mongodb.ObjectID('60d276b1b3bfe82948984096')
    },
    {
      $set: {
        name: 'Paul',
        birth: '1988-05-07'
      }
    }, (err, res) => console.log(err))

  pessoas.remove({
    _id: mongodb.ObjectID("60d27856343b5e32dc47e95c")
  }, (err, res) => console.log(err))
})