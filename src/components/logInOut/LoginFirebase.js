import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Login from '../logInOut/Login'
import FirebaseContext from '../Firebase/context'
import {withRouter} from "react-router-dom"
import NavigationUser from '../navigations/NavigationUser'



const LoginBase = withRouter(Login)

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