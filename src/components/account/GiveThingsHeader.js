import React,{Component} from "react";
import NavigationUser from "../navigations/NavigationUser";
import '../../scss/styles/GiveThingsHeader.scss'





class GiveThingsHeader extends  Component{
    render() {
        return (<>
<section className='redBorder'>

                <div className='clothesImage'></div>
                <div className='rightDiv' >
                  <NavigationUser/>
                  <br/>
                  <div className='steps4'>
                     <h2>Oddaj rzeczy, których już nie chcesz</h2>
                     <h2>POTRZEBUJĄCYM </h2>
                     <div className='decoration'></div>
                     <h3>Wystarczą 4 proste kroki:</h3>
                    <br/>
                    <div className='step'><p>1<br/> Wybierz   <br/>    rzeczy</p></div>
                    <div className='step'><p>2<br/> Spakuj je w worki</p></div>
                    <div className='step'><p>3 <br/>Wybierz fundację</p></div>
                    <div className='step'><p>4<br/> Zamów    <br/>   kuriera</p></div>
                  </div>

                </div>
</section>

</>
        )
    }
}




export default GiveThingsHeader