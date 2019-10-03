import React,{Component} from "react";
import {NavLink, Link} from "react-router-dom";


import '../../scss/styles/HomeHeder.scss'
import decoration from '../../assets/Decoration.svg'
import NavigationUser from "../navigations/NavigationUser";
import * as ROUTES from '../../constants/routes'




class HomeAfterLogin extends Component{
    render() {
        const style_button= {
            border: '1px solid #FAD648'
        };
        return(
            <div className='main'>
                <div className='leftImage'></div>
                <div className='rightMenu'>
                    <NavigationUser/>
                    <div className='startHelp'>
                        <h2>Zacznij pomagać !</h2>
                        <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <img src={decoration} style={{width: '180px'}}/>
                        <div className='buttons'>
                            <button><NavLink activeStyle={style_button} to={ROUTES.ACCOUNT}>oddaj rzeczy</NavLink></button>
                            <button><NavLink activeStyle={style_button} to ={ROUTES.ACCOUNT}>zorganizuj zbiórkę</NavLink></button>

                        </div>

                    </div>

                </div>

            </div>)
    }
}

export default HomeAfterLogin