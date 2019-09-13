import React,{Component} from "react";
import {NavLink, Link} from "react-router-dom";
import '../../scss/styles/HomeWhatAbout.scss'


class HomeWhatAbout extends Component{
    render() {
        const style_button= {
            border: '1px solid #FAD648'
        };
        return( <div className='container' name ='HomeWhatAbout'>
           <br/>
            <h2> Wystarczą 4 proste kroki</h2>
            <div className='decoration'></div>
            <div className='fourSteps'>
                <div className='numberStep'>
                    <div className='image1'></div>
                    <p>Wybierz rzeczy</p>
                    <hr/>
                    <p>ubrania, zabawki, sprzet i inne</p>

                </div>
                <div className='numberStep'>
                    <div className='image2'></div>
                    <p>Spakuj je</p>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>

                </div>
                <div className='numberStep'>
                    <div className='image3'></div>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>

                </div>
                <div className='numberStep'>
                    <div className='image4'></div>
                    <p>Zamów kuriera</p>
                    <hr/>
                    <p>kurier przyjedzie w dogodnym terminie</p>

                </div>

            </div>
            <button><NavLink activeStyle={style_button} to ='/login'>ODDAJ RZECZY</NavLink></button>


        </div>)
    }
}

export default HomeWhatAbout