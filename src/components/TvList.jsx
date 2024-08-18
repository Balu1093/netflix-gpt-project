import TvCard from './TvCard';
import { useEffect, useRef, useState} from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const TvList = ({title,data}) => {
const[test,setTest]=useState(true)
const cardRef =useRef()
const cartWheel=(e)=>{
e.preventDefault();
cardRef.current.scrollLeft += e.deltaY
}

useEffect(()=>{
cardRef.current.addEventListener("wheel",cartWheel) 
},[])


// const slide = (e)=>{
//   const slider =document.getElementById("slider");
//   slider.scrollLeft +=e;
// }
return (
  <div className='px-5 py-2 lg:py-10 w-[100%] lg:w-[90%] mx-auto'>
    <h1 className='text-white text-[18px] md:text-2xl lg:text-3xl font-bold my-4 lg:my-8'>{title}</h1>
    <div className="flex gap-2 md:gap-3 lg:gap-5 overflow-x-scroll scrollbar-hide" ref={cardRef}>
    {data.map((info)=><TvCard test={test} setTest={setTest} data={info}/>)}
    </div>
</div>
)       
}

export default TvList