

function SignUp(props){
    return(
        <div>
           <h1>sign up check</h1>
            <form  onSubmit={props.submitHandler} >
                <input type="email" placeholder="email" name="userEmail" onChange={props.changeHandler} defaultValue={props.email}/>
                <input type="password" placeholder="password" name="userPassword" onChange={props.changeHandler} defaultValue={props.password}/>
                <button name="loginSubmitBtn" onChange={props.changeHandler} type="submit">sign up</button>
            </form>
        </div>
      
    )
 }
 export default SignUp;