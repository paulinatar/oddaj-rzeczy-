import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/Login.scss'
import Navigations from "../navigations/Navigations";


class Login extends Component{
    state={
        email:'',
        password:'',
        errLoginEmail:false,
        errLoginPassword:false,
        sendLogin:false
    }
    handleLoginChange =e=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    };
    handleLoginSubmit =e=>{
        this.setState({sendLogin:false})
        this.setState({errLoginEmail:false})
        this.setState({errLoginPassword:false})
        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

        let email=this.state.email
        let password = this.state.password
        e.preventDefault()

        if (mailReg.test(email) && password.length>6){
            this.setState({sendLogin:true})
        } else {
            if (!mailReg.test(email)) {
                this.setState({errLoginEmail:true})
            }
            if (password.length<=6){
                this.setState({errLoginPassword:true})
            }
        }




    }
    render() {
        return (
            <div className='container5'>
                <Navigations/>
                <div className= 'registerDiv'>
                    <h2>Zaloguj sie</h2>
                    <div className='decoration'></div>
                    <form onSubmit={this.handleLoginSubmit}>
                    <div className='registerFormlog'>

                            <label>Email</label>

                            <input type='email' name="email" value={this.state.email} onChange={this.handleLoginChange} className='inputName'/>
                            {this.state.errLoginEmail &&<span style={{color:'red'}}>Podany email jest nieprawidłowy!</span>}
                            <br/>
                            <label>Hasło</label>

                            <input type='text' name='password' value={this.state.password} onChange={this.handleLoginChange} className='inputName'/>
                            {this.state.errLoginPassword && <span style={{color:'red'}}>Podane hasło jest za krótkie</span>}

                    </div>
                    <button className='loginStyle' type='submit' value='send'>Zaloguj się</button>
                    <button type='submit'> Załóż konto</button>
                </form>



                </div>


            </div>
        )


    }
}

export default Login