import React, {Component} from 'react';
import ArtistCard from './components/artist-card.js';
import SearchBar from './components/search-bar.js';
import SearchResult from './components/search-result.js'
import './App.css';

class PageSearchResult extends Component{
  state = {
    busqueda : ''
  };
  componentWillMount(){
    let search = this.props.history.location.search
    console.log(search, 'lo que me trae la URL')  
    console.log('componentWillMount()', 'antes de que se renderice la cosa')
    this.setState({
      busqueda: search
    })
  }

  ChangeHandle = e =>{
    this.setState({ 
      busqueda: e.target.value
    });
  }
  render(){
    console.log('render()', 'metodo render')
    return(
      <React.Fragment>
       
        <SearchBar 
        onChange={this.HandleChange} 
        buscador = {this.state.buscador}
        />
        <SearchResult buscador = {this.state.buscador}/>

   
      </React.Fragment>
    )
  }
}
export default PageSearchResult;