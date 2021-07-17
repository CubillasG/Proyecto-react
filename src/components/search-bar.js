import React from 'react';
import './search-bar.css';
import logo from '../logoo.png'
import {Link} from 'react-router-dom';
class SearchBar extends React.Component{
    state = {};
    // handleChange = e =>{
    //     this.setState({ [e.target.name]: e.target.value});
    //     console.log(e.target.name, e.target.value)
    // }

    handleSubmit = e=>{
        e.preventDeFault();
        console.log(e.target.name)
    }
    render(){
        return(
            <React.Fragment>
           
                <div className='row'>
                    <h1>{this.props.busqueda}</h1>
                    <div className='col-md-2'>
                    <Link to='/'>
                    <img src={logo} className='logo'/>
                    </Link>
                    </div>
                    <div className='col-md-6'></div>
                    <div className='col-md-4'>
                    
                    </div>

                    
                </div>
                <hr></hr>
            
          
            </React.Fragment>
        )
    }
}
export default SearchBar;