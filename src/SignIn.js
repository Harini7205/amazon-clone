import React,{useState} from 'react';
import './SignIn.css';
import {useNavigate} from "react-router-dom";
import {auth} from './firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';

function SignIn() {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const signIn=e=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((auth)=>{
      console.log(auth);
      if (auth){
        navigate("/");
      }
    })
    .catch(error=>alert(error.message))
  }
  const register=e=>{
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth,email,password)
    .then((auth)=>{
      console.log(auth);
      if (auth){
        navigate("/");
      }
    })
    .catch(error=>alert(error.message))
  }
  return (
    <div className="sign-in">
      <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="amazon-logo" className='sign-in-logo'/>
      <div className="login-details">
        <p>Sign In or Create Account</p>
        <p>Enter mobile number or email address</p>
        <input type="text" className='input-field-login' value={email} onChange={e=>setEmail(e.target.value)}/>
        <p>Enter password</p>
        <input type="text" className='input-field-login' value={password} onChange={e=>setPassword(e.target.value)}/>
        <button className='sign-in-yellow-button' type="submit" onClick={signIn}>Continue</button>
        <button className='sign-in-yellow-button grey' type="submit" onClick={register}>Create an Amazon Account</button>
        <p className='caution'>By continuing, you agree to <span>Amazon's Conditions of Use</span> and <span>Privacy Notice.</span></p>
      </div>
      <hr width="100%" size="1px" color="lightgrey"/>
      <div className='signin-copyright'>
        <div className="signin-copyright-options">
            <p>Conditions of Use & Sale</p>
            <p>Privacy Notice</p>
            <p>Interest Based Ads</p>
        </div>
        <p className='sign-in-copyright-text'>&#169; July 2024 Harini</p>
      </div>
    </div>
  )
}

export default SignIn
