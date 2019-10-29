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
                                <select onChange={this.props.handleOnChangeCityOption} value={this.props.valueCity}>
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
                                       onClick={this.props.handleOnChangeRadioP}/><label htmlFor="dzieciom">dzieciom</label>
                                <input type='radio' name={'radio'} id='samotnymMatkom' value='samotnymMatkom'
                                       onClick={this.props.handleOnChangeRadioP}/><label htmlFor='samotnymMatkom'>samotnym
                                matkom</label>
                                <input type='radio' name={'radio'} id='bezdomnym' value='bezdomnym'
                                       onClick={this.props.handleOnChangeRadioP}/><label htmlFor="bezdomnym">bezdomnym</label>

                                <input type='radio' name={'radio'} id='niepelnospawnym' value='niepelnosprawnym'
                                       onClick={this.props.handleOnChangeRadioP}/><label
                                htmlFor="niepelnospawnym">niepełnosprawnym</label>
                                <input type='radio' name={'radio'} id='osobomStarszym' value='osobomStarszym'
                                       onClick={this.props.handleOnChangeRadioP}/><label htmlFor="osobomStarszym">osobom
                                starszym</label>
                                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                                    <textarea cols='70' type='text' value={this.props.valueNameOrg}
                                           onChange={this.props.handleOnChangeOrg}/>
                                <button onClick={this.props.handleButtonPrev}>WSTECZ</button>
                                <button onClick={this.props.handleButtonNext}>DALEJ</button>


                            </div>
                        </form>
                    </div>
                </section>
                </>
        )
        }
        }
        export default StepThree