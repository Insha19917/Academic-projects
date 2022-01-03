import React, { useState } from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import Register from './Sellers/Register/Register';
import BLogin from './Buyers/BLoginFiles/BLogin';
import BRegister from './Buyers/BRegister/BRegister';
import Contact from "./Contact"; 
import AboutUs from './AboutUs';
import Login from './Sellers/LoginFiles/Login';
import Home from './Home/Home';
import Navbar from './navbar/Navbar';
import Grid from './GridPages/Grid';
import Landingpage from './Landingpage/Landingpage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {

  const [user,setLoginUser] = useState()
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path = '/' component = {Landingpage}></Route>
      <Route exact path='/home' component = {Home}>
        {
          user && user._id ? <Home setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>
        }
        </Route>
      <Route exact path='/login'><Login setLoginUser={setLoginUser}/></Route>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/contact' component={Contact} ></Route>
      <Route exact path='/grid' component={Grid}></Route>
      <Route exact path = '/aboutus' component={AboutUs}></Route>
      <Route exact path = '/blogin' component={BLogin}></Route>
      <Route exact path = '/bregister' component= {BRegister}></Route>
    </Switch>
    </>
  );
}

export default App;
