import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import Home from './components/home/Home'
import Logout from "./components/logInOut/Logout";
import * as ROUTES from '../src/constants/routes'
import LoginFirebase from "./components/logInOut/LoginFirebase";
import Registration from "./components/logInOut/RegisterFirebase";
import HomeAfterLogin from "./components/account/HomeAfterLogin";
import AccountForm from "./components/account/AccountForm";


function App() {
  return (
    <div className="App" >
      <HashRouter>

        <Switch>
           <Route exact path ={ROUTES.HOME} component = {Home}/>
           <Route path = {ROUTES.LOGIN} component = {LoginFirebase}/>
           <Route path = {ROUTES.REGISTER} component = {Registration}/>
           <Route path = {ROUTES.LOGOUT} component ={Logout}/>
           <Route path ={ROUTES.ACCOUNT} component ={AccountForm}/>
           <Route path = {ROUTES.AFTERLOGIN} component = {HomeAfterLogin}/>
        </Switch>


      </HashRouter>
    </div>
  );
}

export default App;
