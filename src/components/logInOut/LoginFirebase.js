import React, {Component} from 'react';
import Login from '../logInOut/Login'
import FirebaseContext from '../Firebase/context'
import {withRouter} from "react-router-dom"




const LoginBase = withRouter(Login);

class LoginFirebase extends Component{
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase =><LoginBase firebase = {firebase}/>}
            </FirebaseContext.Consumer>
        );
    }
}

export  default LoginFirebase