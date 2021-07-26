import React  from "react";
import "./page-home.css";
import logo from './logoo.png'
class PageHome extends React.Component{
    handleSubmit = e =>{
        e.preventDefault();
        this.props.history.push('/busqueda?' + this.state.busqueda);
    };
    onChange = e =>{
        this.setState({
            busqueda: e.target.value
        })
    }
    state = {
        busqueda: ''
    }

    render(){
        return(
           <div className='container' className='centrado'>
               <div className='row'>
                   <div className='col-md-3'></div>
                   <div className='col-md-6' className='centrar'>
                       <img src={logo} id='logo'></img>
                       <form 
                    className="row g-3"
                    onSubmit={this.handleSubmit}
                    >
  
                         <div className="buscador">
                            <input type="text"
                                name='buscador'
                                id='buscar'
                                value={this.props.buscador}
                                placeholder="Busca una banda"
                                onChange = {this.onChange}
                             />
                         </div>
                        <div className='actions'>
                            <button className='btng'type='submit'>
                                search similar artis</button>
                            <button className='btng'>nuevos artistas</button>
                        </div>
                    </form>
                    </div>
               </div>
           </div>
        )
    }
}

export default PageHome; 