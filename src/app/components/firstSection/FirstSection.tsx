import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { firstSectionInfoCard } from '@/app/data/data.components'

export const FirstSection = () => {
  const infocardData = firstSectionInfoCard

  return (
    <div className="pt-24">
         <div className="mx-auto max-w-7xl px-3 lg:px-8">
               <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl text-left text-white lg:text-center font-bold tracking-tight text-pretty uppercase sm:text-5xl lg:text-balance">
        You need a website that is:
        </p>
      </div>
         </div>
         <div className="mx-auto lg:mt-15 max-w-7xl flex flex-col p-4 lg:flex-row justify-center gap-2 ">
          {infocardData.map((data, index) => (
            <Card key={index}>
              <div className='flex flex-col p-1 gap-3 justify-center h-full'>
                    <p className="text-grayText text-2xl text-left tracking-tight text-pretty font-semibold lg:text-3xl lg:text-balance">
                     { data.title}
                    </p>
                      <p className="text-grayText text-lg text-left tracking-tight text-pretty font-semibold sm:text-xl lg:text-balance">
                    { data.description}
                    </p>
                     <p className="text-grayText text-xs text-left tracking-tight text-pretty  sm:text-sm lg:text-balance">
                    { data.paragraph} 
                    </p>
                    <Image width={250} height={250} className='mx-auto my-auto' src={data.image} alt="illustration" />
              </div>
             </Card>
          ))}
            </div>
         </div>
  )
}
