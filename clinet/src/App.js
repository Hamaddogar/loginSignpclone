import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';


import SignUp from './Components/Signup/Signup';
import Navbar from '../src/Components/Nav/Navbar';
import Login from '../src/Components/Login/Login';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Home from '../src/Components/Home/Home';
import AllRoutes from '../src/AllRoutes';
import InputNewPassword from '../src/Components/InputNewPassword/InputNewPassword';



function App() {
  return (   
            
              <div>
               <AllRoutes/>
                </div>
              
                
   
  ) 
  }
    export default App;

     








