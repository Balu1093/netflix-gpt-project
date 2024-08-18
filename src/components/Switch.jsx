import React from 'react'

const Switch = ({trending,toggleTrending}) => {
    
  return (
    <div onClick={toggleTrending}  className='relative flex w-[140px] md:w-[190px] h-8 md:h-10 bg-[#ebebeb] rounded-full cursor-pointer'>
        <span className={`absolute h-8 md:h-10 w-[70px] md:w-[95px] bg-gradient-to-r from-[#ffcc89] to-[#d8860b] rounded-full transition-all duration-500 ${!trending && 'ml-[70px] md:ml-[95px]'}`}/>
        <div className='flex absolute z-0 top-2 left-2 gap-5 md:gap-10'>
        <h3 className='ml-2 md:ml-1 text-[12px] md:text-[16px]'>Today</h3>
        <h3 className='mr-1 md:mr-0 text-[12px] md:text-[16px]'>This Week</h3>
        </div>
        
    </div>
  )
}

export default Switch