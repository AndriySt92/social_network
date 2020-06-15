import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {initializeApp} from './redux/app-reducer';
import { withRouter } from "react-router-dom";
import {compose} from 'redux';
import {connect} from 'react-redux'
import Preloader from './components/common/Preloader';

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));

class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp();
  }

  render(){
    if(!this.props.initialized){
      return <Preloader />
    }
    return ( 
        <div className="app-wrapper">
            <HeaderContainer />
            <Nav store={this.props.store}/>
            <div className="app-wrapper-content">
                  <Route path='/dialogs' render = {()=>{ return <React.Suspense fallback={<div>Loanding...</div>}>
                                                            <DialogsContainer />
                                                          </React.Suspense>
                                                          
                  }}  />
                  <Route path='/profile/:userId?' render = {()=>{ return <React.Suspense fallback={<div>Loanding...</div>}>
                                                            <ProfileContainer />
                                                          </React.Suspense>
                }}  />
                  <Route path='/users' render = {()=> <UsersContainer />}  />
                  <Route path='/login' render = {()=> <LoginContainer />}  />
            </div>
        </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized:state.app.initialized,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps,{initializeApp})
  )(App);
