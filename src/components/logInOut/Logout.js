import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/Logout.scss'
import Navigations from "../navigations/Navigations";


class Logout extends Component{
    render() {
        return(
            <div>
                <Navigations/>
                <h3>Wylogowałem sie</h3>
            </div>

        )
    }
}

export default Logout