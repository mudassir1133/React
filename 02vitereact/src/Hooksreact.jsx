import { useState } from "react";

function Hooksreact() {
    // let counter = 5; 
    let [counter, setcounter]= useState(5)
        // const addValue=()=>{setcounter(counter+1)}; 

        const addValue=()=>{
          if (counter<20)
            setcounter(counter+1);
                      setcounter(counter+1);
            setcounter(counter+1);
            setcounter(counter+1);


        }
        const decreaseValue=()=>{
          if (counter>0)
            setcounter(counter-1);
        }

  return (
    <body class style={{backgroundColor: "lightblue", padding: "70px", textAlign: "center"}} 
    >
      <h1>Hooks aur React</h1>
      <h2>Counter value: {counter}</h2>
      
      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={decreaseValue}>Decrease value</button>
    </body>
  );
}

export default Hooksreact;