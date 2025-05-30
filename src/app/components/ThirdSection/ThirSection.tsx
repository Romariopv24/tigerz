import { thirdSectionData } from '@/app/data/data.components'
import React from 'react'
import { Card } from '../ui/card'
import { ButtonALink } from '../ui/button.a'

export const ThirSection = () => {
    const infocardData = thirdSectionData
  return (
    <div className="lg:pt-32">
    <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl text-white text-left lg:text-center font-bold tracking-tight text-pretty uppercase sm:text-5xl lg:text-balance">
        HOW IT WORKS?
        </p>
      </div>
         </div>
       <div className="mx-auto lg:mt-15 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
  {infocardData.map((data, index) => (
    <Card key={index}>
      <div className='flex flex-row p-1 gap-2 justify-center h-full'>
        <div className='flex flex-col justify-center w-1/5 '>
          <p className='text-black text-8xl font-bold text-pretty uppercase p-1 lg:p-2 flex items-center justify-center'>
            {data.number}
          </p>
        </div>
        <div className='flex flex-col w-4/5 p-1 gap-1 justify-center'>
          <p className="text-grayText text-lg text-left tracking-tight text-pretty font-bold lg:text-3xl lg:text-balance">
            {data.title}
          </p>
          <p className="text-grayText text-sm text-left tracking-tight text-pretty font-semibold sm:text-xl lg:text-balance">
            {data.description}
          </p>
        </div>
      </div>
    </Card>
  ))}
</div>
            <div className='w-32 mt-4 mx-auto'>
            <ButtonALink text={"Book now!"} section={'about'}/>
            </div>
    </div>
  )
}
