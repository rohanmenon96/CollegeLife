const userFunctions = require("./mongoConnection")

async function test(){
    console.log("Inside test")
    let collection = await userFunctions.connect();
    console.log("collection:", collection);
    collection.insertOne({'a':'a'});
    await userFunctions.close();
}

async function getAllCourses(){
    console.log("Get All Courses")
    let collection = await userFunctions.connect();
    console.log("collection:", collection);
    collection.insertOne({'a':'a'});
    await userFunctions.close();
}

module.exports = {
    test
}
