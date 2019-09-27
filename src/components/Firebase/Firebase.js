
import app from 'firebase/app';
import 'firebase/auth'
import FirebaseContext from '../Firebase/context'


const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,


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
export {FirebaseContext}