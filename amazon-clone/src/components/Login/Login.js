import React, { useState } from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import { auth } from '../../firebase-config';
import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate ();

    const signIn = (e) =>{
        e.preventDefault();

       auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history('/')
        })
        .catch(err=>console.log(err.message));
    }

    const registerAccount = (e)=>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //successfully created new user and password
                if (auth) {
                    history('/');
                }
            })
            .catch(error=>console.log(error.message));

        // do some fancy firebase registrations
    }


  return (
    <div className='login'>
        <Link to='/'>
            <img  className='login__logo'
                  src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
                  alt='Amazon logo' />
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input 
                    type='text' 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <h5>Password</h5>
                <input 
                    type='password' 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                    type='submit' 
                    className='login__signInButton'
                    onClick={signIn}>
                    Signin
                </button>
            </form>
            <p>
                By continuing, you agree to Amazon's
                Conditions of Use and Privacy Notice.
            </p>
            <button 
                className='login__registerButton'
                onClick={registerAccount}>Create Your Amazon account</button>
        </div>
    </div>
  )
}

export default Login