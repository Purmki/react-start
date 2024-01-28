
import React from 'react'

function SignUp(props) {
  return (
    <div>
         <h1>sign up check</h1>
            <form onSubmit={props.submitHandler}>
                <input type="email" name="userEmail" placeholder="email" onChange={props.changeHandler} />
                <input type="password" name="userPassword" placeholder="password" onChange={props.changeHandler}/>
                <button name="signUpSubmitBtn" type="submit" onChange={props.changeHandler}>sign up</button>
            </form>
    </div>
  )
}

export default SignUp