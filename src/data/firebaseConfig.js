const firebase = require('firebase');

let config = {
    apiKey: "AIzaSyA_sTy2FDJnEEOXJLInfoKJH_MGJCAHpFM",
    authDomain: "ourblog-3b6f3.firebaseapp.com",
    databaseURL: "https://ourblog-3b6f3.firebaseio.com",
    projectId: "ourblog-3b6f3",
    storageBucket: "ourblog-3b6f3.appspot.com",
    messagingSenderId: "579554998450"
}

firebase.initializeApp(config);
module.exports = firebase;