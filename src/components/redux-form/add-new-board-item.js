import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from './input-fields';
import {required, maxLength30, minLength2} from '../../service/validation';

let FormAddNewBoardItem = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} >
            <Field
                placeholder={`Name board item`}
                type={'text'}
                name={'nameBoardItem'}
                component={Input}
                validate={[required, maxLength30, minLength2]}
            />
            <button className='btn btn-sm btn-light' type='submit'>Submit</button>
        </form>
    )
};

export default FormAddNewBoardItem = reduxForm({ form: 'add-new-board-item' })(FormAddNewBoardItem);