import React, { useCallback } from "react";
import { useState } from "react";
import List from "./ChildUseCallBack" 

const Parent = ()=>{
    const [number,setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItem = useCallback((incrementer)=>{
        console.log("getItem Called!");
        return [number+1+incrementer, number+2+incrementer, number+3+incrementer];
    },[number]);

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    return (
        <div style={theme}>
            <input 
                type="number"
                value={number}
                onChange={(e)=>setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
            <List getItems={getItem} />
        </div>
    )

}

export default Parent