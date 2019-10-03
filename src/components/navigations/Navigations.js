//tu musze zamontowac home i scrollei druga lista z logowanie i załoz konto

import React,{Component} from "react";
import {NavLink, Route} from "react-router-dom";
import Home from "../home/Home";
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Register from '../logInOut/Register'
import Login from '../logInOut/Login'
import Logout from '../logInOut/Logout'
import HomeHeader from "../home/HomeHeader";
import HomeAboutUs from "../home/HomeAboutUs";
import HomeFoundationsList from "../home/HomeFoundationsList";
import HomeContactForm from "../home/HomeContactForm";
import '../../scss/styles/Navigations.scss'



function Navigations () {
    const selectedStyleMenu ={
        border: "1px solid #FAD648",

    }
    const menuStyle ={
        color:"#3C3C3C",
    };
    const selectedStyleList ={
        border: "1px solid #3C3C3C",

    };


        return (<>
            <nav className='mainNav'>
            <ul className='loginMenuStyleList'>
                <li><NavLink to='/login' activeStyle={selectedStyleMenu} className='loginStyle' style={menuStyle}>Zaloguj</NavLink></li>
                <li><NavLink to='/register' activeStyle={selectedStyleMenu} className='loginStyle'style={menuStyle}>Załóż konto</NavLink></li>

            </ul>
            <ul className='menuStyleList'>
                <li><NavLink to ='/' activeStyle={selectedStyleList} style={menuStyle} className='menuStyle'>Start</NavLink></li>
                <li><Link  to ='HomeWhatAbout' spy ={true} spy ={true} smooth ={true} duration ={500}> O co chodzi</Link></li>
                <li><Link activeClass ='active' className ='aboutUs' to ='HomeAboutUs' spy ={true} spy ={true} smooth ={true} duration ={500}>O nas</Link></li>
                <li><Link activeClass ='active' className ='foundationList' to ='HomeFoundationsList' spy ={true} spy ={true} smooth ={true} duration ={500}>Fundacja i organizacje</Link></li>
                <li><Link activeClass ='active' className ='contact' to ='HomeContactForm' spy ={true} spy ={true} smooth ={true} duration ={500}>Kontakt</Link></li>
            </ul>






</nav>
        </>)

}


export default Navigations