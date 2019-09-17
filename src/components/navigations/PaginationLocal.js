import React,{Component} from "react";
import '../../scss/styles/paginations.scss'






class PaginationLocal extends Component{
    constructor(){
        super();
        this.state ={
            local:[{
                title: "zbiórka 1",
                mission: "Quis varius quam quisque id diam vel quam elementum pulvinar",
                subjects: "Egestas, sed, tempus"
            },
                {
                    title: "Zbiorka 2",
                    mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue",
                    subjects: "Ut, aliquam, purus, sit, amet"
                },
                {
                    title: "Zbiórka 3",
                    mission: "Scelerisque in dictum non consectetur a erat nam",
                    subjects: "Mi, quis, hendretit, dolor"
                },],
            currentPage:1,
            perPage:3,

        }

    }


    handleClick =(event,i)=>{
        this.setState({
            currentPage: i
        })
    };
    render() {
        const {local, currentPage, perPage} = this.state;

        const indexOfLast = currentPage*perPage;
        const indexOfFirst =indexOfLast - perPage;
        const currentFounds = local.slice(indexOfFirst, indexOfLast);


        const  thirdList =currentFounds.map((loc, i)=>{
            return <li key ={i}><h3>Zbiórka: {loc.title}</h3><h5>{loc.mission}</h5><h6>{loc.subjects}</h6></li>


        });

        const pageNumbers =[];
        for (let i=1; i<=Math.ceil(local.length/perPage);i++)
        {
            const element = <li className='paginationButton' key={i} onClick={e => this.handleClick(e, i)}>{i}</li>
            pageNumbers.push(element)
        }



        return (<section>
            <p className='infoAbout'>About local Egestas sed sed risus pretium quam vulputate. Dui nunc mattis enim ut tellus elementum sagittis vitae. Mattis rhoncus urna neque viverra justo nec. Sed lectus vestibulum mattis ullamcorper. </p>
            <ul className='organizationList'>
                {thirdList}
            </ul>
            <ul className='numbers'>
                {pageNumbers}
            </ul>

        </section>)
    }
}



export default PaginationLocal