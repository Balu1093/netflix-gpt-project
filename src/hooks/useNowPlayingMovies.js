import { API_DATA } from "../utils/constants";
import { useDispatch, useSelector} from 'react-redux';
import {addNowPlayingMovies} from "../utils/movieSlice";
import {useEffect, useState } from "react";

const useMoviesDataFetch=()=>{
    const[fast,setFast]=useState()
    // const dispatch = useDispatch()
    // const data = useSelector((state)=>state?.movies?.NowPlayingMovies)
  
  const getNowPlayingMovies = async()=>{
    const random = Math.floor(Math.random()*3)+1;
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page='+random, API_DATA);
    const json = await data.json();
    console.log(random)
    // dispatch(addNowPlayingMovies(json.results))
    setFast(json.results)
  }
  
  useEffect(()=>{
    getNowPlayingMovies()
  },[])

  return fast;
      
}

export default useMoviesDataFetch;