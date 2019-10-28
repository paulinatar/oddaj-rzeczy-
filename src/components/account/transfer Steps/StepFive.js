import React,{Component} from "react";
import '../../../scss/styles/FirstStepForm.scss'


class StepFive extends Component{
    constructor(props){
        super(props)}
    render() {
        return(<>
            <section> <div className='bearDiv'>


            <div className='stepFive stepDiv'>
                <h2>Podsumowanie Twojej darowizny</h2>
                <h3>Oddajesz:</h3>
                <div className='tshirt'></div>
                <p>{this.state.valueOption} worki, {this.state.valueRadio} {this.state.valueRadioP}</p>
                <div className='around'></div>
                <p> dla lokalizacji: {this.state.valueCity}</p>
                <h3>Adres odbioru:</h3>
                <p>Ulica {this.state.streetName}</p>
                <p>Miasto {this.state.cityName}</p>
                <p>Kod pocztowy {this.state.postcode}</p>
                <p>Numer telefonu {this.state.mobilePhone}</p>
                <h3>Termin odbioru:</h3>
                <p>Data {this.state.day}</p>
                <p>Godzina {this.state.hour}</p>
                <p>Uwagi dla kuriera {this.state.info}</p>

                <button onClick={this.handleButtonPrev}>WSTECZ</button>
                <button onClick={this.handleButtonNext}>DALEJ</button>

            </div>
        </div>
        </section>
        </>)
    }}

    export default StepFive