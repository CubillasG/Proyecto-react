import React from 'react';


function Footer(props){
    const children = props.children;
    return(
        <React.Fragment>
            {children}
            <div className='row'>
               <div className='col-md-12 centrar'>
                <p>Copyright todo los derechos reservados @CubiG</p>
               </div>
           </div>
        </React.Fragment>
    )
}
export default Footer;