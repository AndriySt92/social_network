import React from 'react';
import './Login.css';
import LoginReduxForm from './LoginForm';
import {Redirect} from 'react-router-dom'

const Login = (props) => {

        const onSubmit = (data) => {
            props.loginThunk(data.email, data.password, data.rememberMe, data.captcha)
    }
    if(props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div>
            <h1>Sign up please</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
        </div>
    )
}

export default Login