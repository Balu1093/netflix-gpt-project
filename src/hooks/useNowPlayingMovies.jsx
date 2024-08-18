import { API_DATA } from "../utils/constants";
import { useDispatch, useSelector} from 'react-redux';
import {addNowPlayingMovies} from "../utils/movieSlice";
import {useEffect, useState } from "react";



const useMoviesDataFetch=()=>{
    const[movieList,setMovieList]=useState(null)
    const [stats, setStats] = useState(null);
    const [info, setInfo] = useState(null);
    const[dayTrend,setDayTrend]=useState(null);
    const dispatch = useDispatch()

    const nowPlaying = useSelector((state)=>state.movies.NowPlayingMovies)

  const getMovieData=()=>{
     Promise.all([
        fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_DATA),
        fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US',API_DATA),
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',API_DATA),
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-IN&page=1',API_DATA)],)
        .then(res =>Promise.all(res.map(r=> r.json())))
        .then((list) => {
          setMovieList(list);
        })
        .then((stats) => {
          setStats(stats)
        })
        .then((info) => {
          setInfo(info)
        })
        .then((day) => {
          setDayTrend(day)
        })
        .catch(error => error);
    }

  dispatch(addNowPlayingMovies(movieList,stats,info,dayTrend))

useEffect(()=>{
    getMovieData()
  },[])


  return [movieList,stats,info,dayTrend];
      
} 

export default useMoviesDataFetch;