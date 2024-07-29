import { API_DATA } from "../utils/constants";
import { useDispatch} from 'react-redux';
import {useEffect, useState } from "react";
import { addNowPlayingTv } from "../utils/tvslice";



const useNowPlayingTv=()=>{
    const[tvList,setTvList]=useState(null)
    const [stats, setStats] = useState(null);
    // const [info, setInfo] = useState(null);
    // const[tvSeries,setTvSeries]=useState(null)
    const dispatch = useDispatch()

  const getTvData=()=>{
      Promise.all([
    fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US',API_DATA),
    fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1',API_DATA),
],)
        .then(res =>Promise.all(res.map(r=> r.json())))
        .then((list) => {
            setTvList(list);
        })
        .then((list) => {
            setStats(list);
        })
        .catch(error => (error));
    }
    

  dispatch(addNowPlayingTv(tvList,stats))

useEffect(()=>{
    getTvData()
  },[])


  return [{tvList,stats}];
      
} 

export default useNowPlayingTv;