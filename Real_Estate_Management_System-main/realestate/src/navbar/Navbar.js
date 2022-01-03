import React from "react";
import './Navbar.css';



import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className='navcontainer'>
            
            <div className="rightBar">
            <NavLink className='right' exact to='/'>Home</NavLink>
            <NavLink className='right' exact to='/login'>Login</NavLink>
            <NavLink className='right' exact to='Contact'>ContactUs</NavLink>
            <NavLink className='right' exact to="AboutUs">AboutUS</NavLink>
            </div>
       </div> 
    );

}

export default Navbar;