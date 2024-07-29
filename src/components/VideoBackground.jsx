import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import Shimmer from './Shimmer';



const VideoBackground = ({id}) => {
   useMovieTrailer(id);
    const TrailerId = useSelector((store)=>store?.movies?.movieTrailer)
    if(!TrailerId) return;
    
    return (
      <div className="w-screen h-screen aspect-video bg-black">
      <iframe className='w-screen h-screen' src={"https://www.youtube.com/embed/"+TrailerId?.key+"?rel=0&autoplay=1&mute=1&autohide=1&showinfo=0&controls=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground;