import React, { useState } from 'react'; 
import {Button} from 'antd'  ;
function App(){
  const[Loading,setLoading] = useState(false);
  const onButtonClick=(e)=>{
    console.log("Button Clicked");
    setLoading(true);
    
    setTimeout(()=>{
          setLoading(false);
    },2000)
  
   }
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "360px",
      height: "640px",
      margin: "50px auto",
      borderRadius: "20px",
      border: "2px solid blue",
      overflow: "hidden",
    }}>
    
      <form >
        <h2 style={{color:'blueviolet'}}>Sign In Form </h2>
        <label for="Username">Username</label>
        <input type="text" />
        <br/>
        <br/>
        <label for ="Password">Password</label>
        <input type="password"/>
        <br/>
        <br/>
         &emsp;<Button type="primary" size="default" loading={Loading} onClick={onButtonClick}>Submit</Button>
      </form>
    </div>
  )
}

export default App