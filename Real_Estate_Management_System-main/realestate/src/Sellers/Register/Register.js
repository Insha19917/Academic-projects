import React, { useState } from "react";
import './Register.css';
import { useHistory} from "react-router";

import axios from "axios";
const Register = () =>{
    const history = useHistory()

    const [user , setUser ] = useState({
        name:"",
        contact:"",
        email:"",
        password:"",
        cpassword:""
    })

    const handlechange = e =>{
        const { name , value } = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () =>{
        const {name , email , password , cpassword} = user
        if(name && email && password && (password === cpassword)){
            axios.post('http://localhost:5002/register',user)
            .then(res =>{alert(res.data.message)
            history.push('/login')
        })
        }else{
            alert('invalid input');
        }
       
    }

    return(
        <div>
            <div className='containerb'>
                {console.log('user', user)}
            <form>
                <h1>Registeration Page for Sellers</h1>
                
                <input className='textfieldb' name='name' value={user.name} type="text" placeholder='Enter Name' onChange = { handlechange }/><br/>
                <input className='textfieldb' name='contact' value={user.contact} type="text" placeholder='Phone Number' onChange = { handlechange } /><br/>
                <input className='textfieldb' name='email' value={user.email} type="text" placeholder='Enter E mail' onChange = { handlechange } /><br/>
                <input className='textfieldb' name='password' value={user.password} type = "password" placeholder='Enter password' onChange = { handlechange } /><br/>
                <input className='textfieldb' name='cpassword' value={user.cpassword} type="password" placeholder='Confirm password' onChange = { handlechange } /><br/>
                <input className='buttonfieldb' type = 'button' onClick={register} value='Register'/><br/>
                
                <input className='buttonfieldb' type = 'button' onClick={()=>history.push('/login')} value='Login'/>
                
            </form>
        </div>
        </div>
    );
}

export default Register;