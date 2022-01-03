import React from "react";

import './Home.css';

const Home = ({setLoginUser}) =>{
    return(
        <div>
    <h2>Welcome Buyers</h2>
    <form action="https://dashboard.chec.io/products/">
    <h3><input type="submit" value="Add a new property" /></h3>
    </form>
    <br/>
    <h3><input className='buttonfield' type = 'button' onClick={()=>setLoginUser({})} value='Logout'/></h3>
    </div>
    );
}

export default Home;