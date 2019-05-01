const MongoClient = require('mongodb').MongoClient;
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('../src/data/user.properties');
let collection = "";
const client = new MongoClient(properties.get("uri"), {useNewUrlParser: true, autoReconnect: true, keepAlive: 30000, connectTimeoutMS: 30000});

async function getCollection(collectionName)
{
  await client.connect();
  switch(collectionName) {
    case "Users":
      collection = client.db("CollegeLife").collection("Users");
      break;
    case "AllCourses":
      collection = client.db("CollegeLife").collection("Courses");
      break;
    default:
      console.log("Inside Switch Statement . Collection not found")
      break;
  }
  return collection;
}

async function close()
{
  await client.close();
}


module.exports = {
  getCollection, close
}
