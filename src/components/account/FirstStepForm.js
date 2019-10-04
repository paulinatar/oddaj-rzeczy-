import React,{Component} from "react";
import {NavLink, Link} from "react-router-dom";
import '../../scss/styles/FirstStepForm.scss'



class FirstStepForm extends Component{
    state={

    }
    render() {
        return (<><div className='green'>
            <div className='yellowDiv'>
            <h3>WAŻNE !</h3>
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu je przekazać</p>
            </div>
                <div className='bearDiv'>

                    <form>
                        <div className='stepOne stepDiv'>
                        <h5>Krok 1/4</h5>

                        <h3>Zaznacz co chcesz oddać:</h3>
                        <input type='checkbox'/><label>ubrania, które nadają sie do ponownego użycia</label>
                            <br/>
                        <input  type='checkbox'/><label>ubrania, do wyrzucenia</label>
                            <br/>
                        <input type='checkbox' /><label>zabawki</label>
                            <br/>
                        <input  type='checkbox'/><label>książki</label>
                            <br/>
                        <input  type='checkbox'/><label>Inne</label>
                            <br/>
                        <button>Dalej</button>
                        </div>
                        <div className='stepTwo stepDiv'>
                            <h5>Krok 2/4</h5>
                            <h3>Podaj liczbę 60 l worków w które spakowałaś/eś rzeczy</h3>
                            <label>Liczba 60 l worków:</label>
                            <select>
                                <option>--wybierz--</option>
<option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <br/>
<button>WSTECZ</button>
                            <button>DALEJ</button>


                        </div>
                        <div className='stepThree stepDiv'>
<h5>Krok 3/4</h5>
                            <label>Lokalizcja:
                                <select>
                                    <option>--wybierz--</option>
                                    <option>Poznań</option>
                                    <option>Warszawa</option>
                                    <option>Kraków</option>
                                    <option>Wrocław</option>
                                    <option>Katowice</option>
                                </select>
                            </label>
                            <label>Komu chcesz pomóc ?
                                <button type='input'>dzieciom</button>
                                <button type='input'>samotnym matkom</button>
                                <button type='input'>bezdomnym</button>
                                <button type='input'>niepełnosprawnym</button>
                                <button type='input'>osobom starszym</button>
                            </label>
                            <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)
                                <input/>
                            </label>
                            <button>WSTECZ</button>
                            <button>DALEJ</button>


                        </div>
                        <div className='stepFour stepDiv'>
                            <h5>Krok 4/4</h5>
                            <h3>Podaj adres i termin odbioru przez kuriera </h3>
                            <h5>Adres odbioru:</h5>
                            <label>Ulica
                                <input type='text'/>
                            </label>
                            <label>Miasto
                                <input/>
                            </label>
                            <label>Kod pocztowy
                                <input/>
                            </label>
                            <label>Numer telefonu
                                <input/>
                            </label>
                            <h5>Termin odbioru</h5>
                            <label>Data
                                <input/>
                            </label>
                            <label>Godzina
                                <input/>
                            </label>
                            <label>Uwagi dla kuriera
                                <input/>
                            </label>
                            <button>WSTECZ</button>
                            <button>DALEJ</button>
                        </div>

                    </form>
                </div>


</div>
            </>

        )
    }
}



export default FirstStepForm