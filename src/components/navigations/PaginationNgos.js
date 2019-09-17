import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import '../../scss/styles/paginations.scss'




class PaginationNgos extends Component{
    constructor(){
        super();
        this.state ={
            ngoList:[{
                title: "Organizacja Lorem Ipsum 1",
                mission: "Quis varius quam quisque id diam vel quam elementum pulvinar",
                subjects: "Egestas, sed, tempus"
            },
                {
                    title: "Organizacja Lorem Ipsum 2",
                    mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue",
                    subjects: "Ut, aliquam, purus, sit, amet"
                },
                {
                    title: "Organizacja Lorem Ipsum 3",
                    mission: "Scelerisque in dictum non consectetur a erat nam",
                    subjects: "Mi, quis, hendretit, dolor"
                },
                {
                    title: "Organizacja Lorem Ipsum 4",
                    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar",
                    subjects: "Egestas, sed, tempus"
                },
                {
                    title: "Organizacja Lorem Ipsum 5",
                    mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue",
                    subjects: "Ut, aliquam, purus, sit, amet"
                },
                {
                    title: "Organizacja Lorem Ipsum 6",
                    mission: "Scelerisque in dictum non consectetur a erat nam",
                    subjects: "Mi, quis, hendretit, dolor"
                }],
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
        const {ngoList, currentPage, perPage} = this.state;

        const indexOfLast = currentPage*perPage;
        const indexOfFirst =indexOfLast - perPage;
        const currentFounds = ngoList.slice(indexOfFirst, indexOfLast);


        const  secondList =currentFounds.map((ngo, i)=>{
            return <li key ={i}><h3> Organizacja: {ngo.title}</h3><h6>{ngo.subjects}</h6><h5>{ngo.mission}</h5></li>


        });

        const pageNumbers =[];
        for (let i=1; i<=Math.ceil(ngoList.length/perPage);i++)
        {
            const element = <li className='paginationButton' key={i} onClick={e => this.handleClick(e, i)}>{i}</li>;
            pageNumbers.push(element)
        }



        return (<section>
            <p className='infoAbout'>About ngos Egestas sed sed risus pretium quam vulputate. Dui nunc mattis enim ut tellus elementum sagittis vitae. Mattis rhoncus urna neque viverra justo nec. Sed lectus vestibulum mattis ullamcorper.</p>
            <ul className='organizationList'>
                {secondList}
            </ul>
            <ul className='numbers'>
                {pageNumbers}
            </ul>

        </section>)
    }
}


export default PaginationNgos