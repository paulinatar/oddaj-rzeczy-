import React,{Component} from "react";
import '../../scss/styles/HomeFoundationsList.scss'
import PaginationFoudations from "../navigations/PaginationFoundations";
import PaginationNgos from "../navigations/PaginationNgos";
import PaginationLocal from "../navigations/PaginationLocal";




class HomeFoundationsList extends Component {
    state = {
        foundationList: true,
        ngosList: false,
        localList: false,
        border0:"",
        border1: "buttonBorder",
        border2: "",
        border3: ''
    };
    handleOnButtonFoundations=()=>{
     this.setState({border1:"buttonBorder", border2:"", border3:"",foundationList:true, ngosList: false, localList:false })
 };
    handleOnButtonNgos = ()=>{
        this.setState({border1:"", border2:"buttonBorder", border3:"", foundationList:false, ngosList: true, localList: false})
    };
    handleOnButtonLocal =()=>{
        this.setState({border1:"", border2:"", border3:"buttonBorder", foundationList: false, ngosList:false, localList:true})
    };


render() {



    return(


            <div className='foundationsList' name ="HomeFoundationsList">
                <h2>Komu pomagamy ?</h2>
                <div className='decoration'></div>
                <div className='buttons'>
                    <button   className={this.state.border1}  onClick={this.handleOnButtonFoundations}>Fundacjom</button>
                    <button className={this.state.border2} onClick={this.handleOnButtonNgos}>Organizacjom pozarządowym</button>
                    <button  className={this.state.border3} onClick={this.handleOnButtonLocal}>Lokalnym Zbiórkom</button>

                </div>

                <div className='lists'>
                    <div>
                        {this.state.foundationList &&<PaginationFoudations/>}
                    </div>
                    <div>
                        {this.state.ngosList&& <PaginationNgos/>}
                    </div>
                    <div>
                        {this.state.localList&&<PaginationLocal/>}
                    </div>



                </div>
            </div>)


    }
}
export default HomeFoundationsList