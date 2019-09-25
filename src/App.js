import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import Navigations from './components/navigations/Navigations'
import Home from './components/home/Home'
import Login from "./components/logInOut/Login";
import Register from "./components/logInOut/Register";
import Logout from "./components/logInOut/Logout";
import AccountGiveThings from "./components/account/AccountGiveThings";

import * as ROUTES from '../src/constants/routes'


function App() {
  return (
    <div className="App" >
      <HashRouter>

        <Switch>
           <Route exact path ={ROUTES.HOME} component = {Home}/>
           <Route path = {ROUTES.LOGIN} component = {Login}/>
           <Route path = {ROUTES.REGISTER} component = {Register}/>
           <Route path = {ROUTES.LOGOUT} component ={Logout}/>
           <Route path ={ROUTES.ACCOUNT} component ={AccountGiveThings}/>
        </Switch>


      </HashRouter>
    </div>
  );
}

export default App;
