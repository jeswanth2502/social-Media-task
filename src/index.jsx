import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Profile from './components/profile';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import SignIn from './components/sign_in';

ReactDOM.render( <Router >
  <Route path = "/"
  exact render = {
    () => {
      return <div className = 'signInPage' > <SignIn/> </div>
    }
  }/> 
  <Route path = "/home"
  exact render = {
    () => {
      return <App/>
    }
  }/> <Route path = "/profile/:userName"
  exact render = {
    () => {
      return <Profile/>
    }
  }
  /> 
  </Router>,
  document.getElementById('root')
);
