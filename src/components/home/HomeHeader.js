import React,{Component} from "react";
import {NavLink, Link} from "react-router-dom";
import Navigations from "../navigations/Navigations";
import HomeColumns from "./HomeColumns";
import '../../scss/styles/HomeHeder.scss'
import decoration from '../../assets/Decoration.svg'



class HomeHeader extends Component{
    render() {
        const style_button= {
            border: '1px solid #FAD648'
        };
        return(
            <div className='main'>
            <div className='leftImage'></div>
            <div className='rightMenu'>
                <Navigations/>
                <div className='startHelp'>
                    <h2>Zacznij pomagać !</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={decoration} style={{width: '200px'}}/>
                    <div className='buttons'>
                        <button><NavLink activeStyle={style_button} to='/login'>oddaj rzeczy</NavLink></button>
                        <button><NavLink activeStyle={style_button} to ='/login'>zorganizuj zbiórkę</NavLink></button>

                    </div>



                </div>





            </div>





        </div>)
    }
}

export default HomeHeader