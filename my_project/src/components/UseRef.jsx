import React, { useRef, useState } from 'react'

function UseRef() {
  const [input,setInput] = useState("");
  const inputRef = useRef()
  function display(){
    console.log({input})
    console.log(inputRef.current.value)
  }
  return (
    <div>
      <h1>Input</h1>
      <input 
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
       />
       <p>Your text input: {input}</p>
       <p>your text input: {inputRef.current?.value}</p>
       <button onClick={display}>submit</button>
    </div>
  );
}

export default UseRef;