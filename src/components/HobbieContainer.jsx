import React from 'react'

export default function HobbieContainer({title, description, image}) {
  return (
    <div className='max-w-md mx-auto text-center   rounded-xl shadow-md 
    overflow-hidden md:max-w-2xl cursor-pointer m-8 px-4  border-solid border border-x-white bg-indigo-800'>


 <div className='md:flex items-center p-8'>

    <div className='pb-8 uppercase tracking-wide text-indigo-50 font-semibold text-lg'>
     {title}
     </div> 

    <div className='md:shrink-0  pb-8 md:p-8 lg:p-4 flex justify-center'>
     <img className='rounded-xl border-solid border-4 border-indigo-400' src={image} alt={toString(title)} width={250} height={250} />
    </div>

   <p className='mt-2 text-slate-300 content-center'>
     {description}
     </p>
   
 </div>



</div>
  )
}
