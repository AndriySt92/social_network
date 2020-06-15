import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/formControl/formControl';
import { required, maxLength } from '../../utils/validator/required';
import style from '../common/formControl/formControl.module.css'

let maxLength25 = maxLength(25)

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={Input} placeholder='enter login' type='text' name='email' validate={[required, maxLength25]}/>
            </div>
            <div>
                <Field component ={Input} placeholder='enter password' type='text' name='password' validate={[required, maxLength25]} />
            </div>
            <div>
                <Field component='input' type='checkbox' name='rememberMe'  /> Remember me
            </div>

                {props.error && <div className={style.formSummeryError}>{props.error}</div>}
                {props.captcha && <img src={props.captcha} />}
                {props.captcha && <Field component ={Input} placeholder='Enter symbol from image' type='text' name='captcha' />}
            
            <div>
                <button type='submit'>Sign up</button>
            </div>

        </form>
    );
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)
  
export default LoginReduxForm
