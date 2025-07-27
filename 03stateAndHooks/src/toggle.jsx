import { useState } from "react";
function Toggle(){
   
    function nameToggle(){
        setDisplay(display==='Faisal'?'Shahid':'Faisal')

    }
    const[display, setDisplay]=useState("Faisal")

    return(
        <div>
            <h1>component for toggle </h1>
            <h1>my name is {display} </h1>
            <button onClick={nameToggle}>toggle name</button>
        </div>
    )
}
export default Toggle;