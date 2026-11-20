import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {setUser_reducer_fun} from './Slice/userSlice';
export const Home1 = () => {

    const dispatch = useDispatch()

    const [formInput, setformInput] = useState(
        {
            name:"",
            age:"",
            contact:"",
            email:"",
        
        }
    )

    const handlechange=(e)=>{
        
        const { name, value} = e.target; // name it is a input field i.e name='age', name="contact"
        setformInput((current) =>{
            return{
                ...current,
                [name]: value,
            };
            
        } );

    };

    const addUser=(event)=>{
        event.preventDefault();
        dispatch(setUser_reducer_fun(formInput));
    }

    return (
    <div>
        <label>name</label>
        <input type="text" value={formInput.name} name='name' onChange={handlechange}/>
        <br />
        <label>age</label>
        <input type="number" value={formInput.age} name='age' onChange={handlechange}/>
        <br />
        <label>contact</label>
        <input type="number" value={formInput.contact} name='contact' onChange={handlechange}/>
        <br />
        <label>email</label>
        <input type="text" value={formInput.email} name='email' onChange={handlechange}/>
        <br />
        <button onClick={addUser}>Add User</button>
    </div>
    )
}
