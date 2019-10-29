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
                <p>{this.props.valueOption} worki, {this.props.valueRadio} {this.props.valueRadioP}</p>
                <div className='around'></div>
                <p> dla lokalizacji: {this.props.valueCity}</p>
                <h3>Adres odbioru:</h3>
                <p>Ulica {this.props.streetName}</p>
                <p>Miasto {this.props.cityName}</p>
                <p>Kod pocztowy {this.props.postcode}</p>
                <p>Numer telefonu {this.props.mobilePhone}</p>
                <h3>Termin odbioru:</h3>
                <p>Data {this.props.day}</p>
                <p>Godzina {this.props.hour}</p>
                <p>Uwagi dla kuriera {this.props.info}</p>

                <button onClick={this.props.handleButtonPrev}>WSTECZ</button>
                <button onClick={this.props.handleButtonNext}>DALEJ</button>

            </div>
        </div>
        </section>
        </>)
    }}

    export default StepFive