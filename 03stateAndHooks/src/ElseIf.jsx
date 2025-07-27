import { h1 } from "framer-motion/client";
import { useState } from "react";
function MultipleCondition(){
    const [count, setcount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>counter</button>
            {
                count==0?<h1>counter 1</h1>
                :count==1?<h1>xounter1</h1>
                :count==2?<h1>xounter3</h1>
                :count==3?<h1>xounter4</h1>
                :count==4?<h1>xounter5</h1>
                :<h1>ohter condition</h1>
            }
        </div>
    )
}
export default MultipleCondition;