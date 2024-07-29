import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import useMoviesDataFetch from "../hooks/useNowPlayingMovies"

const MainContainer = () => {
const [{movieList}] = useMoviesDataFetch()
if(!movieList) return;

const random = Math.floor(Math.random()*movieList[0]?.results?.length)



const data =movieList[1]?.results[random]
const{title,overview,id}=data


  return (
    <div className='-mt-14 w-screen h-screen bg-black'>
    <VideoTitle  title={title} overview={overview} id={id}/>
    <VideoBackground id={id}/>
    
    </div>
  )
}

export default MainContainer