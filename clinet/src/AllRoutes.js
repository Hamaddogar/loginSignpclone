import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';


import SignUp from './Components/Signup/Signup';
import Navbar from '../src/Components/Nav/Navbar';
import Login from '../src/Components/Login/Login';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Home from '../src/Components/Home/Home'
import InputNewPassword from './Components/InputNewPassword/InputNewPassword';
import Dashboard from '../src/Components/Dashboard/dashboard'


function AllRoutes() {
  return (   
              <div>
              <Navbar/>
               <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />

                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/resetpassword" component={ResetPassword} />
                <Route path="/inputnewpassword" component={InputNewPassword} />
                </Switch>
                </div>
   
  ) 
  }
    export default AllRoutes;

     





