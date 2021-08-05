import React, {Component} from 'react';
import './page-artist.css';
import SearchBar from './components/search-bar.js';
import SimilarArtist from './components/similar-artist.js';
import Loading  from './components/loading.js';
import Error from './components/error.js';

import './App.css';

class PageSearchResult extends Component{
  state = {
    data: {
      artist: {
        image:[
          {'#text':''},
          {'#text':''},
          {'#text':''},
          {'#text':''}, 
          {'#text':''}
        ],
        bio:{
          summary:''
        },
        similar:{
          artist: [
            {
              name: '',
              url:'',
              image: [
                {'#text':''},
                {'#text':''},
                {'#text':''},
                {'#text':''}, 
                {'#text':''}
              ]
            }
          ]
        }
      }
    }
};

componentDidUpdate(prevProps){
  if(this.props.location !== prevProps.location){
    this.fetchData()
  }
}


  ChangeHandle = e =>{
    this.setState({ 
      [e.target.name]: e.target.value
    });
  }

  componentDidMount(){
     
    this.fetchData();
  }


  fetchData = async ()=>{
    let artista = this.props.history.location.search.substr(1);
    let url = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+artista+'&api_key=16c5a52ffcbc782264f1bf95f8e152c7&format=json';

    this.setState({
      loading: true,
  })
      const response = await fetch(url)
      const data = await response.json()
      console.log(data, 'lo que trae mi API')
      if(data.error){
        this.setState({
          loading: false,
          error: true,
          errorMensaje: data.message
        });
      }else{
        this.setState({
          loading: false,
          data:data
        });
      }
    
    };


  render(){
    return(
      <React.Fragment>
        <SearchBar onChange={this.ChangeHandle} 
                   buscador = {this.state.buscador}
                   />
             {this.state.loading && < Loading/>}
             {this.state.error && <Error>{this.state.errorMensaje}}</Error>}       
        <div className='container'>
            <div className='row centrar'>
                <div className='cpl-md-6'>
                <img src={this.state.data.artist.image[3]['#tetxt']}
                className='pic-artist margenes50'/>
                <h2>{this.state.data.artist.name}</h2>
                <p>{this.state.data.artist.bio.summary}</p>
              
                    </div>
            </div>
            <div className='row'>
            <SimilarArtist data={this.state.data.artist.similar.artist}/>
            </div>
        </div>           
        
      </React.Fragment>
    )
  }
}
export default PageSearchResult;