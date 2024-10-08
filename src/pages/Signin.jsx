import React, { useState } from 'react'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);


const Signin = () => {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((value)=> alert("signin success"))
        .catch((error)=>console.log(error))
    }

    return (
        <div>
            <h1>SignIn page</h1>
            <label>Enter your Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder='enter your Email' />
            <label>Enter your Password</label>
            <input onChange={(e)=>setPassword(e.target.value)}  value={password} type="password" placeholder='enter your Password' />
            <button onClick={signinUser}>SignIn</button>
        </div>
    )
}

export default Signin
