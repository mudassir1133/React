import { useState, useCallback, useEffect, useRef } from "react";


function PasswordGenerator(){
    const [length, setLength] = useState(8);
    const[ numberAllowed, setNumberAllowed] = useState(false);
    const[charAllowed, setCharAllowed] = useState(false);
    const[password , setPassword] = useState("");

              // useRef hook
        const passwordRef = useRef(null);


    const passwordGenerator = useCallback(() =>{
     let pass = "";
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       if(numberAllowed) str += "0123456789";
         if(charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

         for(let i = 0; i <= length; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
         }

         setPassword(pass);




    },[length, numberAllowed, charAllowed, setPassword]);

    const copyPasswordToClipboard = useCallback ( ()=> {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 4);    // Slice the password to copy only a part of it
      window.navigator.clipboard.writeText(password);
    }, [password])

    useEffect(()=> {
      passwordGenerator();
    }, [ length, numberAllowed, charAllowed, passwordGenerator]);

    return(

      <div className="bg-gray-800 min-h-screen text-white p-50">

        <div className="w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
          <h1 className="text-white text-center text-3xl my-3 "> Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
            <input
             type="text"
               value={password}
               className="outline-none w-full py-3 px-1"
               placeholder="Password"
               readOnly
                ref={passwordRef}
             />

             <button onClick={copyPasswordToClipboard} className="outline-non bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"> copy</button>
          </div>
          <div className="flex text-sm gap-x-14">
            <div className="flex items-center gap-x-1 ">
              <input
               type="range"
               min={6}
               max={100}
               value={length}
               className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
               />
               <label className="" > length: {length}</label>
            </div>



            <div className="flex items-center gap-x-1 ">
              <input
              className="cursor-pointer"
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={(e) => {setNumberAllowed((prev) => !prev);}}
              />
              <label htmlFor="numberInput">Include Numbers</label>
            </div>


            <div className="flex items-center gap-x-1">
              <input
              className="cursor-pointer"
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={(e) => {setCharAllowed((prev) => !prev);}}
              />
              <label htmlFor="characterInput"> Characters</label>
            </div>


          </div>

        </div>
      </div>
    )
}



export default PasswordGenerator;
