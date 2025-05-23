import React from 'react'
import { Card } from '../ui/card'

export const FirstSection = () => {
  return (
    <div className="py-24 sm:py-32">
         <div className="mx-auto max-w-7xl px-3 lg:px-8">
               <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl text-left lg:text-center font-bold tracking-tight text-pretty uppercase sm:text-5xl lg:text-balance">
        You need a website that is:
        </p>
      </div>
         </div>

         <div className="mx-auto flex flex-col p-4 lg:flex-row justify-center gap-2">
          <Card>
            <div className='flex flex-col p-1 gap-3 justify-center'>
                  <p className="text-grayText text-2xl text-left tracking-tight text-pretty font-semibold sm:text-5xl lg:text-balance">
                   Ready In A Blink
                  </p>
                    <p className="text-grayText text-lg text-left tracking-tight text-pretty font-semibold sm:text-5xl lg:text-balance">
                  Done in 7 days or get 50% back
                  </p>
                   <p className="text-grayText text-xs text-left tracking-tight text-pretty  sm:text-5xl lg:text-balance">
                  We move quickly so you can start selling, booking, or growing ASAP.
                  </p>
            </div>
           </Card>
            </div>
         </div>
  )
}
