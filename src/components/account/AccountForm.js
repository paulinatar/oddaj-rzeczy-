import React,{Component} from "react";
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