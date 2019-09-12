import React,{Component} from "react";
import {NavLink, Link} from "react-router-dom";
import '../../scss/styles/HomeWhatAbout.scss'


class HomeWhatAbout extends Component{
    render() {
        return( <div className='container' name ='HomeWhatAbout'>
            <h3> Wystarczą 4 proste kroki</h3>
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
            <button><NavLink to ='/login'>ODDAJ RZECZY</NavLink></button>


        </div>)
    }
}

export default HomeWhatAbout