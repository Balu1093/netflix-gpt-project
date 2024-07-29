import React, { useEffect,useRef,useState } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import {useNavigate } from 'react-router-dom';
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO,CHANGE_LANG } from '../utils/constants';
import profile_img from "../Assets/profile_img.png"
import arrow16 from "../Assets/arrow16.png"
import {toggleGptView} from "../utils/gptSlicer"
import {changeLanguage} from "../utils/configSlice"
import MyFavourite from './MyFavourite';
import playlix from '../Assets/playlix.png'


const Header = () => {
  const dispatch = useDispatch();
  const user =useSelector((store)=>store.user)
  const gpt =useSelector((store)=>store.gpt.showGptSearch)
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleGptName = useSelector((store)=>store.gpt.showGptSearch)
  const [test,setTest]=useState(null)
  const[fav,setFav]=useState(false)

  fav?document.body.style.overflow="hidden":document.body.style.overflow ="auto";
  
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop= window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
    window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

const signoutfn=()=>{
    signOut(auth).then(() => {
      if(gpt){
        dispatch(toggleGptView())
      }
      if(test === true){
        setTest(null)
      }
    }).catch((error) => {
      
    });
}
const toggleGpt =()=>{
  dispatch(toggleGptView())
}

const toggleLanguage=(e)=>{
  dispatch(changeLanguage(e.target.value));
}


useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const{email,uid,displayName,photoURL}=user;
    dispatch(addUser({email:email,uid:uid,displayName:displayName,photoURL:photoURL}))
    if(test === null){
      setTest(!test)
    }
    navigate("/browse")
    } else {
      dispatch(removeUser())
      navigate("/")
    }
  });
  // unsubscribe when component unmounts
  return ()=> unsubscribe();
},[])

const toggleFav=()=>{
  // dispatch(toggleGptView())
  setFav(!fav)
}
  
  return (
      <div>
        {fav?<MyFavourite fav={fav} setFav={setFav}/>:
        <header className={`fixed top-0 left-0 w-full h-[90px] z-10 transition duration-300 ease-in-out ${isScrolled === test? 'bg-gray-800' : ''}`}>
        <div className={user?'flex justify-between w-screen':'mt-0 sm:mt-0 lg:mt-5 2xl:mt-5 items-center'}>
          <div>
          <img className='w-36 h-24 ml-3 sm:ml-8 md:ml-14 2xl:ml-20' src={playlix} alt="" />
          </div>
          {user && <div className={`${isScrolled ? 'hidden lg:block 2xl:block':'hidden'} text-white`}>
          {!toggleGptName && <ul className='flex gap-8 lg:gap-4 lg:text-[12px] 2xl:text-[18px] 2xl:gap-10 items-center h-full'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>New Movies</li>
              <li className='cursor-pointer'>Old Movies</li>
              <li className='cursor-pointer'>Trending Movies</li>
              <li className='cursor-pointer'>Action Movies</li>
            </ul>}
            </div>}
          {user && <div className='flex gap-2 items-center text-white lg:pr-2 2xl:pr-5 mr-5'>
            <div className='flex items-center gap-3'>
            {toggleGptName ?<div className='mr-5'>
              <select className='bg-[#5dbea3] rounded-lg px-5 py-2 outline-none cursor-pointer' onChange={toggleLanguage}>
              {CHANGE_LANG.map((lang)=><option className='text-white' value={lang.identifier}>{lang.name}</option>)}
              </select>
            </div>:
            <div>
              <button onClick={toggleFav} className='bg-[#5dbea3] px-10 py-3 rounded-full font-medium'>My favourite</button>
            </div>}
            <div className='mr-10'>
              <button onClick={toggleGpt} className='bg-[#5dbea3] px-7 py-3 rounded-full font-medium'>{toggleGptName?"HomePage":"Gemini AI"}</button>
            </div>
          <h1 className='font-semibold text-2xl mr-5'>Hi {user.displayName}</h1>
          <div className='flex gap-2 items-center group relative'>
          <img className='w-10' src={profile_img} alt="" />
          <img className='w-3 h-3' src={arrow16} alt="" />
          <div className='absolute hidden group-hover:block top-[100%] right-[-20%] w-max bg-white bg-opacity-35 py-[18px] px-[22px] z-10 rounded-full'><button className='font-semibold text-white cursor-pointer' onClick={signoutfn}>signOut</button></div>
          </div>
          </div> </div>}
         </div>
         </header>
    }
         </div>
         )
}

export default Header;