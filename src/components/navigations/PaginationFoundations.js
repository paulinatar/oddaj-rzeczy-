import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/paginations.scss'



class PaginationFoudations extends Component{
    constructor(){
        super();
this.state ={
    foundations:[{
        title: "Fundacja 1",
        mission: "Quis varius quam quisque id diam vel quam elementum pulvinar",
        subjects: "Egestas, sed, tempus"
    },
        {
            title: "Fundacja 2",
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue",
            subjects: "ubrania, aliquam, purus, sit, amet"
        },
        {
            title: "Fundacja 3",
            mission: "Scelerisque in dictum non consectetur a erat nam",
            subjects: "Mi, quis, hendretit, dolor"
        },
        {
            title: "Fundacja 4",
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar",
            subjects: "Egestas, sed, tempus"
        },
        {
            title: "Fundacja 5",
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue",
            subjects: "Ut, aliquam, purus, sit, amet"
        },
        {
            title: "Fundacja6",
            mission: "Scelerisque in dictum non consectetur a erat nam",
            subjects: "Mi, quis, hendretit, dolor"
        },
        {
            title: "Fundacja 7",
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar",
            subjects: "Egestas, sed, tempus"
        },
        {
            title: "Fundacja 8",
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue",
            subjects: "Ut, aliquam, purus, sit, amet"
        },
        {
            title: "Fundacja 9",
            mission: "Scelerisque in dictum non consectetur a erat nam",
            subjects: "Mi, quis, hendretit, dolor"
        },
    ],
    currentPage:1,
    perPage:3,

}

    }


    handleClick =(event,i)=>{
        this.setState({
            currentPage: i
        })
    }
    render() {
        const {foundations, currentPage, perPage} = this.state;

        const indexOfLast = currentPage*perPage;
        const indexOfFirst =indexOfLast - perPage;
        const currentFounds = foundations.slice(indexOfFirst, indexOfLast);


        const  firstList =currentFounds.map((found, i)=>{
            return <li key ={i}><h3>Fundacja: {found.title}</h3><h5>{found.subjects}</h5><h6>Cel i misja: {found.mission}</h6></li>

        });

        const pageNumbers =[];
        for (let i=1; i<=Math.ceil(foundations.length/perPage);i++)
        {
            const element = <li  className='paginationButton' key={i} onClick={e => this.handleClick(e, i)}>{i}</li>
            pageNumbers.push(element)
        };



        return (<section className='paginationSection'>
            <p className='infoAbout'>About foundation Adipiscing tristique risus nec feugiat in fermentum. Risus nullam eget felis eget. In eu mi bibendum neque. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Morbi non arcu risus quis varius quam quisque. Et odio pellentesque diam volutpat commodo sed.  </p>
            <ul className='organizationList'>
                {firstList}
            </ul>
            <ul className='numbers'>
                {pageNumbers}
            </ul>


        </section>)
    }
}



export default PaginationFoudations