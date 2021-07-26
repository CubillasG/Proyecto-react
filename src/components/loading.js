import React from 'react';
import './loading.css'

function Loading(){
    return(
        <React.Fragment>
           <div className='load'>
           <div className='row'>
               <div className='col-md-12 centrado'>
                <h3>Loading...</h3>
               </div>
           </div>
           </div>
        </React.Fragment>
    )
}
export default Loading;