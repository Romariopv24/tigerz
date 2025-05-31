import { rootImages } from '@/app/core/rootImages'
import Image from 'next/image'
import React from 'react'

export const SixthySection = () => {
  return (
    <div className="lg:pt-32">
         <div className="mx-auto max-w-7xl px-3 lg:px-8">
               <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl text-white text-left lg:text-center font-bold tracking-tight text-pretty uppercase sm:text-5xl lg:text-balance">
            Ready to Stand Out Online?
        </p>
           <p className="mt-5 text-lg text-white text-left lg:text-center tracking-tight text-pretty sm:text-5xl lg:text-balance">
                 Book your call so we can build your site fast and professionally!
        </p>
      </div>
        <Image width={600} height={600} alt='Caja' className='mt-2' src={rootImages.bannerimg}/>
    </div>
    </div>
  )
}
