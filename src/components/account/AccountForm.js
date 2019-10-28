import React,{Component} from "react";
import GiveThingsHeader from "./GiveThingsHeader";
import TransferStepByStepForm from "./TransferStepByStepForm";
import HomeContactForm from "../home/HomeContactForm";


class AccountForm extends Component{
    render() {
        return(
            <>
            <GiveThingsHeader/>
            <TransferStepByStepForm/>
            <HomeContactForm/>

            </>

        )
    }
}

export default AccountForm