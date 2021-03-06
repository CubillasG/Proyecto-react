import React, {Component} from 'react';
import PageSearchResult from './page-search-result';
import PageHome  from './page-home.js';
import PageArtist from './page-artist.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout.js';

class App extends Component{
  render(){
    return(
    <BrowserRouter>
    <Layout>
    <switch>
      <Route exact path='/busqueda' component={PageSearchResult}></Route>
      <Route exact path='/artista' component={PageArtist}></Route>
      <Route exact path='/' component={PageHome}></Route>
    </switch>
    </Layout>
    </BrowserRouter>
    
    )
  }
}
export default App;