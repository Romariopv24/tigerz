import React from 'react'
import { IconCheck } from './IconCheck'

export const FourthySection = () => {
  return (
    <div className="pt-15 lg:pt-32 ">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl text-white text-left lg:text-center font-bold tracking-tight text-pretty uppercase sm:text-5xl lg:text-balance">
      7 Day Countdown Starts When: 
        </p>
      </div>
         </div>
    <div className='flex flex-col lg:mx-auto justify-center max-w-7xl p-5 pt-5 w gap-5 lg:gap-10 '>
        {["Contract is signed.", "Deposit is paid.", "Project scoped is approved.", "All the assets are gathered."].map((item, index) => (
            <div key={index} className='flex flex-row lg:mx-auto lg:justify-center gap-3'>
                <IconCheck />
                <p className='text-white'>{item}</p>
            </div>
        ))}
    </div>
    </div>
  )
}
