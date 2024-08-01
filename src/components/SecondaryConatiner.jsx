import React from 'react'
import {useSelector } from 'react-redux'
import MovieList from "./MovieList"
import TvList from './TvList'
import useNowPlayingTv from '../hooks/useNowPlayingTv'

const SecondaryConatiner = () => {
  useNowPlayingTv()
  console.log("data")
  const data = useSelector((state)=>state.movies.NowPlayingMovies)
  const data1=useSelector((state)=>state.tv.nowPlayingTv)
  if(!data) return; 
  if(!data1) return;

  return(
  <div className='relative -mt-60'>
        <MovieList title={"Trending Movies"} data={data[1].results}/>
        <MovieList title={"Top Rated Movies"} data={data[2].results}/>
        <MovieList title={"Now Playing Movies"} data={data[0].results}/>
        <TvList title={"Trending Tv series"} data={data1[0].results}/>
        <TvList title={"On The Air(Tv Series)"} data={data1[1].results}/>
    </div>
)

}

export default SecondaryConatiner