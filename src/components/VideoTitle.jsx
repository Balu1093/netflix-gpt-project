import React from 'react'
import info_icon from "../Assets/info_icon.png"

const VideoTitle = ({title,overview,id}) => {
  return (
    <div className='absolute flex flex-col justify-center h-screen text-white bg-gradient-to-r from-[rgba(0,0,0,0.7)] p-3 lg:p-10 w-12/12 lg:w-9/12'>
        <div className='mt-[320px] md:mt-0'>
        <h1 className='text-[20px] sm:text-[20px] md:text-[24px] lg:text-3xl font-bold sm:text-4xl md:text-5xl 2xl:text-6xl'>{title}</h1>
        <h3 className='text-[12px] sm:text-[12px] md:text-[16px] lg:text-xl font-medium mt-3 lg:w-6/12 md:block 2xl:block'>{overview}</h3>
        </div>
        <div className='flex gap-4 mt-7'>
            <button className='hidden md:block text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>▶Play</button>
            <button className='hidden md:block text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-7 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;