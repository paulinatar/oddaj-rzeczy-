//tu wrzucam wszystkie homy

import React,{Component} from "react";
import HomeAboutUs from './HomeAboutUs'
import HomeContactForm from './HomeContactForm'
import HomeFoundationsList from './HomeFoundationsList'
import HomeHeader from './HomeHeader'
import HomeWhatAbout from "./HomeWhatAbout";
import HomeColumns from "./HomeColumns";



class Home extends Component{
    render() {
        return <>
    <HomeHeader/>
    <HomeColumns/>
    <HomeWhatAbout/>
    <HomeAboutUs/>
    <HomeFoundationsList/>
    <HomeContactForm/>
</>
    }
}

export default Home