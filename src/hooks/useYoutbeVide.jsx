import {useEffect,useState} from 'react'
import { API_DATA } from '../utils/constants'

const useYoutbeVide = (id) => {
    const [video,setVideo]=useState(null)
    const videoData = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_DATA)
        const json = await data.json();
        const filterData = json?.results.filter((x)=>x.type === "Trailer")
        const trailer = filterData.length?filterData[0]:json?.results[0];
        if(!trailer) return;
        setVideo(trailer)
    }
    useEffect(()=>{
        videoData()
    },[])

    return video

}

export default useYoutbeVide;