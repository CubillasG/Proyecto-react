import React from 'react';
import './search-bar.css';
import logo from '../logoo.png'
class SearchBar extends React.Component{
    state = {
        buscador : ''
    };
    handleChange = e =>{
        this.setState({ [e.target.name]: e.target.value});
        console.log(e.target.name, e.target.value)
    }

    handleSubmit = e=>{
        e.preventDeFault();
        console.log(e.target.name)
    }
    render(){
        return(
            <React.Fragment>
           
                <div className='row'>
                    <div className='col-md-2'>
                    <img src={logo} className='logo'/>
                    </div>
                    <div className='col-md-6'></div>
                    <div className='col-md-4'>
                    <form 
                    className="row g-3"
                    onSubmit={this.handleSubmit}
                    >
  
                         <div className="buscador">
                            <input type="text"
                                name='buscador'
                                id='buscar'
                                value={this.state.buscador}
                                placeholder="Busca una banda"
                                onChange = {this.handleChange}
                             />
                         </div>
  
                    </form>
                    </div>

                    
                </div>
                <hr></hr>
            
          
            </React.Fragment>
        )
    }
}
export default SearchBar;