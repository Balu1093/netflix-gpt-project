import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { API_DATA } from '../utils/constants'
import { addTvDetails } from '../utils/tvslice';

const useTvDetails = (id) => {
    const dispatch = useDispatch()
    const videoData = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/'+id+'?language=en-US', API_DATA)
        const json = await data.json();
        if(!json) return;
        dispatch(addTvDetails(json))
    }
    useEffect(()=>{
        videoData()
    },[])

}

export default useTvDetails;