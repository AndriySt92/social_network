
import {authMe, securityAPI} from '../DAL/DAL';
import { stopSubmit } from 'redux-form';
const SET_AUTH_DATA ='SET_AUTH_DATA';
const CLEAR_AUTH_DATA = 'CLEAR_AUTH_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';


  // Login section
const IS_CORRECT_ENTER = 'IS_CORRECT_ENTER';
const INPUT_EMAIL = 'INPUT_EMAIL';
const INPUT_LOGIN = 'INPUT_LOGIN';

// вместо логина пароля и емейл у нас будет так
let initialState = {
    id:null,
    login:null,
    email: null,
    password:null,
    isAuth:false,
    isEnter:false,
    captcha:null,
    inputTextEmail:"",
    inputTextLogin:"",

}

const authReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case SET_AUTH_DATA:
        case SET_CAPTCHA: 
            return {...state,
                    ...action.data,
                    };
        

        case IS_CORRECT_ENTER: 
  
            if(state.inputTextLogin == state.login && state.inputTextEmail == state.email){
                return {
                    ...state,
                    isEnter: true,
                }
            }
            return state;
        case INPUT_LOGIN: 
            return {
                ...state,
                inputTextLogin:action.enterLogin,
            }
        case INPUT_EMAIL: 
            return {
                ...state,
                inputTextEmail:action.enterEmail,
            }
        case CLEAR_AUTH_DATA: 
            return {...state,
                    ...action.deleteData} 
        default: return state;
    }
}
export const setAuthData = (id,email,login ) => ({
    type: SET_AUTH_DATA, data: {id,email,login,isAuth:true }
  });

  export const clearAuthData = () => ({
    type: CLEAR_AUTH_DATA, deleteData: {id:null,email:null,login:null,isAuth:false  }
  });

  export const setIsEnter = (login, email) => {
    return {
        type:IS_CORRECT_ENTER,
        login,
        email,
    }
};

export const setEnterEmail = (text) => {
    return {
        type:INPUT_EMAIL,
        enterEmail: text,
    }
};

export const setEnterLogin = (text) => {
    return {
        type:INPUT_LOGIN,
        enterLogin: text,
    }
};
export const setCaptcha = (captcha) => {
    return {
        type:SET_CAPTCHA,
        data:{captcha}
    }
};

export const getMeThunk = () => async (dispatch) => {
    let response = await authMe.getMe() 
        if(response.data.resultCode == 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthData(id,login,email));
        }
}



export const loginThunk = (email,password,rememberMe, captcha) => async (dispatch) => {
    let response = await authMe.login(email,password,rememberMe, captcha)
    
       
        if(response.data.resultCode==0){
          dispatch(getMeThunk());
        }
        else {
            if(response.data.resultCode == 10){
                dispatch(captchaThunk())
            }
            let error =  response.data.messages.length > 0 ? response.data.messages[0] : 'Password or email in uncorect'
            dispatch(stopSubmit('login', {_error:error}))
        }
}
export const captchaThunk = () => async (dispatch) => {
    let response = await securityAPI.captcha()
    let captcha = response.data.url;

    dispatch(setCaptcha(captcha))
}

export const logout = () => async (dispatch) => {
    let response = await authMe.logout()
    
        if(response.data.resultCode == 0){
            dispatch(clearAuthData())
        }
    
}
  
export default authReducer;