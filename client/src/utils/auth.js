import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDCPHGe9yqjKe8pA-JZ7MInT6Sr_Gb0Gco",
    authDomain: "hike-1538513373444.firebaseapp.com",
    databaseURL: "https://hike-1538513373444.firebaseio.com",
    projectId: "hike-1538513373444",
    storageBucket: "hike-1538513373444.appspot.com",
    messagingSenderId: "118089687123"
};

export const fire = firebase.initializeApp(config);
export const auth = fire.auth();

//sign up
export const createEmailPassword = (email, password) => {
   return auth.createUserWithEmailAndPassword(email, password);
}

//sign in
export const signIn = (email, password) => {
   return auth.signInWithEmailAndPassword(email, password);
}

//sign out
export const signOut = () => {
    return auth.signOut();
}

//password reset
export const passwordUpdate = (email) => {
    return auth.sendPasswordResetEmail(email);
}
