import { useContext, useEffect, useState } from 'react'
import SignupForm from './components/SignupForm';
import {Link, Route, Routes} from "react-router-dom"
import { AuthContext } from './Authcontext';
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// function Greeting(props){
//   return <h1> Thankyou! {props.name} and {props.age} </h1>
// }
// function App() {
//   const name="Shiva"
//   const age = 25

//   return (
//     <div>
//       <h1>Hello My name is {name} and im {age} years old</h1>
//       <Greeting name={"Pedro"} age={"20"}/>
//       <Greeting name={"Jack"}/>
//       <Greeting />
//       <Ifel />
//       <Tg />
//     </div>
//   );
// }

// let showgreeting = false
// function Ifel(){
//   return(
//     <div>
//       {showgreeting ?(                                  // if showgreeting:         if showgreeting: (without else for this) showgreeting && (<Greeting name={"ifelse name"} age={"30"}/>)
//         <Greeting name={"ifelse name"} age={"30"}/>     //    <Greeting name={"ifelse name"} age={"30"}/>
//       ):(<button>click me</button>)}                    // else:
//     </div>                                              //     (<button>click me</button>)
//   )
// }


// let toggle_var = false


// function Tg(){
//   const [toggle_var, settoggle_var]=useState(false)
//   function Toggle(){
//   if (toggle_var){
//     settoggle_var(false)
//   } else {
//     settoggle_var(true);
//   }
//   console.log(toggle_var);
// }
//   return (<div>
//     <button onClick={Toggle}> click me</button>
//     {toggle_var && (<Greeting name={"toggle name"} age={"30"}/>)}
//   </div>)
// }

//live text update
// function Todolist(){
//   const todos = [
//     {id:1, text:"Leanrn JSX"},
//     {id:2, text:"Understanding Props"},
//     {id:3, text:"Master State and events"}
//   ]
//   return(
//     <ul>
//       {todos.map((todo)=>(
//         <li key={todo.id}>{todo.text}</li>
//       ))}
//     </ul>
//   )
// }
// function App(){

//   const [name,setName] = useState("")

//    function HandleChanges(event){
//     const value = event.target.value;
//     setName(value);
//   }

//   return(
//   <div>
//     <input type='text' placeholder='Name....' onChange={HandleChanges}></input>
//     {name}
//     <h2>My Todoos</h2>
//     <Todolist />
//     <SignupForm />
//   </div>
//   )
// }

// Routers
// function Home(){
//   return(<h1> Home Page </h1>)
// }

// function About(){
//   return(<h1> About Page </h1>)
// }
// function App(){
//   return(
//     <div>
//       <nav style={{display:"flex", gap:"1rem"}}>
//         <Link to="/">Home</Link>
//         <Link to="/about">about</Link>
//       </nav>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/about' element={<About />}/>
//         <Route path='*' element={<h1>404 Not Found</h1>}/>
//       </Routes>
//     </div>
//   )
// }

// Login Authentication using contextAPI 

// 

// function App() {
//   const [showCounter, setShowCounter] = useState(false);
  
//   // Mounting -> Updating -> Unmounting
  
  
//   return (
//     <div>
//       <button onClick={() => setShowCounter(!showCounter)}>
        
//         Show Counter
//       </button>
//       {showCounter && <Counter />}
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   useEffect(()=>{
    
//     console.log('count without array:',count);
//     return(()=>{
//       setCount(0)
//       console.log("count inside return:",count);
      
//     })
//   },[])
//   useEffect(()=>{
    
//     console.log('count with array:',count+1);
//     return(()=>{
//       setCount(100)
//       console.log("count inside second return:",count);
      
//     })

//   },[count])

//   return <button onClick={() => setCount(count + 1)}>{count}</button>;
// }


// export default App;

import React from 'react'

import UseRef from "./components/UseRef";
import ExampleMemo from "./components/exampleMemo";
import Parent from "./components/usecallback_ex/Parent_UseCallBack"
import { Component1 } from './components/useContext/Component1';
import UseReducerExample from './components/useReducer/useReducerExample'

import {BrowserRouter} from 'react-router-dom';
import Home from './components/Router/Home';
import { About } from './components/Router/About';
// import { Users } from './components/Router/Users';
import { Contact } from './components/Router/Contact';
import {Navbar} from './components/Navbar'
import { User } from './components/Router/User';
import {Home1} from './components/Redux/Home'
import { Users } from './components/Redux/Users'
function App() {
  return (
    <div>
      App
      {/* <Navbar /> */}
      <UseRef />
      <ExampleMemo />
      <Parent />
      <Component1 />
      <UseReducerExample />
      
      {/* Router */}
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:x' element={<User />} />

          {/* Redux */}
          <Route path='/users' element={<Users />} />
          
        </Routes>
      {/* </BrowserRouter> */}
      <Home1 />
    </div>
  )
}

export default App