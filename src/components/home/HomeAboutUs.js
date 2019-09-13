import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/HomeAboutUs.scss'





class HomeAboutUs extends Component{
    render() {
        return (<div className='container3'name ='HomeAboutUs' >
            <div className='leftWhatAbout'>
            <h2>O nas</h2>
                <div className='decorations'></div>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
                <div className='sight'></div>
            </div>
            <div className='rightImage'></div>

        </div>)
    }
}

export default HomeAboutUs