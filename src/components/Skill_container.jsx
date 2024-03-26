import React from 'react'

export default function Skill_container({description, skillsList, image}) {

 
  return (

    <div>
        <div className='grid justify-items-center rounded-xl p-4 bg-black'>
          <h1 className='text-3xl text-white'>Skills</h1>
      </div>

    <div className='p-4 text-indigo-400'>
        {description}
    </div>


    </div>
  )
}
