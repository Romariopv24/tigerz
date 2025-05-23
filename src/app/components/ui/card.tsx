import React from 'react'

interface CardProps {
    children: React.ReactNode;
}

export const Card = ({children}: CardProps) => {
  return (
  <div
      className={`w-full rounded-xl bg-white border-2 border-buttonBg p-3`}
    >
      {children}
    </div>
  )
}
