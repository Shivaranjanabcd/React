import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import deleteUser_reducer_fun from './Slice/userSlice.js'
export const Users = () => {
    const users = useSelector((state)=>{
        return(state.userInfo.users_state)
    })
    const dispatch = useDispatch()
    const deleteuserInfo=(index)=>{
        dispatch(deleteUser_reducer_fun(index))
    }
    
    
  return (
    <div>
        {users?.map((user,index)=>{
            return(
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.age}</h2>
                    <h2>{user.contact}</h2>
                    <h2>{user.email}</h2>
                    <button onClick={()=>deleteuserInfo(index)}>Delete</button>
                </div>
            )
        })}
    </div>
        
  )
}
