import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/HomeContactForm.scss'
import Footer from "./Footer2";




class HomeContactForm extends Component{
    state={
        name:'',
        email:'',
        message:'',
        formSend:false,
        errName: false,
        errEmail: false,
        errMessage:false
    };

    handleSubmit =e=>{
        this.setState({formSend:false});
        this.setState({errName:false});
        this.setState({errEmail:false});
        this.setState({errMessage:false})

        const mailReg=/^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
            const nameReg = /^[a-zA-Z]{2,}$/i;
            let name =this.state.name;
            let email= this.state.email;
            let message = this.state.message;
            e.preventDefault()

        if (nameReg.test(name)&& mailReg.test(email)&& message.length>120){
            this.setState({formSend:true})
        } else {
            if (!mailReg.test(email)) {
                this.setState({errEmail: true})
            }
            if (!nameReg.test(name)){
            this.setState({errName:true})
            }
            if (message.length<=120){
                this.setState({errMessage:true})
            }
        }
    };
    handleChange =e=>{
        this.setState({
        [e.target.name]:e.target.value
        })

    }
    render() {
        return(<section>
            <div className='container4' name ='HomeContactForm'>

            </div>
                <div className='rightForm'>
                    <h2>Skontaktuj się z nami</h2>
                    <div className='decorations'></div>
                    <div className='formDiv'>
                        {this.state.formSend &&<span style={{color:'green'} }>Wiadomośc została wysłana !<br/>Wkrótce sie skontaktujemy</span>}
                    <form  onSubmit={this.handleSubmit} className='contactForm'>

                        <div className='inputName'>
                        <label>Wpisz swoje imię</label>
                            <br/>
                        <input type='text' name='name'value={this.state.name}  onChange={this.handleChange} className='inputName' placeholder='Krzysztof'/>
                         <br/>   {this.state.errName && <span style ={{color:'red'}}>Podane imie jest nieprawidłowe !</span>}
                </div>
                        <div className='inputEmail'>
                        <label>Wpisz swój email</label>
                            <br/>
                        <input type='email' name='email' value={this.state.email} onChange={this.handleChange} className='inputName' placeholder='abc@xyz.pl'/>
                           <br/>
                            {this.state.errEmail &&<span  style={{color:'red'} }>Podany email jest nieprawidłowy !</span>}
                        </div>
                        <br/>
                        <div className='newMessage'>

                        <label>Wpisz swoją wiadomośc</label>
                            <br/>
                        <textarea cols ='60' rows='4' name='message' value={this.state.message} onChange={this.handleChange}  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'/>
                          <br/>  {this.state.errMessage &&<span style={{color:'red'} }>Pole wiadomość musi mieć minimum 120 znaków</span>}

                        </div>
<br/>
                        <button  value='send' type='submit'>Wyślij</button>




                    </form>
                    </div>

                </div>


<Footer/>

        </section>)








}}

export default HomeContactForm