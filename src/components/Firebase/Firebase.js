
import app from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCk1Dze40p7x9RrQLI-BE29K6bZN7Gx54E",
    authDomain: "oddaj-rzeczy-2019.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-2019.firebaseio.com",
    projectId: "oddaj-rzeczy-2019",
    storageBucket: "",
    messagingSenderId: "83623961449",
    appId: "1:83623961449:web:e1c1b073a459afb16353f8"
};
class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth =app.auth()
    }
doCreateUserWithEmailAndPassword =(email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword =(email, password)=>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut =()=>this.auth.signOut()

}

export default Firebase