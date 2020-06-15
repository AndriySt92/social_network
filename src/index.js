import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import {Provider} from 'react-redux';



export const rerenderEntireTree = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App store={store} />
        </Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
} 
 rerenderEntireTree(store.getState());
 
 store.subscribe(() => {
   let state = store.getState();
   rerenderEntireTree(state)
  });

serviceWorker.unregister();
