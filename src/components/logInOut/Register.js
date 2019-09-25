import React,{Component} from "react";
import {NavLink, Link, withRouter} from "react-router-dom";
import {compose} from 'recompose'
import {withFirebase} from "../Firebase";
import * as ROUTES from '../../constants/routes'
import '../../scss/styles/Register.scss'
import Navigations from "../navigations/Navigations";




const Register =()=>(
    <>
        <RegisterBase/>

    </>
)

const InitialState ={
    email:'',
    password:'',
    password1:'',
    errEmail: false,
    errPassword: false,
    errPassword1:false,
    sendRegistration:false
}
class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state={...InitialState}
    }

    handleRegisterSubmit =e=>{
        this.setState({sendRegistration:false});
        this.setState({errEmail:false});
        this.setState({errPassword:false});
        this.setState({errPassword1:false})
        const mailReg=/^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
        
        let email=this.state.email;
        let password = this.state.password;
        let password1 = this.state.password1;

        
        if (mailReg.test(email)  && password1===password && password1.length>6) {
            this.setState({sendRegistration:true})
        }else {
            if (!mailReg.test(email)) {
                this.setState({errEmail:true})
            }
            if (password.length<=6){
                this.setState({errPassword:true})
            }
            if (password1.length<=6){
                this.setState({errPassword1:true})
            }
            if (password!==password1){
                this.setState({errPassword1:true})
            }
        }
        
       this.props.firebase
           .doCreateUserWithEmailAndPassword(email, password)
           .then(authUser =>{
               this.setState({...InitialState});
               this.props.history.push(ROUTES.ACCOUNT);
           })
           .catch(error=>{
               this.setState({error})
           })
        e.preventDefault()
    }
    handleRegisterChange =e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    render() {

        return (
            <div className='container5'>
                <Navigations/>
                <div className= 'registerDiv'>
                    <h2>Załóż konto</h2>
                    <div className='decoration'></div>
                    <form onSubmit={this.handleRegisterSubmit}>
                    <div className='registerForm'>
                        
                           
                                <label>Email</label>

                                <input type='email'  name='email' value={this.state.email} onChange={this.handleRegisterChange} className='inputName'/>
                        {this.state.errEmail &&<span style={{color:'red'} }>Podany email jest nieprawdidłowy !</span>}
                                <br/>
                                <label>Hasło</label>

                                <input type='password' name='password'value={this.state.password} onChange={this.handleRegisterChange} className='inputName'/>
                        {this.state.errPassword && <span style={{color:'red'} }>Podane hasło jest za krótkie</span>}
                                <br/>
                                <label>Powtórz hasło</label>

                                <input type='password' name='password1' value={this.state.password1} onChange={this.handleRegisterChange}/>
                        {this.state.errPassword1 &&<span style={{color:'red'} }>Podane hasło nie jest identyczne z pierwszym</span>}
                           
                    </div>
                        <button  type='submit'>Zaloguj się</button>
                        <button  className='loginStyle' type='submit' value='send'> Załóż konto</button>
            </form>



                </div>


                </div>
            )


    }
}

const RegisterBase = compose(
    withRouter,
    withFirebase,
)(RegisterForm);
export {RegisterBase}
export default Register