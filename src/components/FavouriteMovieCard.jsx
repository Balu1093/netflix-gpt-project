import { Image_CDN } from '../utils/constants'
import 'react-circular-progressbar/dist/styles.css';
import { IoCloseOutline } from "react-icons/io5";
import { db } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';

const FavouriteMovieCard = ({data}) => {
const user = useSelector((state)=>state.user.email)

const handleUnlikeShow=async()=>{
 const userDoc =doc(db,"users",user)
  
 await updateDoc(userDoc,{
    favShows: arrayRemove(data),
 })
}

return (
      <div className='h-[400px]'>
      <div className='relative w-28 md:w-36 lg:w-52 rounded-lg transition duration-300 group'>
      <img className='w-full rounded-lg cursor-pointer ' src={Image_CDN+data.poster_path} alt="" />
      <div className='mt-4'>
        <h1 className='text-white font-semibold text-[10px] md:text-[12px] lg:text-[15px] w-full'>{data.title || data.name}</h1>
        <h3 className='text-white text-[9px] md:text-[11px] lg:text-[14px] font-extralight mt-2 w-full'>{data.release_date || data.first_air_date}</h3>
        <p>
          <IoCloseOutline onClick={handleUnlikeShow} className='absolute text-black top-2 right-2 w-6 h-6 bg-white bg-opacity-50 rounded-full cursor-pointer hidden group-hover:block'/>
        </p>
      </div>
    </div>
    </div>
  )
}

export default FavouriteMovieCard