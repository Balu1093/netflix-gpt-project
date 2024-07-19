import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import useMoviesDataFetch from "../hooks/useNowPlayingMovies"

const MainContainer = () => {
const movies = useMoviesDataFetch()
if(!movies) return 
// console.log(movies)

const random = Math.floor(Math.random()*movies.length) 
// console.log(random)

const data =movies[random]
const{title,overview,id}=data


  return (
    <div className='w-[100%]'>
    <VideoTitle  title={title} overview={overview} id={id}/>
    <VideoBackground id={id} />
    </div>
  )
}

export default MainContainer