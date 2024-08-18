import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='text-white py-[30px] px-[4%] max-w-[1000px] my-0 mx-auto'>
        <div className='flex gap-10 md:gap20 my-5 md:my-10 justify-center'>
        <IoLogoYoutube size={30} className='cursor-pointer'/>
        <FaXTwitter size={30} className='cursor-pointer'/>
        <FaInstagram size={30} className='cursor-pointer'/>
        <FaFacebookSquare size={30} className='cursor-pointer'/>
        </div>
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-[8px] md:gap-8 mb-4 md:mb-8 text-[12px] md:text-[18px] ml-10 md:ml-0'>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
        <p className='flex items-center text-gray-400 ml-7 md:ml-0 text-[11px] md:text-[14px]'><BiCopyright size={17}/> 1997-2024 PlayLix, Inc.</p>
    </div>
  )
}

export default Footer
