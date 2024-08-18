import React, { useState } from 'react'
import {useSelector } from 'react-redux'
import MovieList from "./MovieList"
import TvList from './TvList'
import useNowPlayingTv from '../hooks/useNowPlayingTv'
import MovieTrending from './MovieTrending'
import TvTrending from './TvTrending'

const SecondaryConatiner = () => {
  const[file,setFile]=useState(true)
  useNowPlayingTv()
  const data = useSelector((state)=>state.movies.NowPlayingMovies)
  const data1=useSelector((state)=>state.tv.nowPlayingTv)
  if(!data) return;
  if(!data1) return;
  const toggle=()=>{
    setFile(!file);
  }

  return(
  <div className='relative -mt-40 md:-mt-60'>
        <MovieTrending title={"Trending Movies"} data={data[1].results} data1={data[3].results}/>
        <MovieList title={"Top Rated Movies"} data={data[2].results}/>
        <MovieList title={"Now Playing Movies"} data={data[0].results}/>
        <TvTrending title={"Trending Tv series"} data={data1[0].results} data1={data1[2].results}/>
        <TvList title={"Top Rated Tv Series"} data={data1[1].results}/>
        <TvList title={"On The Air"} data={data1[3].results}/>
    </div>
)

}

export default SecondaryConatiner