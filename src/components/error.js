import React from 'react';
import './loading.css'

function Error(props){
    return(
        <React.Fragment>
           <div className='load'>
           <div className='row'>
               <div className='col-md-12 centrado'>
                <h3>Error!{this.props.errorMensage}</h3>
               </div>
           </div>
           </div>
        </React.Fragment>
    )
}
export default Error;