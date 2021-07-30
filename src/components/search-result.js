import React, {Component} from 'react';
import ArtistCard from './artist-card.js';
import Loading  from './loading.js';
import Error from './error.js';
class SearchResult extends Component{
  state ={
    loading: false,
    error: null,
    data: {
      similarartists:{
        artist:[]
      }
    }
  };
  componentDidMount(){
   
    this.fetchData('https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=calamaro&api_key=16c5a52ffcbc782264f1bf95f8e152c7&format=json'
    );
  }
  
  fetchData = async url=>{
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
        {this.state.loading && < Loading/>}
        {this.state.error && <Error>{this.state.errorMensaje}}</Error>}
        <div className='container'>
          <div className='row'>
             {this.state.data.similarartists.artist.map((item,i)=>{
              return <ArtistCard 
              img={item.image[2]['#text']} 
              titulo={item.name} key={i}/>;
            })}

          </div>
            <h1>{this.props.busqueda}</h1>
        </div>
      
      </React.Fragment>
    )
  }
}
export default SearchResult;