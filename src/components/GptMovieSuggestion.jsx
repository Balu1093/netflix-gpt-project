import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {movieName,movieResults}=useSelector((state)=>state.gpt);
  if(!movieName) return;
 document.body.style.overflow ="auto"
  return (
    <div className='absolute w-[100%] rounded-l-lg rounded-r-lg flex items-center bg-black'>
  {movieName &&<div className=' bg-black bg-opacity-40 overflow-y-hidden -mt-[600px]'> 
       {movieName.map((title,index)=>(<MovieList title={title} data={movieResults[index]}/>))}
      </div>}
    </div>
  )
}

export default GptMovieSuggestion