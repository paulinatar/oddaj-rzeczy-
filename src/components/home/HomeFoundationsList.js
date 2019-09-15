import React,{Component} from "react";
import {Link} from "react-router-dom";
import '../../scss/styles/HomeFoundationsList.scss'


class HomeFoundationsList extends Component {
    state = {
        foundationList: false,
        ngosList: false,
        localList: false
    };


render() {



    return(


            <div className='foundationsList' name ="HomeFoundationsList">
                <h2>Komu pomagamy ?</h2>
                <div className='decoration'></div>
                <div className='buttons'>
                    <button   onClick='pierwsza'>Fundacjom</button>
                    <button onClick='druga'>Organizacjom pozarządowym</button>
                    <button onClick='trezecia'>Lokalnym Zbiórkom</button>

                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className='lists'>
                    <lista>123</lista>
                </div>
            </div>)


    }
}
export default HomeFoundationsList