import React,{Component} from "react";
import '../../../scss/styles/FirstStepForm.scss'


class StepTwo extends Component{
    constructor(props){
        super(props)}
        render() {
        return(<>
                <section>
                    <div className='yellowDiv'>
                        <h3>WAŻNE !</h3>
                        <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcje jak poprawnie spakować rzeczy znajdziesz TUTAJ</p>
                    </div>
                    <div className='bearDiv'>

                        <form>
                            <div className='stepTwo stepDiv'>
                                <h5>Krok 2/4</h5>
                                <h3>Podaj liczbę 60 l worków w które spakowałaś/eś rzeczy</h3>
                                <label>Liczba 60 l worków:</label>
                                <select value={this.state.valueOption} onChange={this.handleOnChangeOption}>
                                    <option value=''>--wybierz--</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                                <br/>
                                <button onClick={this.handleButtonPrev}>WSTECZ</button>
                                <button onClick={this.handleButtonNext}>DALEJ</button>


                            </div>
                        </form>
                    </div>
                </section>

            </>

        )
        }
        }

        export default StepTwo
