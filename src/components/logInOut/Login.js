import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/Login.scss'
import Navigations from "../navigations/Navigations";


class Login extends Component{
    render() {
        return (
            <div className='container5'>
                <Navigations/>
                <div className= 'registerDiv'>
                    <h2>Zaloguj sie</h2>
                    <div className='decoration'></div>
                    <div className='registerFormlog'>
                        <form>
                            <label>Email</label>

                            <input type='name' className='inputName'/>
                            <br/>
                            <label>Hasło</label>

                            <input type='password' className='inputName'/>

                        </form>
                    </div>
                    <button className='loginStyle' type='submit'>Zaloguj się</button>
                    <button type='submit'> Załóż konto</button>




                </div>


            </div>
        )


    }
}

export default Login