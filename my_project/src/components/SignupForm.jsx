import { useState } from "react";
import {useForm} from "react-hook-form";
// export default function SignupForm(){
//     const [email,setEmail]=useState("")
//     const [password, setPassword]=useState("")

//     function handleSubmit(event){
//         event.preventDefault();
//         alert(`You submited with email: ${email} password: ${password}`)
//     }
//     return(
//         <div style={{maxwidth:400, margin: "2rem auto"}}>
//             <h1>Signup</h1>
//             <form onSubmit={handleSubmit}>
//                 <div style={{marginbottom:"1rem"}}>
//                     <label>
//                         Email
//                         <input type="text" placeholder="Email.." onChange={(e)=>setEmail(e.target.value)}></input>
//                     </label>
//                 </div>

//                 <div style={{marginbottom:"1rem"}}>
//                     <label>
//                         Password
//                         <input type="text" placeholder="Password.." onChange={(e)=>setPassword(e.target.value)}></input>
//                         {password}
//                     </label>
//                 </div>
//                 <button type="submit">Create an account</button>
//             </form>
//         </div>
//     )
// }

// validation
export default function SignupForm(){
    const {register,handleSubmit,formState:{errors},} = useForm()

    function onSubmit(data){
        
        alert(`You submited with email: ${data.email} password: ${data.password}`)
    }
    return(
        <div style={{maxwidth:400, margin: "2rem auto"}}>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{marginbottom:"1rem"}}>
                    <label>
                        Email
                        <input type="text" placeholder="Email.." {...register("email",{required:"email is required"})}></input>
                    </label>
                    {errors.email && <p style={{colour:"crimson"}}>{errors.email.message}</p>}
                </div>

                <div style={{marginbottom:"1rem"}}>
                    <label>
                        Password
                        <input type="text" placeholder="Password.." {...register("password",
                        {
                            required:'password is required',
                            minLength:{
                                value:4,
                                message:"password atleast 4 letter"
                            },
                            maxLength:{
                                value:12,
                                message:"password atmost 12 letter"
                            },
                        })}></input>
                    </label>
                    {errors.password && <p style={{colour:"crimson"}}>{errors.password.message}</p>}
                </div>
                <button type="submit">Create an account</button>
            </form>
        </div>
    )
}