import { useState } from 'react'
import './App.css'
import Counter from './state'
import Toggle from './toggle'
import { h1 } from 'framer-motion/client'

function App() {
  const [display, setDisplay]=useState(true)
  return (
    <div>
      <h1> going to toggle a component </h1>
      <button onClick={()=>setDisplay(!display)}>toggle</button>
      {
        display? <Toggle/>:'kya coder banega re tu'
      }
    </div>
  )
}

//   const handleFruit=()=>{
//     setFruit( fruit=== 'Apple'?"banana":"Apple");
//   }
//   const [fruit, setFruit] = useState("Apple")

//   return (
    
//       <div>
//      <p>we are going to use state </p>
//     <h1>fruit name is {fruit}</h1>
//     <button onClick={handleFruit}>Change fruit name</button>
//    <Counter/>

//    {display?<Toggle/>:<h1>no component</h1>}
//    {/* <Toggle/> */}
//     </div>
//   )
// }
// function App() {
//   const [fruit, setFruit] = useState('Apple')

//   return (
//     <div>
//       <p>Fruit name is {fruit}</p>
//       <button onClick={()=>setFruit(fruit==="Apple"?"Banana":"Apple") }>change fruit name</button>
//     </div>
      
//   )
// }
export default App;
