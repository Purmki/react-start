
import React from 'react'

function Login(props) {
  return (
    <div>
            <h1>login check</h1>
            <form onSubmit={props.submitHandler}>
                <input type="email" name="userEmail" placeholder="email" onChange={props.changeHandler}/>
                <input type="password" name="userPassword" placeholder="password" onChange={props.changeHandler}/>
                <button name="loginSubmitBtn" type="submit" onChange={props.changeHandler}>login</button>
            </form>
    </div>
  )
}

export default Login