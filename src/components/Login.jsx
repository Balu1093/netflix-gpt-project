import React, { useState,useRef } from 'react'
import Header from './Header'
import checkValdiation from '../utils/Valdiation';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,sendPasswordResetEmail} from "firebase/auth";
import {auth,db} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {PHOTOURL } from '../utils/constants';
import{doc,setDoc} from 'firebase/firestore'
import cinema6 from '../Assets/cinema6.jpg'
import cinema7 from '../Assets/cinema7.jpg'

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);
  const[forgotPwd,setForgotPwd]=useState(null)
  const[forgotText,setForgotText]=useState("");
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
    // dispatch(addUser({email:email})); 
    
    setDoc(doc(db,'users',email?.current?.value),{
      favShows:[],
    })
    updateProfile(user, {
      displayName:name?.current?.value
    }).then(() => {
      const{displayName,photoURL,email,uid}=auth.currentUser;
      dispatch(addUser({email:email,uid:uid,displayName:displayName}))
      
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
const Notification=(errorMessage)=> {
  switch(errorMessage) {
    case 'auth/invalid-credential':
      return <p>Email Id doesn't exist/Invalid Email Id or Password</p>
      break;  
    case 'auth/email-already-in-use':
      return <p>Email Id already in use</p> 
      break; 
    case 'auth/user-disabled':
      return <p>Your account is disabled. Kindly contact the admin</p>
      break; 
    case 'Password is not Valid':
        return <p>Please enter a valid password</p>
      break; 
    default:
      return null
      break;
  }
}
const isforgotpassword=()=>{
  setForgotPwd(true)
}
const forgot= ()=>{
sendPasswordResetEmail(auth,forgotText)
  .then(() => {
    window.alert("password reset link sent to the Email Id")
    setTimeout(() => {
    setForgotPwd(!forgotPwd)  
    }, 500);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode)
  });
  setForgotText("")
};

const back=()=>{
  setForgotPwd(!forgotPwd)
}

 return (
    <div className='w-[100%]'>
      <Header/>
      <div className='absolute bg-black aspect-video'>
        <img className='h-lvh w-lvw object-cover opacity-70' src={cinema6} alt="" />
      </div>
      {!forgotPwd ?<div className='flex h-lvh items-center flex-nowrap'>
        <form action="" className='w-[500px] absolute p-8 z-20 right-0 left-0 mx-auto bg-[rgba(0,0,0,0.8)] text-white mt-14 sm:mt-14 md:mt-0 lg:mt-0 2xl:mt-0 'onSubmit={(e)=>e.preventDefault()}>
          <div className='ml-6'>
          <h1 className='font-bold text-3xl p-5'>{isSignInForm?"Sign In":"Sign Up"}</h1>
          </div>
          <div className='flex flex-col items-center '>
          {!isSignInForm && <input ref={name} className='w-3/4 py-4 border border-gray-400 my-4 p-3 bg-[rgba(0,0,0,0.3)] rounded-md' type="text" placeholder='Full Name' name="text"/>}
          <p className='w-3/4 text-red-600'>{errorMessage === "name is invalid" && "Entered name is invalid"}</p>
          <input ref={email} className='w-3/4 py-4 border border-gray-400 my-4 p-3 bg-[rgba(0,0,0,0.3)] rounded-md' type="text" placeholder="Email Address" name="text"/>
          <p className='w-3/4 text-red-600'>{errorMessage === "Email is not Valid" && "Please enter a valid email address"}</p>
          <input ref={password} className='w-3/4 py-4 border border-gray-400 my-4 p-3 bg-[rgba(0,0,0,0.3)] rounded-md' type="password" placeholder='Password' name="password"/>
          <p className='w-3/4 text-red-600'>{Notification(errorMessage)}</p>
          <button onClick={handleButtonClick} className='w-3/4 bg-red-600 py-3 my-4 font-semibold rounded-md cursor-pointer hover:bg-red-700'>{isSignInForm?"Sign In":"Sign Up"}</button>
          {isSignInForm?<h1 className=''>OR</h1>:null}
          {isSignInForm?<button className='w-3/4 my-4 bg-slate-50 bg-opacity-30 py-3 rounded-md hover:bg-opacity-25 cursor-pointer'>Use a sign-in code</button>:null}
          <button className='my-4 font-medium hover:underline hover:text-slate-50 hover:text-opacity-75 cursor-pointer' onClick={isforgotpassword}>Forgot password?</button>
          {/* <h2 className='my-4 font-medium hover:underline hover:text-slate-50 hover:text-opacity-75 cursor-pointer'>Forgot password?</h2> */}
          <div className='w-3/4 my-4 flex justify-start gap-2 items-center'>
          <input className='cursor-pointer size-4' type="checkbox" />
          <label htmlFor="">Remember me</label>
          </div>
          <div className='w-3/4'>
            <h2 className='mb-7 text-[rgba(255,255,255,0.7)]'>{isSignInForm?"New to Playlix?":"Already a user?"}<span className='font-bold hover:underline text-white cursor-pointer ml-1' onClick={toggleSignInForm}>{isSignInForm?"Sign up now":"Sign In now"}</span></h2>
            <p className='text-[rgba(255,255,255,0.7)] text-sm'>This page is protected by xxxx reCAPTCHA to ensure you're not a bot.<span className='text-blue-600 hover:underline'>Learn more.</span></p>
          </div>
          </div>
          </form>
          </div>:<form className='w-[500px] mt-52 absolute p-8 z-20 right-0 left-0 mx-auto bg-[rgba(0,0,0,0.8)] text-white'onSubmit={(e)=>e.preventDefault()}>
            <div className='flex flex-col h-80 justify-center items-center'> <div className='w-3/4'>
            <h1 className='font-bold text-3xl mb-5'>Password Reset</h1>
              <input className='w-full py-4 border border-gray-400 my-4 p-3 bg-[rgba(0,0,0,0.3)] rounded-md' type="text" placeholder="Email Address" name="text" value={forgotText} onChange={(e)=>setForgotText(e.target.value)}/>
              <p className='w-3/4 text-red-600'>{errorMessage}</p>
              </div>
             <div className='w-3/4 flex mt-5 gap-3'>
             <button type='submit'className='w-2/4 bg-red-600 py-3 my-4 font-semibold rounded-md cursor-pointer hover:bg-red-700' onClick={forgot}>Submit</button>
              <button onClick={back} className='w-2/4 bg-red-600 py-3 my-4 font-semibold rounded-md cursor-pointer hover:bg-red-700' >back</button>
            </div>
            
            </div>
            </form>}
    </div>
  )
}

export default Login



