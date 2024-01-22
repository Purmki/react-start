
import './login.css'
import { useState } from 'react';

 function Login(props){
   
    
    return(
        <div>
            <h1>login check</h1>
            <form  onSubmit={props.submitHandler} >
                <input type="email" name="userEmail" placeholder="email" onChange={props.changeHandler} defaultValue={props.email}/>
                <input type="password" name="userPassword" placeholder="password" onChange={props.changeHandler} defaultValue={props.password}/>
                <button name="loginSubmitBtn" onChange={props.changeHandler} type="submit">login</button>
            </form>
        </div>
    )
 }
 export default Login;