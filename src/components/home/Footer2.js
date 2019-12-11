import React,{Component} from 'react';
import '../../scss/styles/Footer2.scss'



class Footer extends Component{
    render() {
        return(
            <footer className={"contactFooter"}>
                <div className={"copyrightText"}>Copyright by Coders Lab</div>
                <div className='logo'>
                  <div className={"facebook"}></div>
                  <div className={"instagram"}></div>
                </div>
            </footer>
        )
    }
}


export default Footer;