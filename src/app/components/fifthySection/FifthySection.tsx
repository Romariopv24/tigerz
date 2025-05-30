import { fifthySectionData } from '@/app/data/data.components'
import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'

export const FifthySection = () => {
    const infocardData = fifthySectionData
  return (
    <div className="pt-6 lg:pt-32">
    <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl text-white text-left lg:text-center font-bold tracking-tight text-pretty uppercase sm:text-5xl lg:text-balance">
        Who is this for?
        </p>
      </div>
         </div>
                <div className="mx-auto lg:mt-15 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                  {infocardData.map((data, index) => (
                    <Card key={index}> 
                       <div className='flex flex-col p-1 gap-3 justify-center h-full'>
                     <p className='text-grayText text-xl text-left tracking-tight text-pretty font-semibold lg:text-2xl lg:text-balance'>{data.title}</p>
                       {data.points && data.points.length > 0 && (
                            <ul className='list-disc pl-5'>
                                {data.points.map((point, pointIndex) => (
                                    <li key={pointIndex} className='text-grayText ml-2 text-sm'>{point}</li>
                                ) )}
                            </ul>
                       )}
                       <Image width={250} height={250} className='mx-auto my-auto' src={data.image} alt="illustration" />
                     </div>
                    </Card>
                  ))}
                </div>
    </div>
  )
}
