import React from 'react'
import info_icon from "../Assets/info_icon.png"

const VideoTitle = ({title,overview,id}) => {
  return (
    <div className='absolute flex flex-col justify-center h-screen text-white bg-gradient-to-r from-[rgba(0,0,0,0.7)] p-10 w-9/12'>
        <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl 2xl:text-6xl'>{title}</h1>
        <h3 className='hidden text-1xl font-medium mt-3 w-6/12 md:block 2xl:block text-re'>{overview}</h3>
        <div className='flex gap-4 mt-7'>
            <button className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>▶Play</button>
            <button className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-7 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;