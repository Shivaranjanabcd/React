import React, { createContext, useState } from 'react'
import { Component2 } from './Component2'

export const Themecontext = createContext();

export const Component1 = () => {
    const [theme, setTheme] = useState("Light");

    const toggleTheme = ()=>{
        setTheme((curr)=>(curr=="Light"?"Dark":"Light"));
    };
  return (
    <Themecontext.Provider value={theme}>
        <button onClick={toggleTheme}>Toggle Context</button>
        <h1>Component1</h1>
        <Component2 />
    </Themecontext.Provider>
    
  )
}
