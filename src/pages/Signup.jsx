// import React, { useState } from 'react'
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { app } from '../firebase';

// const auth = getAuth(app);

// const Signup = () => {

//     const [email,setEmail] =useState("");
//     const [password,setPassword] =useState("");

//     const createUser = () => {
//         createUserWithEmailAndPassword(auth, email, password).then((value)=> alert("Success"))
//     }

//     return (
//         <div>
//             <label>Email</label>
//             <input onChange={(e)=> setEmail(e.target.value)} type="Email" required placeholder='Enter your email here' />
//             <label>Password</label>
//             <input onChange={(e)=> setPassword(e.target.value)} type="password" required placeholder='Enter your Password here' />
//             <button onClick={createUser}> signup </button>
//         </div>
//     )
//     }

// export default Signup

import React, { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

const Signup = () => {

    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

    const createUser = () => {
        try {
            createUserWithEmailAndPassword(auth,Email,Password).then((value)=> alert("success"))
        } catch (error) {
            console.log("ERROR : " + error);
        }
    }

    return (
        <div>
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='enter email' />
            <label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='enter password' />
            <button onClick={createUser}> signup</button>
            
        </div>
    )
}

export default Signup








