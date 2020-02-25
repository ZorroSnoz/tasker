import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from './input-fields';
import {required, maxLength30, minLength2} from '../../service/validation';
import { TextArea } from './text-area-fields';

let FormAddNewTask = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} >
            <Field
                placeholder={`Name task`}
                type={'text'}
                name={'nameTask'}
                component={Input}
                validate={[required, maxLength30, minLength2]}
            />
                        <Field
                placeholder={`Discription task`}
                type={'text'}
                name={'discription'}
                component={TextArea}
                validate={[required, minLength2]}
            />
            <button className='btn btn-sm btn-light' type='submit'>Submit</button>
        </form>
    )
};

export default FormAddNewTask = reduxForm({ form: 'add-new-task' })(FormAddNewTask);