import React from 'react'

export default function Skill_container({ description, icones }) {
  const iconsList = Object.entries(icones);

  return (

    <div className='pb-4'>

      <div className='bg-white rounded-lg'>
        <div className='p-4 text-justify text-slate-500'>
          {description}
        </div>

        <div className=''>

          <div className='flex p-2 items-center justify-center'>

            {iconsList.map(([key, icone]) => (
              <div >

                <div className='text-2xl md:text-6xl lg:text-5xl  text-black'>{icone}</div>
                <div className=''>{key}</div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}
