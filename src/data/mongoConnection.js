const MongoClient = require('mongodb').MongoClient;
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('user.properties');
let collection = "";
const client = new MongoClient(properties.get("uri"), { useNewUrlParser: true });

async function connect()
{
  console.log("Inside conect()")
  await client.connect();
  console.log("Connection")
  collection = client.db("CollegeLife").collection("Users");
  console.log("inside", collection)
  return collection
}

async function close()
{
  await client.close();
}


module.exports = {
  connect, close
}
