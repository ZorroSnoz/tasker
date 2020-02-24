import React from 'react';
import plusIcon from '../../image/plus.svg';

let AddButton = ({fun}) => {
    return (
        <div onClick={() => fun()} className='add-board'>
            <img src={plusIcon}></img>
        </div>
    )
};

export default AddButton;