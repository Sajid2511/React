import { useState} from 'react';
 function Counter(){
    const [count , setCount]=useState(0);
    return(
        <div>
            <p> Count is {count}</p>
            <button onClick={()=> setCount(count +1)}>increase</button>
        </div>
    )
 }
  export default Counter;