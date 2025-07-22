import { div } from "framer-motion/client";

import Jww from "./header";
import Login,{ Profile,Setting } from "./userProfile";


function Rose(){
  return (
    <div>
      {/* <Jww/>
      <Rose2/> */}
      
      <h1> this is main funtion</h1>
      <h1>importing the modules`functions, component`</h1>
      <Login />
      <Profile />
      <Setting />

    </div>
  )
}
// function Rose2(){
//   return(
//     <div> <h3>this is 2nd rose funtion</h3>
//     </div>

//   )
// }
export default Rose;