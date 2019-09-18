import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/Register.scss'
import Navigations from "../navigations/Navigations";


class Register extends Component{
    render() {
        return (
            <div className='container5'>
                <Navigations/>
                <div className= 'registerDiv'>
                    <h2>Załóż konto</h2>
                    <div className='decoration'></div>
                    <div className='registerForm'>
                            <form>
                                <label>Email</label>

                                <input type='name' className='inputName'/>
<br/>
                                <label>Hasło</label>

                                <input type='password' className='inputName'/>
<br/>
                                <label>Powtórz hasło</label>

                                <input type='password'/>

                            </form>
                    </div>
                        <button className='loginStyle' type='submit'>Zaloguj się</button>
                        <button type='submit'> Załóż konto</button>




                </div>


                </div>
            )


    }
}

export default Register