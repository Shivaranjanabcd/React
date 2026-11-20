import { useState, useMemo } from "react";

function ExampleMemo(){
    const[number,setNumber] = useState(0);
    const[dark, setDark] = useState(false);
    
    
    const themStyle = useMemo(()=>{
        return {
            backgroundColor: dark ? "black" : "white",
            color : dark ? "white" : "black",
        };
    },[dark])

    const doubleNumber = useMemo(()=>{
        return setDouble(number);
    },[number])

    function setDouble(number){
        for(let i=0;i<1000000000;i++){}
        return number*2
    }
    return(
    <>
        <input
        type="number"
        value={number}
        onChange={(e)=>setNumber(e.target.value)}/>
        <button onClick={()=>setDark((curr)=>!curr)}>Toggle</button>
        <div style={themStyle}>{doubleNumber}</div>
    </>
    )
}

export default ExampleMemo;