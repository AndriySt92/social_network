import React from 'react';
import './Login.css';
import Login from './Login';
import {connect} from 'react-redux';
import {setIsEnter,setEnterEmail,setEnterLogin, loginThunk, captchaThunk} from '../../redux/auth-reducer'

class LoginContainer extends React.Component{

    render() {
        return <Login setEnterEmail={this.props.setEnterEmail}
                      setEnterLogin={this.props.setEnterLogin}
                      setIsEnter={this.props.setIsEnter}
                      inputTextEmail={this.props.inputTextEmail}
                      inputTextLogin={this.props.inputTextLogin}
                      isEnter={this.props.isEnter}
                      loginThunk={this.props.loginThunk}
                      isAuth={this.props.isAuth}
                      captcha={this.props.captcha}

                      />
    }

}
let mapStateToProps = (state) => {
    return {
        email:state.auth.email,
        login:state.auth.login,
        inputTextEmail:state.auth.inputTextEmail,
        inputTextLogin:state.auth.inputTextLogin,
        isEnter: state.auth.isEnter,
        isAuth:state.auth.isAuth,
        captcha:state.auth.captcha
    }
}

export default connect(mapStateToProps,{setIsEnter,setEnterEmail,setEnterLogin, loginThunk, captchaThunk})(LoginContainer)