import React,{Component} from "react";
import '../../scss/styles/FirstStepForm.scss'



class FirstStepForm extends Component{
    state={
        valueRadio: '',
        valueOption:'',
        valueCity:'',
        valueRadioP:'',
valueNameOrg:'',
        counter:0,
        streetName:'',
        cityName:'',
        postcode:'',
        mobilePhone:'',
        day:'',
        hour:'',
        info:'',
        step1:true,
        step2:false,
        step3:false,
        step4:false


    };

    handleOnChangeRadio =(e)=>{
        this.setState({valueRadio:e.target.value, counter:1})
    };
    handleOnChangeRadioP =e=>{
        this.setState({valueRadioP:e.target.value})
    };
    handleOnChangeOrg =e=>{
        this.setState({[e.target.name]:e.target.value,valueNameOrg:e.target.value})
    };

    handleButtonNext =()=>{
this.setState({counter:this.state.counter +1})
    };
    handleButtonPrev =()=>{
this.setState({counter:this.state.counter -1})
    };
    handleOnChangeOption =(e)=>{
        this.setState({valueOption: e.target.value})
    };
    handleOnChangeCityOption = e =>{
        this.setState({valueCity:e.target.value})
    };

    render() {

let step1=

           <section>
            <div className='yellowDiv'>
            <h3>WAŻNE !</h3>
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu je przekazać</p>
            </div>
                <div className='bearDiv'>

                    <form>
                        <div className='stepOne stepDiv'>
                        <h5>Krok 1/4</h5>

                        <h3>Zaznacz co chcesz oddać:</h3>
                        <input type='radio' name={'radio'} onClick={this.handleOnChangeRadio}value={"Ubrania, które nadaja sie do ponownego uzycia"}/><label>ubrania, które nadają sie do ponownego użycia</label>
                            <br/>
                        <input  type='radio' name={'radio'} onClick={this.handleOnChangeRadio} value={"ubrania do wyrzucenia"}/><label>ubrania, do wyrzucenia</label>
                            <br/>
                        <input type='radio' name={'radio'} onClick={this.handleOnChangeRadio} value={"zabawki"} /><label>zabawki</label>
                            <br/>
                        <input  type='radio' name={'radio'} onClick={this.handleOnChangeRadio} value={"ksiązki"}/><label>książki</label>
                            <br/>
                        <input  type='radio' name={'radio'} onClick={this.handleOnChangeRadio} value={"Inne"}/><label>Inne</label>
                            <br/>
                        <button onClick={this.handleButtonNext}>Dalej</button>
                        </div>
                    </form>
                </div>
           </section>
           let step2=
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


           let step3=<section>
               <div className='yellowDiv'>
                   <h3>WAŻNE !</h3>
                   <p>Jeśli wiesz komu chcesz pomóc, mozesz wpisać nazwe tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji lub celu ich pomocy.</p>
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
                                <input type='radio' name={'radio'} id='dzieciom' value='dzieciom' onClick={this.handleOnChangeRadioP}/><label for="dzieciom">dzieciom</label>
                                <input type='radio' name={'radio'} id ='samotnym matkom' value='samotnym matkom' onClick={this.handleOnChangeRadioP}/><label for ='samotnym matkom'>samotnym matkom</label>
                                <input type='radio' name={'radio'} id='bezdomnym' value='bezdomnym' onClick={this.handleOnChangeRadioP}/><label for="bezdomnym">bezdomnym</label>
                                <br/>
                                <input type='radio'name={'radio'} id='niepełnospawnym' value='niepełnosprawnym' onClick={this.handleOnChangeRadioP}/><label for="niepełnospawnym">niepełnosprawnym</label>
                                <input type='radio' name={'radio'} id='osobom starszym' value='osobom starszym' onClick={this.handleOnChangeRadioP} /><label for="osobom starszym">osobom starszym</label>

                            <br/>
                            <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)
                                <input type='text' value={this.state.valueNameOrg} onChange={this.handleOnChangeOrg}/>
                            </label>
                            <button onClick={this.handleButtonPrev}>WSTECZ</button>
                            <button onClick={this.handleButtonNext}>DALEJ</button>


                        </div>
                       </form>
                   </div>
               </section>

               let step4=<section>
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
        let step5 =
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
        let step6 =<section>
            <div className='bearDiv'>
            <div className='stepSix stepDiv'>
<h2>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze</h2>
                <div className='decoration'></div>

            </div>
            </div>
        </section>



        let counter =this.state.counter;

if (counter === 2 && this.state.valueRadio !== ''){
    return step2
} else if (counter === 3 && this.state.valueOption !== '') {
    return step3
} else if (counter === 4 && this.state.valueRadioP !== '') {
    return step4
} else if (counter === 5 && this.state.mobilePhone !== '') {
    return step5
} else if (counter === 6) {
    return step6
}


        return step1
    }
}



export default FirstStepForm