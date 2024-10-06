
import { app } from './firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


{/* seconde code */}
import Signup from './pages/Signup';

{/* three code */}
import Signin from './pages/Signin';


const auth = getAuth(app);


function App() {

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "hello123@gmail.com", "hello@123").then((values)=>console.log(values));
  }

  return (
    <>
      {/* first code */}
      {/* <h1>Firebase React App</h1>
      <button onClick={signupUser}> create user</button> */}

      {/* seconde code */}
      <Signup/>

      {/* signin code */}
      <Signin/>


    </>
  )
}

export default App
