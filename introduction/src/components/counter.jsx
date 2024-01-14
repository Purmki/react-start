
   import { useState } from "react";
//    import "./counter.css";
   function Counter (props){
    // let counter = 0;
    const [count, setCount] = useState(0);
    return(
        <div className="container"> 
            {/* <h1>
                <p>you clicked <h1>{count}</h1> times</p>
                <button onClick={() => setCount(count+1)}>+</button>
                <button onClick ={()=>setCount(count-1)}>-</button>
            </h1> */}

        </div>
   ) }

   export default Counter;