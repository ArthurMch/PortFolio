import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { BsGithub } from 'react-icons/bs';
import Board from './Board';
import { useState } from "react";




export default function Project_Container({title, icones, description, image, lien, playable, fenetre}) {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <div className='max-w-md mx-auto text-center  size-full bg-white rounded-xl shadow-md 
                    overflow-hidden md:max-w-2xl  '>
    
    {playable && (
      <a href={lien} target='_blank' className='relative'>
      <FaPlay className='text-4xl absolute m-2'/></a>
     )} 
    {!playable &&(
      <a href={lien} target='_blank' className='relative'>
      <BsGithub className=' text-4xl absolute m-2'/></a>
    )} 
    
    
 <div className='md:flex items-center'>
   <div className='p-8'>
     <div className='uppercase tracking-wide text-sm ti-indigo-500 font-semibold'>

     {title}<br/>
     
     
     </div>
     <div className='flex items-center justify-center'>
     {icones}
     </div>
     <p className='mt-2 text-slate-500'>
     {description}
     </p>
   </div>
   <div className='md:shrink-0  pb-8 md:p-8 lg:p-8 flex justify-center'>
   {fenetre && (
      <button onClick={() => setIsVisible(!isVisible)} className=' absolute flex  mt-2 px-6 py-1 rounded-full animate-pulse bg-indigo-800 text-white'>Play me !</button>
     )} 
     {isVisible && <Board isVisible={isVisible} />}
     <img className='rounded-xl border-solid border-4 border-indigo-400' src={image} alt={toString(title)} width={150} height={150} />
   </div>
 </div>
 
</div>

  )
}

