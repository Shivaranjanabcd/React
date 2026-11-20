import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const Protected_Navbar = () => {
    const user = useSelector((state)=>{
        return(
            state.userInfo.user
        )
    })
  return (
    <nav>
        <ul>
            {/* { !user &&
            <Link to='/Protected_Login'>
                <li>Login</li>
            </Link>
            }
            { user &&
            <>
            <Link to='/Protected_Setting'>
                <li>Setting</li>
            </Link>
            <li>Logout</li>
            </>
            } */}
            {/* protectedcted Routes*/}
            <Link to='/Protected_Login'>
                <li>Login</li>
            </Link>
            <Link to='/Protected_Setting  '>
                <li>Setting</li>
            </Link>
            <li>Logout</li>
            
        </ul>
    </nav>
  )
}
