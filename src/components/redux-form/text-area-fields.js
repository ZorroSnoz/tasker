import React from 'react';

export let TextArea = ({ input, meta, ...props }) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className='input-container'>
            <textarea className={`form-control ${(hasError ? 'errorInput' : '')}`} {...input} {...props} />
    { hasError && <span className='errorSpan rounded'>{meta.error}</span>} 
        </div>
    )};