import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const user =useSelector((store)=>store.user)
  const navigate = useNavigate()

const signoutfn=()=>{
    signOut(auth).then(() => {
    
    }).catch((error) => {
      
    });
}
  

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const{email,uid,displayName,photoURL}=user;
    dispatch(addUser({email:email,uid:uid,displayName:displayName,photoURL:photoURL}))
    navigate("/browse")

      } else {
      dispatch(removeUser())
      navigate("/")
    }
  });
  // unsubscribe when component unmounts
  return ()=> unsubscribe();
},[])


  return (
      <div className='absolute w-[100%] flex justify-between z-10'>
        <img className='w-40 h-20 m-3 ml-3 sm:ml-8 md:ml-14 2xl:ml-20' src={LOGO} alt="" />
        {user && <div className='p-2 z-10 flex gap-5 items-center text-white bg-gradient-to-l from-[rgba(0,0,0,1)]'>
          <h1 className='font-semibold text-2xl'>Hi {user.displayName}</h1>
          <img className='w-20' src={user.photoURL} alt="" />
          <button className='font-semibold' onClick={signoutfn}>signOut</button>
        </div>}
        </div>
    
  )
}

export default Header