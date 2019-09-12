//tu wrzucam wszystkie homy

import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import HomeAboutUs from './HomeAboutUs'
import HomeContactForm from './HomeContactForm'
import HomeFoundationsList from './HomeFoundationsList'
import HomeHeader from './HomeHeader'



class Home extends Component{
    render() {
        return <>
<HomeHeader/>
<HomeAboutUs/>
<HomeFoundationsList/>
<HomeContactForm/>



        </>
    }
}

export default Home