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
                                    <input type='text' name= {'streetName'} value={this.state.streetName} onChange={this.handleOnChangeOrg}/>
                                </label>
                                <label>Miasto
                                    <input type='text' value={this.state.cityName} name='cityName' onChange={this.handleOnChangeOrg}/>
                                </label>
                                <label>Kod pocztowy
                                    <input type='postcode' name='postcode' value={this.state.postcode} onChange={this.handleOnChangeOrg}/>
                                </label>
                                <label>Numer telefonu
                                    <input type='phonenumber' name='mobilePhone' value={this.state.mobilePhone} onChange={this.handleOnChangeOrg}/>
                                </label>
                                <h5>Termin odbioru</h5>
                                <label>Data
                                    <input type='date' name='day'value={this.state.day} onChange={this.handleOnChangeOrg}/>
                                </label>
                                <label>Godzina
                                    <input type='hour' name='hour'value={this.state.hour} onChange={this.handleOnChangeOrg}/>
                                </label>
                                <label>Uwagi dla kuriera
                                    <input type='text' name='info'value={this.state.info} onChange={this.handleOnChangeOrg}/>
                                </label>
                                <button onClick={this.handleButtonPrev}>WSTECZ</button>
                                <button onClick={this.handleButtonNext}>DALEJ</button>
                            </div>

                        </form>
                    </div>
                </section>
                </>
        )}}
        export default StepFour