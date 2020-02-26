import React from 'react';
import closeIcon from '../../../image/close.svg';

let ModalTaskWindow = ({ data }) => {
    let { taskDiscription, taskName, closeWindow } = data;
    return (<div className='modal-padding bg-dark rounded task-window'>
        <div className='form-header'>
            <h6 className='text-light'>{taskName}</h6>  
            <img onClick={() => { closeWindow() }} src={closeIcon} />
        </div>
        <div className='form-container bg-secondary rounded'>
        <p className='text-light'>{taskDiscription}</p>
        </div>
        
    </div>
    )
};

export default ModalTaskWindow;