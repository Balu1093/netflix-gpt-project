import {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import {addMovieDetails} from "../utils/movieSlice";
import { API_DATA } from '../utils/constants'

const useMovieDetails = (id) => {
    const dispatch = useDispatch()
    const videoData = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', API_DATA)
        const json = await data.json();
        if(!json) return;
        dispatch(addMovieDetails(json))
        return json
    }
    useEffect(()=>{
        videoData()
    },[])

}

export default useMovieDetails;
