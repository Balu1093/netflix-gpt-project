import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'



const VideoBackground = ({id}) => {
   const data = useMovieTrailer(id);
    const TrailerId = useSelector((store)=>store?.movies?.movieTrailer)
    if(!TrailerId) return;
    // console.log(data.key)

    


    
return (
    
    <div>
      
    <div className='w-screen h-screen aspect-video'>
        <iframe className='w-screen h-screen' src={"https://www.youtube.com/embed/"+TrailerId?.key+"?&autoplay=1&mute=1&controls=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"allowFullScreen></iframe>
    </div>
    </div>
  )
}

export default VideoBackground;