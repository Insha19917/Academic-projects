import axios from "axios";
import React, { useReducer, useState } from "react";
import './BLogin.css';
import {useHistory} from 'react-router-dom';

const BLogin = ({setLoginUser}) =>{

    const history = useHistory()

    const [user , setUser] = useState({
        email : "",
        password : ""

    })
    const handlechange = e =>{
        const {name , value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const login = () =>{
        axios.post('http://localhost:5002/login',user)
        .then(res =>{ 
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/Grid")    })
    }
    return(
        <div className='containerb'>
            {console.log('User' , user)}
            <form>
                <h1>Login Page for Buyers</h1>
                <input className='textfieldb' name='email' value={user.email} type="text" placeholder='Enter E mail' onChange={handlechange}/><br/>
                <input className='textfieldb'  name='password' value={user.password} type = 'password' placeholder='Enter password' onChange={handlechange}/><br/>
                <input className='buttonfieldb' type = 'button' onClick={login} value='Login'/><br/>
                
                <input className='buttonfieldb' type = 'button' onClick={()=>history.push('/bregister')} value='Register'/><br/>
                <a href='Login'>Sell a Property</a>
                
            </form>
        </div>
    );
}

export default BLogin;