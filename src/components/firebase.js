import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
    apiKey: "AIzaSyA5lkAr3qQR_Tw7aFYw3cVgUpoJCOmc0e0",
    authDomain: "socialapp-7c628.firebaseapp.com",
    databaseURL: "https://socialapp-7c628.firebaseio.com",
    projectId: "socialapp-7c628",
    storageBucket: "",
    messagingSenderId: "131143897759"
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
