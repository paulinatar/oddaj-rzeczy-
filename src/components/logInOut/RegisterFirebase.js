import React, {Component} from 'react';
//import "./Registration.scss"
import RegistrationFirebase from "./Register";
import FirebaseContext from "../Firebase/context";
import {withRouter} from "react-router-dom"

const RegisterBase=withRouter(RegistrationFirebase)


class Registration extends Component {

    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <RegisterBase firebase={firebase} />}
            </FirebaseContext.Consumer>
        )
    }
}


export default Registration;




// import React, {Component} from 'react';
// import '../../scss/styles/Register.scss'
// import Register from '../logInOut/Register'
// import FirebaseContext from '../Firebase/context'
// import {withRouter} from 'react-router-dom'
//
// const RegisterBase = withRouter(Register);
//
// class RegisterFirebase extends Component{
//     render() {
//         return(
//             <FirebaseContext.Consumer>
//                 {firebase=> <RegisterBase   firebase ={firebase}/>}
//             </FirebaseContext.Consumer>
//         )
//
//     }
//
// }
// export default RegisterFirebase