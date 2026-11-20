// import axios from 'axios';
import axios from './axios';
import React, { useEffect } from 'react'

export const Apicall = () => {

    // async function Call(){
    //     const response = await fetch("https://straightsums.co.uk/api/v1/2026-27.json");
    //     const data = await response.json();
    //     console.log(data)  
    // };
    // async function Call(){
    //     const response = await axios.get("https://straightsums.co.uk/api/v1/2026-27.json")
    //     console.log(response)
    //     console.log(response.data.income_tax)
    // };

    useEffect(()=>{
        
        // console.log(Call())
    },[])

    async function AxiosCall(){
        const response = await axios.get("2026-27.json")
        console.log(response)
        
    };
    
  return (
    <div>
        <h1>API</h1>
        {/* <button onClick={Call}>API call</button> */}
        <button onClick={AxiosCall}>axios API call</button>
    </div>
  )
}
