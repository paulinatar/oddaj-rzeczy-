
import React from "react";
import {NavLink} from "react-router-dom";
import { Link} from 'react-scroll'
import '../../scss/styles/Navigations.scss'

function Navigations () {
    const selectedStyleMenu ={
        border: "1px solid #FAD648",
    };
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
                <li><Link  to ='HomeWhatAbout' spy ={true} smooth ={true} duration ={500}> O co chodzi</Link></li>
                <li><Link activeClass ='active' className ='aboutUs' to ='HomeAboutUs'  spy ={true} smooth ={true} duration ={500}>O nas</Link></li>
                <li><Link activeClass ='active' className ='foundationList' to ='HomeFoundationsList'  spy ={true} smooth ={true} duration ={500}>Fundacja i organizacje</Link></li>
                <li><Link activeClass ='active' className ='contact' to ='HomeContactForm'  spy ={true} smooth ={true} duration ={500}>Kontakt</Link></li>
            </ul>
           </nav>
        </>)

}
export default Navigations