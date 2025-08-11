import { useState } from "react";

function BgChanger() {
  const [colour, setColour]= useState("lightblue");
  return (
    <div className="h-screen w-full duration-200"
    style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
             <button onClick={()=> setColour("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{background:"red"}}>Red</button>
             <button onClick={()=> setColour("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{background:"green"}}>Green</button>
             <button onClick={()=> setColour("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{background:"blue"}}>Blue</button>
             <button onClick={()=> setColour("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{background:"olive"}}>Olive</button>
             <button onClick={()=> setColour("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{background:"brown"}}>Brown</button>

        </div>
      </div>
      

    
    </div>
  );
}

export default BgChanger;
