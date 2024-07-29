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
  <div className='px-20 pr-4 py-10'>
    <h1 className='text-white text-3xl font-bold my-8'>{title}</h1>
    <div className={`${test === true?"flex gap-5 overflow-x-scroll scrollbar-hide":"flex gap-5 scrollbar-hide"}`} ref={cardRef}>
    {/* <div className="flex gap-5 overflow-x-scroll scrollbar-hide" ref={cardRef}> */}
    {data.results.map((info)=><TvCard test={test} setTest={setTest} data={info}/>)}
    </div>
</div>
)       
}

export default TvList