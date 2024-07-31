import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";

const YoutubeVideo = ({data,setyoutube,youtube}) => {

    const toggleOption=()=>{
      setyoutube(!youtube);
    }
    // youtube?document.body.style.overflow ="hidden":document.body.style.overflow="auto";

    console.log(youtube)

  return (
    <div className='bg-transparent fixed w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 z-10 text-white'>
        <div className='absolute bg-[rgba(49,49,49,0.7)] w-[400px] h-[900px] sm:w-[600px] sm:h-[900px] md:w-[800px] md:h-[900px] lg:w-[1000px] lg:h-[900px] 2xl:w-[1550px] 2xl:h-[900px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 py-4 px-4 min-w-[450px] min-h-[500px] max-h-[900px] max-w-[1550px]'>
        <iframe className='w-full h-full' src={"https://www.youtube.com/embed/"+data?.key+"?rel=0&autoplay=1&mute=1&autohide=1&showinfo=0&controls=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"allowFullScreen></iframe>
        <div className=''>
       <button className='absolute text-white top-20 end-0 right-0 mr-5 py-2 px-2 font-medium text-xl bg-white rounded-full bg-opacity-40' onClick={toggleOption}> <IoCloseSharp/></button>
      </div>
        </div>
        </div>
  )
}

export default YoutubeVideo
