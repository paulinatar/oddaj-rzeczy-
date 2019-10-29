import React,{Component} from "react";
import '../../../scss/styles/FirstStepForm.scss'


class StepFour extends Component{
    constructor(props){
        super(props)}
    render() {
        return(
            <>

                <section>
                    <div className='yellowDiv'>
                        <h3>WAŻNE !</h3>
                        <p>Podaj adres oraz termin odbioru rzeczy</p>
                    </div>
                    <div className='bearDiv'>

                        <form>

                            <div className='stepFour stepDiv'>
                                <h5>Krok 4/4</h5>
                                <h3>Podaj adres i termin odbioru przez kuriera </h3>
                                <h5>Adres odbioru:</h5>
                                <label>Ulica
                                    <input type='text' name= {'streetName'} value={this.props.streetName} onChange={this.props.handleOnChangeOrg}/>
                                </label>
                                <label>Miasto
                                    <input type='text' value={this.props.cityName} name='cityName' onChange={this.props.handleOnChangeOrg}/>
                                </label>
                                <label>Kod pocztowy
                                    <input type='postcode' name='postcode' value={this.props.postcode} onChange={this.props.handleOnChangeOrg}/>
                                </label>
                                <label>Numer telefonu
                                    <input type='phonenumber' name='mobilePhone' value={this.props.mobilePhone} onChange={this.props.handleOnChangeOrg}/>
                                </label>
                                <h5>Termin odbioru</h5>
                                <label>Data
                                    <input type='date' name='day'value={this.props.day} onChange={this.props.handleOnChangeOrg}/>
                                </label>
                                <label>Godzina
                                    <input type='hour' name='hour'value={this.props.hour} onChange={this.props.handleOnChangeOrg}/>
                                </label>
                                <label>Uwagi dla kuriera
                                    <input type='text' name='info'value={this.props.info} onChange={this.props.handleOnChangeOrg}/>
                                </label>
                                <button onClick={this.props.handleButtonPrev}>WSTECZ</button>
                                <button onClick={this.props.handleButtonNext}>DALEJ</button>
                            </div>

                        </form>
                    </div>
                </section>
                </>
        )}}
        export default StepFour