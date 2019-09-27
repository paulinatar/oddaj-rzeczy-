import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


import FirebaseContext, {withFirebase} from './components/Firebase/context'

import Firebase from './components/Firebase/Firebase'



export default Firebase;
export {FirebaseContext, withFirebase}





ReactDOM.render(
    <FirebaseContext.Provider value ={new Firebase()}>
    <App />
    </FirebaseContext.Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
