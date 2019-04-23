import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
    apiKey: "AIzaSyARX7FPL0aEZpOjmFVGceNNGKv7Oxj2-Yc",
    authDomain: "college-life-8aa5b.firebaseapp.com",
    databaseURL: "https://college-life-8aa5b.firebaseio.com",
    projectId: "college-life-8aa5b",
    storageBucket: "college-life-8aa5b.appspot.com",
    messagingSenderId: "960457236570"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: name
        });
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName;
    }
}

export default new Firebase();
