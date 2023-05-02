import React from 'react'
import css from '../assests/stack/CSS.png'
import exprx from '../assests/stack/Express.png'
import nodejs from '../assests/stack/NodeJs.svg'
import html from '../assests/stack/HTML.png'
import js from '../assests/stack/Javascript.svg'
import Tailwind from '../assests/stack/Tailwind.png'
import git from '../assests/stack/Git.svg'
import github from '../assests/stack/Github.svg'
import mongodb from '../assests/stack/MongoDB.svg'
import react from '../assests/stack/React.png'
import redux from '../assests/stack/Redux.svg'
import mui from '../assests/stack/MaterialUI.svg'
import next from '../assests/stack/Next.svg'
import vercel from '../assests/stack/Vercel.svg'
import blob from '../assests/elements/blob vector.png'
export const Skills = () => {
  return (
    <div className=' bg-blue-100 flex sm:flex-col mt-20 sm:mt-[62px] items-center justify-around min-h-[100vh]' >
      <div className='max-w-[45%] sm:max-w-[80%] gap-6 space-y-5'>
        <h1 className='text-[40px] font-semibold font-firamono text-red-600 sm:pt-3 '>My Skills & Tech Stack</h1>
        <p className='text-[25px] sm:text-[15px]'> Typically, a  website  use a combination of front-end and back-end technologies to create a responsive and visually appealing user interface. For the front-end, I use
          HTML, CSS, Tailwind CSS  and JavaScript  also popular front-end framework
          ReactJs, NextJs and  for the back-end, I use languages like Node.js
          with a web framework like Express.js to handle
          server-side logic and data management. For Database I  prefer to use  MongoDB</p>
      </div>

      <div className='mt-20 sm:mt-10 sm:space-y-2 max-w-[45%] sm:min-w-[100%]'>
        <div className='flex flex-wrap  relative items-center justify-center  z-30 bg-blue-100 min-h-max px-5 sm:px-3 
        py-5 sm:py-2 space-y-5 sm:space-y-1 gap-8 sm:gap-5'>
          <img src={html} className='sm:w-[65px]' width={100} />
          <img src={css} className='sm:w-[65px]' width={100} />
          <img src={js} className='sm:w-[65px]' width={100} />
          <img src={exprx} className='sm:w-[65px]' width={100} />
          <img src={nodejs} className='sm:w-[65px]' width={100} />
          <img src={Tailwind} className='sm:w-[65px]' width={100} />
          <img src={git} className='sm:w-[65px]' width={100} />
          <img src={github} className='sm:w-[65px]' width={100} />
          <img src={mongodb} className='sm:w-[65px]' width={100} />
          <img src={react} className='sm:w-[65px]' width={100} />
          <img src={redux} className='sm:w-[65px]' width={100} />
          <img src={mui} className='sm:w-[65px]' width={100} />
          <img src={next} className='sm:w-[65px]' width={100} />
          <img src={vercel} className='sm:w-[65px]' width={100} />
          <div className='absolute z-[-1] animate-spinlow '>
            <img src={blob} width={200} />
          </div>

        </div>
      </div>

    </div>

  )
}
