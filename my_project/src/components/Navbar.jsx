import React from 'react'
import {Link, Navigate} from 'react-router-dom'

export const Navbar = () => {

  const navig = Navigate();
  
  const handleclick = ()=>{
    // fetch("api/call") 
    navig("/users")
  }
  
  return (
    <nav>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            {/* OR */}
            <li onClick={()=>{handleclick}}>Another-Users</li> {/* If we want to do some task after we navigate to some componenet then navigate() function will be handy */}
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </nav>
  )
}
