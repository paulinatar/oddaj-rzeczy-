import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import Navigations from './components/navigations/Navigations'
import Home from './components/home/Home'
import Login from "./components/logInOut/Login";
import Register from "./components/logInOut/Register";
import Logout from "./components/logInOut/Logout";

//tu wrzucam hass router, navigations i swich a routem do homa

function App() {
  return (
    <div className="App">
      <HashRouter>

        <Switch>
           <Route exact path ='/' component = {Home}/>
           <Route path = '/login' component = {Login}/>
           <Route path = '/register' component = {Register}/>
           <Route path = '/logout' component ={Logout}/>
        </Switch>


      </HashRouter>
    </div>
  );
}

export default App;
