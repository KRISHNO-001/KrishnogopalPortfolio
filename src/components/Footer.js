import React from 'react'
import {CiMail} from 'react-icons/ci'
export const Footer = () => {
  return (
    <div>
       <div className='flex justify-center mt-6 min-w-full min-h-max bg-violet-800'>
         
        <div className='flex items-center text-white gap-2'>
          <CiMail fontSize={35}/>
          <p className='text-white font-firamono text-lg'> spondhon3@gmail.com </p></div>
       </div>
    </div>
  )
}
