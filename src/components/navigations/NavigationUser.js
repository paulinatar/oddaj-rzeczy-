import React,{Component} from "react";
import {NavLink, Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import "../../scss/styles/Navigations.scss"


class NavigationUser extends Component{
    render() { const selectedStyleMenu ={
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
                    <li><p activeStyle={selectedStyleMenu} className='loginStyle' style={menuStyle}>Cześć </p></li>
                    <li><NavLink to={ROUTES.ACCOUNT} activeStyle={selectedStyleMenu} className='loginStyle'style={menuStyle}>Oddaj rzeczy</NavLink></li>
                    <li><NavLink to={ROUTES.LOGOUT} activeStyle={selectedStyleMenu} className='loginStyle'style={menuStyle}>Wyloguj sie</NavLink></li>
                </ul>
                <ul className='menuStyleList'>
                    <li><Link to ='/' activeStyle={selectedStyleList} style={menuStyle} className='menuStyle'>Start</Link></li>
                    <li><Link  to ='HomeWhatAbout'  spy ={true} smooth ={true} duration ={500}> O co chodzi</Link></li>
                    <li><Link activeClass ='active' className ='aboutUs' to ='HomeAboutUs' spy ={true} smooth ={true} duration ={500}>O nas</Link></li>
                    <li><Link activeClass ='active' className ='foundationList' to ='HomeFoundationsList'  spy ={true} smooth ={true} duration ={500}>Fundacja i organizacje</Link></li>
                    <li><Link activeClass ='active' className ='contact' to ='HomeContactForm'  spy ={true} smooth ={true} duration ={500}>Kontakt</Link></li>
                </ul>
            </nav>
        </>)
    }
}

export default NavigationUser