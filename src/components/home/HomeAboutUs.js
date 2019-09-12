import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/HomeAboutUs.scss'





class HomeAboutUs extends Component{
    render() {
        return (<div className='container'name ='HomeAboutUs' >
            <div className='leftWhatAbout'>
            <h3>O nas</h3>
                <div className='decorations'></div>
                <p></p>
                <div className='sight'></div>
            </div>
            <div className='rightImage'></div>

        </div>)
    }
}

export default HomeAboutUs