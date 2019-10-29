import React,{Component} from "react";
import '../../../scss/styles/FirstStepForm.scss'


class StepOne extends Component{
    constructor(props){
    super(props)}

    render() {
        return<><section>
            <div className='yellowDiv'>
                <h3>WAŻNE !</h3>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu je przekazać</p>
            </div>
            <div className='bearDiv'>

                <form>
                    <div className='stepOne stepDiv'>
                        <h5>Krok 1/4</h5>

                        <h3>Zaznacz co chcesz oddać:</h3>
                        <input type='radio' name={'radio'} onClick={this.props.handleOnChangeRadio}value={"Ubrania, które nadaja sie do ponownego uzycia"}/><label>ubrania, które nadają sie do ponownego użycia</label>
                        <br/>
                        <input  type='radio' name={'radio'} onClick={this.props.handleOnChangeRadio} value={"ubrania do wyrzucenia"}/><label>ubrania, do wyrzucenia</label>
                        <br/>
                        <input type='radio' name={'radio'} onClick={this.props.handleOnChangeRadio} value={"zabawki"} /><label>zabawki</label>
                        <br/>
                        <input  type='radio' name={'radio'} onClick={this.props.handleOnChangeRadio} value={"ksiązki"}/><label>książki</label>
                        <br/>
                        <input  type='radio' name={'radio'} onClick={this.props.handleOnChangeRadio} value={"Inne"}/><label>Inne</label>
                        <br/>
                        <button onClick={this.props.handleButtonNext}>Dalej</button>
                    </div>
                </form>
            </div>
        </section>

            </>
    }

}

export default StepOne