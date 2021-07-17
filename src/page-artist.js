import React, {Component} from 'react';
import './page-artist.css';
import SearchBar from './components/search-bar.js';
import SimilarArtist from './components/similar-artist.js';

import './App.css';

class PageSearchResult extends Component{
  state = {buscador :''
};
  ChangeHandle = e =>{
    this.setState({ 
      [e.target.name]: e.target.value
    });
  }
  render(){
    return(
      <React.Fragment>
        <SearchBar onChange={this.ChangeHandle} 
                   buscador = {this.state.buscador}
                   />
        <div className='container'>
            <div className='row centrar'>
                <div className='cpl-md-6'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwE4zIQAtdC25h0cNmrl5rTxyXcFOJj_wAQ&usqp=CAU'
                className='pic-artist margenes50'/>
                <h2>Gustavo Cerati</h2>
                <p>Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de 1959-ibidem, 4 de septiembre de 2014) fue un músico, cantautor, actor, y productor discográfico argentino que obtuvo reconocimiento internacional por haber sido el líder de la banda de rock Soda Stereo. Es considerado por parte de la prensa, cantantes y críticos como uno de los más influyentes del rock latinoamericano.</p>
              
                    </div>
            </div>
            <div className='row'>
            <SimilarArtist/>
            </div>
        </div>           
        
      </React.Fragment>
    )
  }
}
export default PageSearchResult;