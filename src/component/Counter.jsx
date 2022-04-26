import React, {useState} from "react";
import './App.css';

function Counter() {
    //const initialcount = 0;
    const [count, setCount] = useState(1)
    
return(
    <div>
        
        <h3>Counter App </h3>
        <div className="container" >
        <button  className="counter" onClick={() => setCount(count +1) } >+</button>
        <button onClick={() => setCount(count -1)} className="counter1">-</button>
        <button onClick={() => setCount(0)} className="counter2">Reset</button><br />
        
    </div>
        <p>Count is {count}</p>  
        <hr />      
    </div>)
}
export default Counter;