import React from 'react';
import {Field, reduxForm } from 'redux-form';
import {Textarea} from '../../../common/formControl/formControl'
import { maxLength, required } from '../../../../utils/validator/required';

let maxLength10 = maxLength(10)

const MyPostForm =(props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} cols='50' name="newPostBody" placeholder='What have you new???' validate={[required , maxLength10]}/>
            <br />
            <button>Add post</button>
      </form>
    )
}

const MyPostReduxForm = reduxForm({
    form: 'addPost'
 })(MyPostForm);

 export default MyPostReduxForm