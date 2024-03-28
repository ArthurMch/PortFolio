import React from 'react'

export default function Skill_container({description, icones}) {
  const iconsList = Object.entries(icones);
 
  return (

    <div>
        <div className='grid justify-items-center rounded-xl p-4 bg-black'>
          <h1 className='text-3xl text-white'>Skills</h1>
        </div>

    <div className='p-4 text-indigo-400'>
        {description}
    </div>

    <div className=''>

      <div className='flex flex-grid grid-cols- items-center justify-center'>

        {iconsList.map(([key, icone]) => (
        <div >
          
          <div className='text-2xl md:text-6xl lg:text-8xl  text-black'>{icone}</div>
          <div className=''>{key}</div>

        </div>
          ))}
      </div>
      
    </div>


    </div>
  )
}
