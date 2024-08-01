import React, { useState } from 'react'
import {IMAGE_CDN_BIG} from '../utils/constants'
import useMovieDetails from '../hooks/useMovieDetails'
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoCloseSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import imdb from '../Assets/imdb.png'
import { CiYoutube } from "react-icons/ci";
import YoutubeVideo from './YoutubeVideo';
import useYoutbeVide from '../hooks/useYoutbeVide';
import { arrayUnion,doc,updateDoc } from 'firebase/firestore';
import {db,auth} from '../utils/firebase'

const ShowInfo = ({test,setTest,props,data}) => {
    const[youtube,setyoutube]=useState(false) 
    const change = props;
    const getVideo = useYoutbeVide(data.id) 
    useMovieDetails(data.id)
    const movieInfo = useSelector((state)=>state.movies.movieDetails)
    const userData = useSelector((state)=>state.user.email)
    if(!movieInfo) return; 
  
    youtube?document.body.style.overflow ="hidden":document.body.style.overflow="auto";
    
    const timeConvert=(x)=>{
    let num = x;
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    const  answer = hours + "h  " + minutes + "m";
    return answer;}

    const percentage = Math.round(movieInfo.vote_average*10);
    
    const toggleYoutube=()=>{
      setyoutube(!youtube)
    } 

    const buttonClick =()=>{
      change();
      setTest(!test);
    }
   const addFavourite =async()=>{
    if(movieInfo){
      const userDoc =doc(db,"users",userData);
      await updateDoc(userDoc,{
        favShows:arrayUnion({...data}),
      })
      alert("added to favourite")
    }
    
   }


  return (
    <div className='bg-[rgba(49,49,49,0.7)] fixed w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 z-10 text-white'>
        <div className='absolute h-lvh w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] 2xl:w-[60%] 2xl:h-[900px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 py-4 px-4 min-h-[900px]'>
        <div className='relative bg-gradient-to-tl from-slate-600 to-slate-900 w-full h-full rounded-lg'>
        <img className='w-[100%] object-center h-full absolute mix-blend-luminosity opacity-40 rounded-lg' src={IMAGE_CDN_BIG+movieInfo.backdrop_path} alt="" />
        </div>
        <div className='absolute w-[90%] sm:w-[90%] md:w-[80%] lg:w-[80%] 2xl:w-[80%] mx-auto top-5 sm:top-5 md:top-0 lg:top-0 2xl:top-0 bottom-0 left-0 right-0 md:flex lg:flex 2xl:flex items-center'>
            <div className='ml-16 mt-6 sm:ml-0 sm:mt-6 md:ml-0 md:mt-0 lg:ml-0 lg:mt-0 2xl:mt-0 2xl:ml-0 w-[300px] sm:w-[200px] md:w-[250px] lg:w-[300px] 2xl:w-[400px] h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[600px] rounded-lg'>
             <img className='w-full h-full rounded-lg' src={IMAGE_CDN_BIG+movieInfo.poster_path} alt="" />
            </div>
            <div className='flex flex-col gap-2 ml-8 sm:ml-8 md:ml-10 lg:ml-12 2xl:ml-14 12/12 md:w-7/12 lg:w-7/12 2xl:w-7/12'>
              <h1 className='text-[20px] 2xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl font-semibold'>{movieInfo.title}</h1>
              <h3>{movieInfo.release_date} <span className='font-bold text-2xl'>.</span> {movieInfo.genres.map((x,index)=><span>{(index?', ':'')+ x.name}</span>)} <span className='font-bold text-2xl'>.</span> <span>{timeConvert(movieInfo.runtime)}</span></h3>
              <h3 className='text-white'></h3>
              <div className='flex gap-2 items-center'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24'>
                  <CircularProgressbar className='w-full h-full'  key={movieInfo.id} background={true} styles={buildStyles({rotation: 0.25,strokeLinecap: 'butt',textSize: '24px',pathTransitionDuration: 0.5,
              pathColor: `rgba(1, 210, 119)`,textColor: 'white',trailColor: '#d6d6d6',backgroundColor:'rgb(2, 48, 32)',
          })} value={percentage} text={`${percentage}%`} /></div>
              <div className='text-xl'>
                <p>User</p>
                <p>Score</p>
              </div>
              <div className='h-6 w-6 ml-6 group cursor-pointer relative' onClick={addFavourite}>
                <MdFavoriteBorder className='w-full h-full '/>
                <div className='absolute hidden group-hover:block -top-[70%] left-7 w-max bg-white bg-opacity-45 py-[18px] px-[22px] z-10 rounded-full'><button className='font-semibold text-red cursor-pointer'>Add to Favourite</button></div>
              </div>
               </div>
               <div className='md:my-2 lg:my-3 2xl:my-4'>
               <h1 className='text-white text-xl font-semibold opacity-70'>{movieInfo.tagline}</h1>
               </div>
               <div>
                <h3 className='text-[18px] lg:text-[18px] 2xl:text-xl font-semibold'>OverView</h3>
                <h4 className='text-[14px]  lg:text-[15px] 2xl:text-[18px] mt-2'>{movieInfo.overview}</h4>
               </div>
               <div className='flex md:mt-2 lg:mt-3 2xl:mt-4 gap-10'>
                <div className='w-20 h-14'>
                  <a target='_blank' href={`https://www.imdb.com/title/${movieInfo.imdb_id}/?ref_=fn_al_tt_1`}><img className='w-full h-full' src={imdb} alt="" /></a>
               </div>
                <div className='bg-red-500 rounded-lg'>
                  <button onClick={toggleYoutube} className='text-[22px] font-semibold py-2 px-3 flex items-center rounded-lg gap-1 h-14'><CiYoutube/> Watch Trailer</button>
                </div>
                {youtube && <YoutubeVideo  data={getVideo} youtube={youtube} setyoutube={setyoutube}/>}
               </div>
    
    
  </div>
  </div>
  <div className=''>
  <button className='absolute  text-white top-6 end-6 py-2 px-2 font-medium text-xl bg-white rounded-full bg-opacity-40' onClick={buttonClick}> <IoCloseSharp/></button>
  </div>
  </div>
  </div>
  )
}

export default ShowInfo;

