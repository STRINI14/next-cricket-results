import React from 'react';
import { MdSportsCricket } from "react-icons/md";
import Image from 'next/image'
import india from '../../public/india.jpeg'
import india2 from '../../public/india-2.jpeg'



export default function Navbar() {
  return (
    <div className='bg-cyan-900 h-[240px] justify-between w-[100%] flex'>
      <div className='text-white text-3xl pt-8 pl-7 font-mono flex'>Cricket Results<MdSportsCricket /></div>
      <Image src= {india} alt="photo" width={400} style="display: flex"/>
      <Image className='flex m-2 pr-8' src= {india2} alt="photo" width={400} style="display: flex"/>
    </div>
  )
}

 
