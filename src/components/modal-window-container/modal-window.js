import React from 'react';

let ModalWindowContainer = ({Component, toogle, data}) => {
return (
    <div className={`modal-window-container ${toogle}`}>
       <div className='container'>
           <div className='d-flex justify-content-center align-items-center vh100'>
               <div className='col col-lg-5 col-sm-10 col-10'>
                   <Component data={data}/>
               </div>
           </div>
       </div>
    </div>
)};

export default ModalWindowContainer;