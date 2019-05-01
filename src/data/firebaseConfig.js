const firebase = require('firebase');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('../src/data/config.properties');
var config = {
    apiKey: properties.get("apiKey"),
    authDomain: properties.get("authDomain"),
    databaseURL: properties.get("databaseURL"),
    projectId: properties.get("projectId"),
    storageBucket: properties.get("storageBucket"),
    messagingSenderId: properties.get("messagingSenderId")
}
firebase.initializeApp(config);
module.exports = firebase;