import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/HomeContactForm.scss'



class HomeContactForm extends Component{
    render() {
        return(
            <div className='container4' name ='HomeContactForm'>
                <div className='leftFormImage'></div>
                <div className='rightForm'>
                    <h2>Skontaktuj się z nami</h2>
                    <div className='decorations'></div>
                    <form className='contactForm'>
                        <label>Wpisz swoje imię</label>
                        <input type='name' className='inputName'/>
                        <label>Wpisz swój email</label>
                        <input type='email' className='inputName'/>
                        <label>Wpisz swoją wiadomośc</label>
                        <textarea />
                        <button>Wyślij</button>

                    </form>


                </div>
            </div>)








}}

export default HomeContactForm