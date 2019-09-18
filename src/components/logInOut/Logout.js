import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/Logout.scss'
import Navigations from "../navigations/Navigations";


class Logout extends Component{
    render() {
        return(
            <div className='container5'>
                <Navigations/>
                <div className='logoutDiv'>
                   <h2>Wylogowanie nastapiło pomyślnie !</h2>
                    <div className='decoration'></div>
                    <button className='loginStyle'>Strona główna</button>

                </div>

            </div>

        )
    }
}

export default Logout