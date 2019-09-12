import React,{Component} from "react";
import {NavLink, Link} from "react-router-dom";
import Navigations from "../navigations/Navigations";
import '../../scss/styles/HomeColumns.scss'


class HomeColumns extends Component{
    render() {
        return( <div className='yellowContainer'>
            <div className='column'>
                <div>5</div>
                <h4>ODDANNYCH WORKÓW</h4>
                <p>lorem ipsum</p>
            </div>
            <div className='column'>
                <div>8</div>
                <h4>WSPARTYCH ORGANIZACJI</h4>
                <p>lorem ipsum</p>
            </div>
            <div className='column'>
                <div>9</div>
                <h4>ZORGANIZOWANYCH ZBIOREK</h4>
                <p>lorem ipsum</p>
            </div>



        </div>)
    }
}


export default HomeColumns