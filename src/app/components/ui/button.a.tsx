import React from 'react'

interface ButtonALinkProps {
    text: string
    section: string
}

export const ButtonALink = ({text, section}: ButtonALinkProps) => {
  return (
        <a href={`#${section}`} className="rounded-2xl bg-buttonBg px-3.5 py-2.5 text-base text-white shadow-xl/20 hover:bg-[#B33F00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {text}
        </a>
  )
}
