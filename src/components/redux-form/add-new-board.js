import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from './input-fields';
import {required, maxLength15, maxLength30, minLength2} from '../../service/validation';

let FormAddNewBoard = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} >
            <Field
                placeholder={`Name board`}
                type={'text'}
                name={'nameBoard'}
                component={Input}
                validate={[required, maxLength15, minLength2]}
            />
            <Field
                placeholder={`Discription`}
                type={'text'}
                name={'discription'}
                component={Input}
                validate={[required, maxLength30, minLength2]}
            />
            <button className='btn btn-sm btn-light' type='submit'>Submit</button>
        </form>
    )
};

export default FormAddNewBoard = reduxForm({ form: 'add-new-board' })(FormAddNewBoard);