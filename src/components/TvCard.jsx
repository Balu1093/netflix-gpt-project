import { Image_CDN } from '../utils/constants'
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ShowInfoTv from './ShowInfoTv';
import { addTvDetails } from '../utils/tvslice';

const TvCard = ({test,setTest,data}) => {
  const percentage = Math.round(data.vote_average*10);  
  const[discover,setDiscover]=useState(false);
  const scrollFn = useSelector((state)=>state.config.navBar)

  // discover?document.body.style.overflow="hidden":document.body.style.overflow ="auto";
  const dispatch = useDispatch()
  const showDetials =()=>{
    dispatch(addTvDetails(null));
    setDiscover(!discover);
    setTest(!test)
    }
  
  
  return (
      <div>
        {discover && <ShowInfoTv test={test} setTest={setTest} props={setDiscover} data={data}/>}
      <div className='w-28 md:w-36 lg:w-52 hover:scale-90 rounded-lg transition duration-300'>
      <img onClick={showDetials} className='w-full rounded-lg cursor-pointer' src={Image_CDN+data.poster_path} alt="" />
      <div className='-mt-8 z-40 w-10 h-10 md:w-12 md:h-12 lg:h-14 lg:w-14'>
      <CircularProgressbar  key={data.id} background={true} styles={buildStyles({rotation: 0.25,strokeLinecap: 'butt',textSize: '24px',pathTransitionDuration: 0.5,
      pathColor: `rgba(1, 210, 119)`,textColor: 'white',trailColor: '#d6d6d6',backgroundColor:'rgb(2, 48, 32)',
  })} value={percentage} text={`${percentage}%`} />;
      </div>
      <div className='mt-4'>
        <h1 className='text-white font-semibold text-[10px] md:text-[12px] lg:text-[15px] w-full'>{data.title || data.name}</h1>
        <h3 className='text-white text-[9px] md:text-[11px] lg:text-[14px] font-extralight mt-2 w-full'>{data.release_date || data.first_air_date}</h3>
      </div>
    </div>
    </div>
  )
}

export default TvCard