import React, { useEffect, useState } from 'react'
import Header from './Header'
import MainContainer from "./MainContainer"
import SecondaryConatiner from "./SecondaryConatiner"
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
import Footer from './Footer'




const Browse = () => {
  const accessGpt = useSelector((state)=>state.gpt.showGptSearch)

return (
    <div className='w-screen h-[100%] p-0 m-0 box-border bg-black'>
     <Header/>
      {accessGpt?<GptSearch/>:<><MainContainer /><SecondaryConatiner /></>}
     <Footer/>
</div>
  )
}

export default Browse