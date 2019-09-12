import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/Login.scss'
import Navigations from "../navigations/Navigations";


class Login extends Component{
    render() {
        return (
            <div>
                <Navigations/>
                <h2>bede sie logowac</h2>

            </div>)

    }
}

export default Login