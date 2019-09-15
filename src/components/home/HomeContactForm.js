import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/HomeContactForm.scss'



class HomeContactForm extends Component{
    render() {
        return(<>
            <div className='container4' name ='HomeContactForm'>
                <div className='leftFormImage'></div>
                <div className='rightForm'>
                    <h2>Skontaktuj się z nami</h2>
                    <div className='decorations'></div>
                    <div className='formDiv'>
                    <form className='contactForm'>
                        <div className='inputName'>
                        <label>Wpisz swoje imię</label>
                            <br/>
                        <input type='name' className='inputName' placeholder='Krzysztof'/>
                </div>
                        <div className='inputEmail'>
                        <label>Wpisz swój email</label>
                            <br/>
                        <input type='email' className='inputName' placeholder='abc@xyz.pl'/>
                        </div>
                        <br/>
                        <div className='newMessage'>

                        <label>Wpisz swoją wiadomośc</label>
                            <br/>
                        <textarea cols ='80' rows='4'  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'/>
                        </div>
<br/>
                        <button  value='send' type='submit'>Wyślij</button>

                    </form>
                    </div>
                </div>

            </div>
            <div className='footerLab'>
                <p>Copyrights by Coders Lab</p>
                <div className='inLogo'></div>
                <div className='fbLogo'></div>
            </div>
            </>)








}}

export default HomeContactForm