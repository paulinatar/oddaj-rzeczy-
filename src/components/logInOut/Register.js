import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/Register.scss'
import Navigations from "../navigations/Navigations";


class Register extends Component{
    render() {
        return (
            <div>
                <Navigations/>
                <h2>chce sie zarejestrowac</h2>
            </div>
            )
    }
}

export default Register