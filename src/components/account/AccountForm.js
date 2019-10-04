import React,{Component} from "react";
import {NavLink, Link} from "react-router-dom";
import GiveThingsHeader from "./GiveThingsHeader";
import FirstStepForm from "./FirstStepForm";
import HomeContactForm from "../home/HomeContactForm";


class AccountForm extends Component{
    render() {
        return(<>
            <GiveThingsHeader/>
            <FirstStepForm/>
            <HomeContactForm/>

            </>

        )
    }
}

export default AccountForm