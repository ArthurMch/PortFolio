import React from 'react'

export default function cube({title, icones, description, image, lien}) {


  return (
    <a href={lien} target='_blank'>
    <div className='max-w-md mx-auto text-center  size-full bg-white rounded-xl shadow-md 
                    overflow-hidden md:max-w-2xl hover:animate-pulse cursor-pointer'>
 <div className='md:flex items-center'>
   <div className='p-8'>
     <div className='uppercase tracking-wide text-sm ti-indigo-500 font-semibold'>
     {title}
     </div>
     <div className='flex items-center  justify-center'>
     {icones}
     </div>
     <p className='mt-2 text-slate-500'>
     {description}
     </p>
   </div>
   <div className='md:shrink-0  pb-8 md:p-8 lg:p-8 flex justify-center'>
     <img className='rounded-xl border-solid border-4 border-indigo-400' src={image} alt={toString(title)} width={150} height={150} />
   </div>
 </div>
</div>
</a>
  )
}


// import React from 'react'

// export default function cube(title, [icones], description, image) {
//   return (
//     <div className='max-w-md mx-auto text-center  bg-white rounded-xl shadow-md 
// overflow-hidden md:max-w-2xl hover:animate-pulse cursor-pointer'>
//  <div className='md:flex items-center'>
//    <div className='p-8'>
//      <div className='uppercase tracking-wide text-sm ti-indigo-500 font-semibold'>
//      {title}
//      </div>
//      <div className='flex items-center justify-center'>
//        {[icones]}
//      </div>
//      <p className='mt-2 text-slate-500'>
//      {description}
//      </p>
//    </div>
//    <div className='md:shrink-0 p-5 flex justify-center'>
//      <img className='rounded-xl border-solid border-4  border-indigo-400 ' src={image} alt='Enigma' width={150} height={150} />
//    </div>
//  </div>
// </div>
//   )
// }

