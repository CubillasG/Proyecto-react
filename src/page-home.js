import React  from "react";
import "./page-home.css";
import logo from './logoo.png';
import { ETIME } from "constants";
import reactDom from "react-dom";
import Modal from './components/modal';

class PageHome extends React.Component{
    handleSubmit = e =>{
        e.preventDefault();
        this.props.history.push('/busqueda?' + this.state.busqueda);
    };
    handleClick= e =>{
        console.log('ME PINCHAROOOON')
        e.preventDefault();
        this.setState({
            modal: true
        });

    }

    onChange = e =>{
        this.setState({
            busqueda: e.target.value
        })
    }
    state = {
        busqueda: '',
        modal: false
    };

    componentWillReceiveProps(e){
        this.setState({
            estado: e.estado
        })
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
                            <button className='btng' onClick={this.handleClick}>nuevos artistas</button>
                        </div>
                    </form>
                    </div>
               </div>
               {reactDom.createPortal(<Modal estado={this.state.modal}>
                   <h3>Agita Rock</h3>
                   </Modal>, 
                   document.getElementById('portal'))}
           </div>
        )
    }
}

export default PageHome; 