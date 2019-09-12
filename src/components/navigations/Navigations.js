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



function Navigations () {
    const selectedStyle ={
        color: 'magenta',
        font:'Merriweather',
        listStyleType:'none',
        fontSize:'20px',
        textDecoration:'none'

    }


   // <li><Link style={styleMenu} activeStyle={selectedStyleMenu} to='SimpleSteps' spy={true} smooth={true} duration={500}>O co chodzi? </Link></li>

        return (<>
            <ul className='login Menu StyleList'>
                <li><NavLink to='/login' activeStyle={selectedStyle} className='loginStyle'>Zaloguj</NavLink></li>
                <li><NavLink to='/register' activeStyle={selectedStyle} className='loginStyle'>Załóż konto</NavLink></li>
            </ul>
            <ul className='menuStyleList'>
                <li><NavLink to ='/' activeStyle={selectedStyle} className='menuStyle'>Start</NavLink></li>
                <li><Link activeClass ='active' className ='header' to ='HomeHeader' spy ={true} spy ={true} smooth ={true} duration ={500}> O co chodzi</Link></li>
                <li><Link activeClass ='active' className ='aboutUs' to ='HomeAboutUs' spy ={true} spy ={true} smooth ={true} duration ={500}>O nas</Link></li>
                <li><Link activeClass ='active' className ='foundationList' to ='HomeFoundationsList' spy ={true} spy ={true} smooth ={true} duration ={500}>Fundacja i organizacje</Link></li>
                <li><Link activeClass ='active' className ='contact' to ='HomeContactForm' spy ={true} spy ={true} smooth ={true} duration ={500}>Kontakt</Link></li>
            </ul>

            <Element name ='HomeHeader' className ='element'>
                <HomeHeader/>
            </Element>
            <Element name = 'HomeAboutUs' className = 'element'>
                <HomeAboutUs/>
            </Element>
            <Element name ='HomeFoundationsList' className = 'element'>
                <HomeFoundationsList/>
            </Element>
            <Element name = 'HomeContactForm' className = 'element'>
                <HomeContactForm/>
            </Element>





        </>)

}


export default Navigations