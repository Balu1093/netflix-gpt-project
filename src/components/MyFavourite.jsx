import React, { useEffect, useRef, useState } from 'react'
import { db,auth } from '../utils/firebase';
import{arrayRemove,doc,onSnapshot,updateDoc} from 'firebase/firestore'
import { BG_IMG } from '../utils/constants';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import { IoCloseOutline } from "react-icons/io5";
import FavouriteMovieCard from './FavouriteMovieCard';

const MyFavourite = ({fav,setFav}) => {
    const[test,setTest]=useState(true)
    const userData=useSelector((state)=>state.user)
    const [movies,setMovies]=useState([]);
    const {user}=auth;
    useEffect(()=>{
    if(userData){
        onSnapshot(doc(db,"users",`${userData.email}`),(doc)=>{
            if(doc.data()) setMovies(doc.data().favShows)
        })
    }

    },[user?.email]);

test?document.body.style.overflow="hidden":document.body.style.overflow ="auto";

const cardRef =useRef()
const cartWheel=(e)=>{
e.preventDefault();
cardRef.current.scrollLeft += e.deltaY
}

useEffect(()=>{
cardRef.current.addEventListener("wheel",cartWheel) 
},[])

const toggleFav=()=>{
    setFav(!fav)
    setTest(!test)
}


  return (
        <div className='bg-[rgba(49,49,49,0.7)] fixed w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 z-10 text-white'>
        <div className='absolute bg-black w-full h-full  top-[30%] left-[50%] -translate-x-1/2'>
            {/* <img src={BG_IMG} alt="" /> */}
            <h1 className='text-3xl p-6 mx-16 mt-10 font-semibold'>My Favourite</h1>
        </div>
        <div className="absolute flex gap-5 overflow-x-scroll scrollbar-hide z-10 items-end h-fit bottom-20 w-full" ref={cardRef} >
        {movies.length ?movies.map((data)=><FavouriteMovieCard data={data} />):<h1 className='text-xl flex w-full h-full justify-center mb-[10%]'>Kindly add your favourite movies to list here...</h1>}
        </div>
        <div>
            <button className='text-white absolute top-[35%] right-5 z-20'><IoCloseOutline onClick={toggleFav} className=' w-7 h-7 bg-white bg-opacity-35 rounded-full cursor-pointer' /></button>
        </div>
    </div>
  )
}

export default MyFavourite