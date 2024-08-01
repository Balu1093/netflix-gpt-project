import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import useMoviesDataFetch from "../hooks/useNowPlayingMovies"
import { useSelector } from 'react-redux'
import useNowPlayingTv from '../hooks/useNowPlayingTv'

const MainContainer = () => {
const movieData = useSelector((state)=>state.movies.NowPlayingMovies)
const [movieDetails]=useMoviesDataFetch()
if(!movieData) return;
if(!movieDetails)return;

const random = Math.floor(Math.random()*movieData[0]?.results?.length)


const data =movieData[1]?.results[random]
const{title,overview,id}=data


  return (
    <div className='-mt-14 w-screen h-screen bg-black'>
    <VideoTitle  title={title} overview={overview} id={id}/>
    <VideoBackground id={id}/>
    
    </div>
  )
}

export default MainContainer