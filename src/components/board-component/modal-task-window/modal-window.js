import React from 'react';
import closeIcon from '../../../image/close.svg';

let ModalTaskWindow = ({ data }) => {
    let { taskDiscription, taskName, closeWindow } = data;
    return (<div className='modal-add-board modal-padding bg-dark rounded'>
        <div className='form-header'>
            <h6 className='text-light'>{taskName}</h6>
            <p>{taskDiscription}</p>
            <img onClick={() => { closeWindow() }} src={closeIcon} />
        </div>

    </div>
    )
};

export default ModalTaskWindow;