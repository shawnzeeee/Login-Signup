
import './App.css';
import {useState} from "react";
import React, {Fragment} from 'react';
import Nav from './Nav';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>  
        <Fragment>     
        <Nav />
        <Switch>   
    
          <Route path="/sign-in">
              <SignIn />
          </Route>         
          <Route path="/create-account">
              <CreateAccount/>
          </Route>
        </Switch>
        </Fragment>
        </Router>
    </div>
  );
}
const Home = () => (
  <div>
    <h1>Home Page </h1>
  </div>
);

export default App;
