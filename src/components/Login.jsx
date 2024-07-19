import React, { useState,useRef } from 'react'
import Header from './Header'
import checkValdiation from '../utils/Valdiation';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG,PHOTOURL } from '../utils/constants';

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const dispatch=useDispatch()

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  
  const handleButtonClick=()=>{
  const data =checkValdiation(email?.current?.value,password?.current?.value,name?.current?.value);
  setErrorMessage(data);
  if(data) return;

  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email?.current?.value,password?.current?.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName:name?.current?.value, photoURL: PHOTOURL
    }).then(() => {
      const{displayName,photoURL}=auth.currentUser;
      dispatch(addUser({displayName:displayName,photoURL:photoURL}))
      
    }).catch((error) => {
      setErrorMessage(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode)
  });
}
  
  else{
    signInWithEmailAndPassword(auth, email?.current?.value,password?.current?.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode)
  });
}}




 return (
    <div className='w-[100%]'>
      <Header/>
      <div className='absolute w-[100%] min-h-full bg-black min-w-[600px]'>
        <img className='w-[100%] bg-cover opacity-50' src={BG_IMG} alt="" />
      </div>
      <div className='flex h-lvh items-center flex-nowrap'>
        <form action="" className='w-[500px] absolute p-8 z-20 right-0 left-0 mx-auto bg-[rgba(0,0,0,0.8)] text-white'onSubmit={(e)=>e.preventDefault()}>
          <div className='ml-6'>
          <h1 className='font-bold text-3xl p-5'>{isSignInForm?"Sign In":"Sign Up"}</h1>
          </div>
          <div className='flex flex-col items-center '>
          {!isSignInForm && <input ref={name} className='w-3/4 py-4 border border-gray-400 my-4 p-3 bg-[rgba(0,0,0,0.3)] rounded-md' type="text" placeholder='Full Name' name="text"/>}
          <p className='w-3/4 text-red-600'>{errorMessage === "name is invalid" && "Entered name is invalid"}</p>
          <input ref={email} className='w-3/4 py-4 border border-gray-400 my-4 p-3 bg-[rgba(0,0,0,0.3)] rounded-md' type="text" placeholder={isSignInForm?"User Name/Email Address":"Email Address"} name="text"/>
          <p className='w-3/4 text-red-600'>{errorMessage === "Email is not Valid" && "Please enter a valid email address"}</p>
          <input ref={password} className='w-3/4 py-4 border border-gray-400 my-4 p-3 bg-[rgba(0,0,0,0.3)] rounded-md' type="password" placeholder='Password' name="password"/>
          <p className='w-3/4 text-red-600'>{errorMessage === "Password is not Valid" && "Please enter a valid password"}</p>
          <p className='w-3/4 text-red-600'>{errorMessage === "auth/invalid-credential"&& "Email Id doesn't exist/Invalid Email Id or Password"}</p>
          <button onClick={handleButtonClick} className='w-3/4 bg-red-600 py-3 my-4 font-semibold rounded-md cursor-pointer hover:bg-red-700'>{isSignInForm?"Sign In":"Sign Up"}</button>
          {isSignInForm?<h1 className=''>OR</h1>:null}
          {isSignInForm?<button className='w-3/4 my-4 bg-slate-50 bg-opacity-30 py-3 rounded-md hover:bg-opacity-25 cursor-pointer'>Use a sign-in code</button>:null}
          <h2 className='my-4 font-medium hover:underline hover:text-slate-50 hover:text-opacity-75 cursor-pointer'>Forgot password?</h2>
          <div className='w-3/4 my-4 flex justify-start gap-2 items-center'>
          <input className='cursor-pointer size-4' type="checkbox" />
          <label htmlFor="">Remember me</label>
          </div>
          <div className='w-3/4'>
            <h2 className='mb-7 text-[rgba(255,255,255,0.7)]'>{isSignInForm?"New to Netflix?":"Already a user?"}<span className='font-bold hover:underline text-white cursor-pointer ml-1' onClick={toggleSignInForm}>{isSignInForm?"Sign up now":"Sign In now"}</span></h2>
            <p className='text-[rgba(255,255,255,0.7)] text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-600 hover:underline'>Learn more.</span></p>
          </div>
          </div>
          
          </form> 
          </div>
    </div>
  )
}

export default Login