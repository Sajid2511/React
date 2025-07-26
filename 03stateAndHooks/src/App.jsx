import { useState } from 'react'
import './App.css'
import Counter from './state'

function App() {

  const handleFruit=()=>{
    setFruit( fruit=== 'Apple'?"banana":"Apple");
  }
  const [fruit, setFruit] = useState("Apple")

  return (
    
      <div>
     <p>we are going to use state </p>
    <h1>fruit name is {fruit}</h1>
    <button onClick={handleFruit}>Change fruit name</button>
   <Counter/>
    </div>
  )
}
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
