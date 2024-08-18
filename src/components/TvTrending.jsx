import TvCard from './TvCard';
import { useEffect, useRef, useState} from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Switch from './Switch';


const TvTrending = ({title,data,data1}) => {
const[test,setTest]=useState(true)
const[trending,setTrending]=useState(true)
const cardRef =useRef()
const cartWheel=(e)=>{
e.preventDefault();
cardRef.current.scrollLeft += e.deltaY
}

useEffect(()=>{
cardRef.current.addEventListener("wheel",cartWheel) 
},[])

const toggleTrending=()=>{
  setTrending(!trending)
}
// const slide = (e)=>{
//   const slider =document.getElementById("slider");
//   slider.scrollLeft +=e;
// }

const file=trending?data:data1;
return (
  <div className='px-5 py-2 lg:py-10 w-[100%] lg:w-[90%] mx-auto'>
    <div className='flex items-center gap-5'>
    <h1 className='text-white text-[18px] md:text-2xl lg:text-3xl font-bold my-4 lg:my-8'>{title}</h1>
    {/* <DarkMode toggleTrending={toggleTrending}/> */}
    <Switch trending={trending} toggleTrending={toggleTrending} />
    </div>
    <div className="flex gap-2 md:gap-3 lg:gap-5 overflow-x-scroll scrollbar-hide" ref={cardRef}>
    {file.map((info)=><TvCard test={test} setTest={setTest} data={info}/>)}
    </div>
</div>
)       
}

export default TvTrending