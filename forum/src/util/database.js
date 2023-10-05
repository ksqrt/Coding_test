// const client = await MongoClient.connect("",{ useNewUrlParser: true })
// const db = client.db("forum")
// db.collection()  

import { MongoClient } from 'mongodb'
const url = 'mongodb://localhost:27017'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }