import React from "react";
import ArtistCard from "./artist-card.js";
class SimilarArtist extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='centrar margenes50'>
                    <div className='col-md-12'>
                    <h5>Similar Artist</h5>
                    </div>
                </div>
                
                <div className='row centrar margenes50'>
                    {this.props.data.slice(0, 4).map((item,i)=>{
                        return(
                           <ArtistCard
                           img={item.image[3]['#item']}
                           titulo={item.name}
                           key={i}
                           />
                        );
                    })}
                </div>
            </React.Fragment>
        )
    }
}
export default SimilarArtist;