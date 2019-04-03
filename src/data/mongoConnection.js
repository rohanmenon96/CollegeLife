const MongoClient = require('mongodb').MongoClient;
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('user.properties');
let collection = "";
const client = new MongoClient(properties.get("uri"), { useNewUrlParser: true });

async function connect()
{
  await client.connect();
  collection = client.db("CollegeLife").collection("Users");
  return collection
}

async function close()
{
  await client.close();
}


module.exports = {
  connect, close
}
