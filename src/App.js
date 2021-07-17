import React, {Component} from 'react';
import PageSearchResult from './page-search-result';
import PageHome  from './page-home.js';
import PageArtist from './page-artist.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component{
  render(){
    return(
    <PageArtist/>
    )
  }
}
export default App;