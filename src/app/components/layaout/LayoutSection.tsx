import { rootImages } from '@/app/core/rootImages'
import Image from 'next/image'
import { MobileMenu } from './MobileMenu'
import { ButtonALink } from '../ui/button.a'

export const LayoutSection = () => {
  return (
     <section>
      <div className='flex flex-col lg:flex-row justify-center gap-9 lg:gap-0 items-center'>
        <div>
          <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5 flex flex-row align-center items-center gap-x-2.5">
                  <Image width={120} height={120} src={rootImages.logo} alt="Tigerz" />
                </a>
              </div>
              
              <MobileMenu />
              <div className="hidden lg:flex lg:gap-x-12">
                <a href="#about" className="text-base font-semibold text-white">About Me</a>
                <a href="#skills" className="text-base font-semibold text-white">Skills</a>
                <a href="#projects" className="text-base font-semibold text-white">Projects</a>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#contact" className="text-base font-semibold text-white">Contact <span aria-hidden="true">&darr;</span></a>
              </div>
            </nav>
          </header>

          <div className="relative isolate px-3 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl max-h-1/2 pt-32  lg:py-56">
              <div className="text-left">
                <h1 className="font-bold uppercase tracking-tight text-4xl md:text-5xl lg:text-7xl">
                  Get a Custom-Built Website in Just 7 Days
                </h1>
                <p className="mt-8 text-pretty text-sm">Or... We give you 50% back</p>
                <div className="mt-10 flex items-left justify-start gap-x-6">
                  <ButtonALink text={"Let's do it!"} section={'about'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Image width={600} height={600} src={rootImages.bannerimg} alt="Hero image" /> 
        </div>
      </div>
    </section>
  )
}
