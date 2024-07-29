import React, {useEffect, useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import 'react-circular-progressbar/dist/styles.css';
import {GEMINI_API_KEY} from '../utils/constants'




const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
   const support = useSelector(state=>state.config.lang);
   const searchText = useRef();
   
   const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const handleGptSearchClick=async()=>{
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});  
  const gptQuery ="Act as a movie recommendation system and suggest some movies for the query"+searchText?.current?.value+". only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Indian,Bombay,Baashha,Aasai,Muthu";
  const prompt = gptQuery

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  console.log('working')
   }

return (
    <div >
      <form onSubmit={(e)=>e.preventDefault()}>
      <div className='absolute top-[30%] left-[50%] z-10 w-5/12 h-14 rounded-l-lg rounded-r-lg flex items-center -translate-x-1/2 -translate-y-1/2'>
      <input ref={searchText} className='w-9/12 h-full rounded-l-lg p-4 text-white bg-black bg-opacity-70 outline-none' placeholder={lang[support].gptPlaceHolder} type="text"/>
      <button className=' bg-red-500 text-white w-3/12 h-full font-semibold rounded-r-lg cursor-pointer' onClick={handleGptSearchClick}>{lang[support].search}</button>
      </div>
      </form>
      
      </div>
    
  )
}

export default GptSearchBar;