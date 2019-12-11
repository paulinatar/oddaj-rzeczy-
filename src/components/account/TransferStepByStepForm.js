import React,{Component} from "react";
import '../../scss/styles/FirstStepForm.scss'
import StepOne from "./transfer Steps/StepOne";
import StepTwo from "./transfer Steps/StepTwo";
import StepThree from "./transfer Steps/StepThree";
import StepFour from "./transfer Steps/StepFour";
import StepFive from "./transfer Steps/StepFive";
import StepSix from "./transfer Steps/StepSix";



class TransferStepByStepForm extends Component{
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
        errStreet: false,
        errCity: false,
        errPostcode:false,
        errPhone: false,
        errDate: false,
        errTime: false,
        errInfo: false,
        formSendThings:false,

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
    handleOnSubmitForm =e=>{
        e.preventDefault();
        this.setState({
            errStreet:false, errCity: false, errPostcode:false, errPhone: false, errData:false, errTime:false
        });
        const postcodeReg = /[0-9]{2}-[0-9]{3}$/i;
        const phoneReg = /^\d{3}-?\d{3}-?\d{3}$/;
const {streetName, cityName, postcode, mobilePhone, day, hour}=this.state;
if (streetName.length> 2 && cityName.length>2&& postcodeReg.test(postcode)&& phoneReg.test(mobilePhone)&&day.length >0 && hour.length>0){
   this.setState({formSendThings:true, counter: this.state.counter +1 })
}else {
    if (streetName.length>2){
        this.setState({errStreet:true});
    }
    if (cityName.length>2){
        this.setState({errCity: true});
    }
    if (!postcodeReg.test(postcode)){
        this.setState({errPostcode:true});
    }
    if (!phoneReg.test(mobilePhone)){
        this.setState({errPhone:true})
    }if (day.length===0){
        this.setState({errData:true});
    }
    if (hour.length===0){
        this.setState({errTime:true})
    }
}
    };

    render() {

           let step1=  <StepOne handleOnChangeRadio = {this.handleOnChangeRadio} handleButtonNext = {this.handleButtonNext}/>;

           let step2= <StepTwo valueOption={this.state.valueOption} handleOnChangeOption={this.handleOnChangeOption}
                               handleButtonPrev = {this.handleButtonPrev} handleButtonNext = {this.handleButtonNext} />;

           let step3= <StepThree handleButtonPrev = {this.handleButtonPrev} handleButtonNext = {this.handleButtonNext} handleOnChangeCityOption = {this.handleOnChangeCityOption}
                                 valueCity = {this.state.valueCity} handleOnChangeRadioP = {this.handleOnChangeRadioP} handleOnChangeOrg = {this.handleOnChangeOrg}  valueNameOrg = {this.state.valueNameOrg}  /> ;

           let step4=<StepFour  handleButtonPrev = {this.handleButtonPrev} handleButtonNext = {this.handleButtonNext} handleOnChangeOrg = { this.handleOnChangeOrg}
                             streetName = {this.state.streetName} cityName = {this.state.cityName} postcode = {this.state.postcode} mobilePhone = {this.state.mobilePhone}
                             day = {this.state.day} hour = {this.state.hour} info = {this.state.info} handleOnSubmitForm ={this.props.handleOnSubmitForm} formSendThings ={this.props.formSendThings}
                                errStreet ={this.props.errStreet} errCity = {this.props.errCity} errPostcode = {this.props.errPostcode} errPhone = {this.props.errPhone} errData = {this.props.errData} errTime={this.props.errTime}
           />;

        let step5 =<StepFive handleButtonPrev = {this.handleButtonPrev} handleButtonNext = {this.handleButtonNext} handleOnChangeOrg = { this.handleOnChangeOrg}
                             streetName = {this.state.streetName} cityName = {this.state.cityName} postcode = {this.state.postcode} mobilePhone = {this.state.mobilePhone}
                             day = {this.state.day} hour = {this.state.hour} info = {this.state.info} valueOption = {this.state.valueOption} valueRadio = {this.state.valueRadio}
                             valueRadioP = {this.state.valueRadioP} valueCity = {this.state.valueCity}/>;


        let step6 =<StepSix/>;



        let counter =this.state.counter;

if (counter === 2 && this.state.valueRadio !== ''){
    return step2
} else if (counter === 3 && this.state.valueOption !== null) {
    return step3
} else if (counter === 4 && this.state.valueRadioP !== null) {
    return step4
} else if (counter === 5 && this.state.mobilePhone !== null) {
    return step5
} else if (counter === 6) {
    return step6
}
        return step1
    }
}



export default TransferStepByStepForm