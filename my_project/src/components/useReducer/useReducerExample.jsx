import React, { useReducer, useState } from 'react'

const UseReducerExample = () => {
    
    
    function reducerfun(state,action){
        switch(action.type){
            case "increament":
                return {count:state.count +1};
            case "decrement":
                return {count:state.count -1};
            default:
                return state;
        }
    }

    // const [count, setCount] = useState();
    const [state,dispatch] = useReducer(reducerfun,{count:1});

    const increament=()=>{
        dispatch({type:"increament"})
    };
    const decreament=()=>{
        dispatch({type:"decrement"})
    };
    
    return (
        <div>
            <button onClick={increament}>+</button>
            <p>{state.count}</p>
            <button onClick={decreament}>_</button>
        </div>
    )
}
export default UseReducerExample
