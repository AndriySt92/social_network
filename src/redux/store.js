import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import navReducer from './nav-reducer';
import userReducer  from "./user-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    navPage: navReducer,
    userPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store