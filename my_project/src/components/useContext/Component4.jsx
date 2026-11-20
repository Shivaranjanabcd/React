import React, { useContext } from 'react'
import { Themecontext } from './Component1'


export const Component4 = () => {

    const theme = useContext(Themecontext)
    const textStyle = {
        backgroundColor:theme==="Light"? "white":"black",
        color:theme==="Light"?"black":"white"
    }
    return (
        <div style={textStyle}>Component4</div>
    )
}