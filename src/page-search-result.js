import React, {Component} from 'react';
import ArtistCard from './components/artist-card.js';
import SearchBar from './components/search-bar.js';
import SearchResult from './components/search-result.js'
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
                   buscador = {this.state.buscador}/>
        <SearchResult buscador = {this.state.buscador}/>
      </React.Fragment>
    )
  }
}
export default PageSearchResult;