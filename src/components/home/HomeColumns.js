import React,{Component} from "react";
import '../../scss/styles/HomeColumns.scss'


class HomeColumns extends Component{
    render() {
        return( <div className='yellowContainer'>
            <div className='column'>
                <div>5</div>
                <h5>ODDANNYCH WORKÓW</h5>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adpisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat</p>
            </div>
            <div className='column'>
                <div>8</div>
                <h5>WSPARTYCH ORGANIZACJI</h5>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adpisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat</p>
            </div>
            <div className='column'>
                <div>9</div>
                <h5>ZORGANIZOWANYCH ZBIOREK</h5>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adpisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat</p>
            </div>



        </div>)
    }
}


export default HomeColumns