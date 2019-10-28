import React,{Component} from "react";
import '../../../scss/styles/FirstStepForm.scss'


class StepThree extends Component{
    constructor(props){
        super(props)}
        render() {
        return(
            <>
                <section>
                    <div className='yellowDiv'>
                        <h3>WAŻNE !</h3>
                        <p>Jeśli wiesz komu chcesz pomóc, mozesz wpisać nazwe tej organizacji w wyszukiwarce. Możesz też
                            filtrować organizacje po ich lokalizacji lub celu ich pomocy.</p>
                    </div>
                    <div className='bearDiv'>

                        <form>
                            <div className='stepThree stepDiv'>
                                <h5>Krok 3/4</h5>
                                <h3>Lokalizacja:</h3>
                                <select onChange={this.handleOnChangeCityOption} value={this.state.valueCity}>
                                    <option value=''>--wybierz--</option>
                                    <option value='Poznan'>Poznań</option>
                                    <option value='Warszawa'>Warszawa</option>
                                    <option value='Kraków'>Kraków</option>
                                    <option value='Wrocław'>Wrocław</option>
                                    <option value='Katowice'>Katowice</option>
                                </select>

                                <br/>
                                <h3>Komu chcesz pomóc ? </h3><br/>
                                <input type='radio' name={'radio'} id='dzieciom' value='dzieciom'
                                       onClick={this.handleOnChangeRadioP}/><label htmlFor="dzieciom">dzieciom</label>
                                <input type='radio' name={'radio'} id='samotnym matkom' value='samotnym matkom'
                                       onClick={this.handleOnChangeRadioP}/><label htmlFor='samotnym matkom'>samotnym
                                matkom</label>
                                <input type='radio' name={'radio'} id='bezdomnym' value='bezdomnym'
                                       onClick={this.handleOnChangeRadioP}/><label htmlFor="bezdomnym">bezdomnym</label>
                                <br/>
                                <input type='radio' name={'radio'} id='niepełnospawnym' value='niepełnosprawnym'
                                       onClick={this.handleOnChangeRadioP}/><label
                                htmlFor="niepełnospawnym">niepełnosprawnym</label>
                                <input type='radio' name={'radio'} id='osobom starszym' value='osobom starszym'
                                       onClick={this.handleOnChangeRadioP}/><label htmlFor="osobom starszym">osobom
                                starszym</label>

                                <br/>
                                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)
                                    <input type='text' value={this.state.valueNameOrg}
                                           onChange={this.handleOnChangeOrg}/>
                                </label>
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
        export default StepThree