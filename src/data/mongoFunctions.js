const userFunctions = require("./mongoConnection")

async function test(){
    console.log("Inside test")
    let collection = await userFunctions.connect();
    console.log("collection:", collection);
    collection.insertOne({'a':'a'});
    await userFunctions.close();
}

async function getAllCourses(){
    let collection = await userFunctions.getCollection("AllCourses");
    let courses = collection.find({}).toArray();
    console.log("collection:", courses);
    return courses;
}

module.exports = {
    test, getAllCourses
}
