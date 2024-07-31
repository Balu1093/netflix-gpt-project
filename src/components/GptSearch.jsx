import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constants'
import cinema from '../Assets/cinema.jpg'
import cinema2 from '../Assets/cinema2.jpg'
const GptSearch = () => {
  return (
    <div className='w-full h-full bg-black'>
      <div className='w-[100%] bg-black'>
        <img className='h-lvh w-lvw object-cover object-center opacity-80' src={cinema2} alt="" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch