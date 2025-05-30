import React from 'react'
import Image from 'next/image'
import { rootImages } from '@/app/core/rootImages'
import { secondSectionData } from '@/app/data/data.components'

export const SecondSection = () => {
    const sectionData = secondSectionData
  return (
        <div className="lg:pt-32 ">
        <div className="mx-auto max-w-7xl px-3 lg:px-8">
               <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl text-white text-left lg:text-center font-bold tracking-tight text-pretty uppercase sm:text-5xl lg:text-balance">
        WHAT’S INCLUDED AT $500?
        </p>
      </div>
         </div>
         <div className='flex mx-auto place-content-center flex-col justify-center max-w-7xl p-5 w gap-3 lg:gap-10 '>
            {sectionData.map((item, index) => (
                <div key={index} className='flex flex-col lg:mx-auto justify-center'>
                    <p className='text-white'>{item.description}</p>
                    {item.options && item.options.length > 0 && (
                        <ul className='list-disc pl-5'>
                            {item.options.map((option, optionIndex) => (
                                <li key={optionIndex} className='text-white ml-2'>{option}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
            <div className='flex flex-col justify-center items-center gap-3'>
                <Image src={rootImages.bannerimg}  width={300} height={300} alt='second section image'/>
                   <p className='text-white text-xs'>**If after showing the proposed design there are major changes, we would need additional 24 hours.</p>
            </div>
         </div>
         </div>
  )
}
