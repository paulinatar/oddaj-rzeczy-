import React,{Component} from "react";
import '../../scss/styles/Login.scss'
import Navigations from "../navigations/Navigations";
import * as ROUTES from '../../constants/routes'


class Login extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        formSend: false,
        errEmail: false,
        errPsw: false,
        errPsw2:false,
    };

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    handleOnSubmit = e => {


        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
        let email = this.state.email;
        let psw = this.state.password;
        let formSend = false;
        let errPsw = false;
        let errEmail = false;
        let errPsw2=false;
        e.preventDefault();

        if (!mailReg.test(email)) {
            errEmail = true;
        }
        if (psw.length < 6) {
            errPsw = true;
        }

        formSend = (!errEmail && !errPsw);
        this.setState({formSend: formSend, errPsw: errPsw, errEmail: errEmail});

        if (formSend === true) {
            this.props.firebase
                .doSignInWithEmailAndPassword(email, psw)
                .then(authUser => {
                    console.log(authUser);
                    sessionStorage.setItem("email",`${this.state.email}`);
                    this.setState({email: "", password: "",});
                    this.props.history.push(ROUTES.AFTERLOGIN);

                })
                .catch(error => {

                    console.log(error.code);
                    if(error.code==="auth/wrong-password"){
                        errPsw2=true;



                    }
                    this.setState({errPsw2:errPsw2});
                });
        }


    }

    ;
    render() {
        return (
            <div className='container5'>
                <Navigations/>
                <div className= 'registerDiv'>
                    <h2>Zaloguj sie</h2>
                    <div className='decoration'></div>
                    <form onSubmit={this.handleOnSubmit}>
                    <div className='registerFormlog'>

                            <label>Email</label>

                            <input type='email' name="email" value={this.state.email} onChange={this.handleOnChange} className='inputName'/>
                            {this.state.errEmail &&<span style={{color:'red'}}>Podany email jest nieprawidłowy!</span>}
                            <br/>
                            <label>Hasło</label>

                            <input type='password' name='password' value={this.state.password} onChange={this.handleOnChange} className='inputName'/>
                            {this.state.errPsw && <span style={{color:'red'}}>Podane hasło jest za krótkie</span>}
                        {this.state.errPsw2 && <span  style={{color: 'red'}}>Podane hasło jest nieprawidłowe!</span>}

                    </div>
                        <button type='submit'> Załóż konto</button>
                    <button className='loginStyle' type='submit' value='send'>Zaloguj się</button>

                </form>



                </div>


            </div>
        )


    }
}

export default Login