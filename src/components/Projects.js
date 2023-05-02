import React from 'react'
import projectImg from "../assests/developer.png"
import { Outlet } from 'react-router-dom'
import { FcSettings } from 'react-icons/fc'
import razorpay from '../assests/projects/Razorpay.png'
import discord from '../assests/projects/Discord.png'
import portfolio from '../assests/projects/Portfolio.png'
import { ImLink } from 'react-icons/im'
import { AiOutlineGithub } from 'react-icons/ai'
export const Projects = () => {
  return (
    <div className='mt-10 '>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          <img src={projectImg} width={250}></img>
          <FcSettings className='animate-spinlow mt[-10px]' fontSize={35} />

          <h2 className='text-[50px] sm:text-[35px] flex flex-col items-center text-white font-firamono'>Recent Projects
            <div className='w-[50%] h-[2px] mb-5 bg-violet-200'>

            </div></h2>
          <div className='flex flex-col bg-blue-100 rounded-md min-w-[96vw]'>
            <div><h2 className='text-[40px] sm:text-[25px] font-sa font-bold mt-6 ml-6'>I. Razorpay landing page clone</h2></div>
            <div className='self-center  flex flex-col my-10  sm:w-[96%]'><img className='border-[8px] border-red-300' src={razorpay} width={750} />
              <div className='flex mt-5 px-2 justify-end min-w-[100%] gap-4'><p className=' text-blue-600 '><span className='text-red-400 font-semibold'>Tech Stack :</span> Html ,CSS ,  & Tailwind CSS</p><AiOutlineGithub fontSize={30} /><ImLink fontSize={30} /></div>
            </div>
            <div><h2 className='text-[40px] ml-4 font-sa font-bold  sm:text-[25px]'>II. Personal Portfolio website</h2></div>
            <div className='self-center my-10 font-sa   sm:w-[96%] '><img className='border-[8px] border-gray-700' src={portfolio} width={750} />
              <div className='flex mt-5 px-2 justify-end min-w-[100%] gap-4'><p className='text-blue-600 '><span className='text-red-400 font-semibold'>Tech Stack :</span> ReactJs, Html ,CSS , & Tailwind CSS ,STMP</p><AiOutlineGithub fontSize={30} /><ImLink fontSize={30} /></div>
            </div>
            <div><h2 className='text-[40px] ml-4 font-sa font-bold   sm:text-[25px]'>III. Discord landing page clone</h2></div>
            <div className='self-center my-10 sm:w-[96%] '><img className='border-[8px] border-red-300' src={discord} width={750} />
              <div className='flex mt-5 px-2 justify-end min-w-[100%] gap-4'><p className=' text-blue-600 '><span className='text-red-400 font-semibold'>Tech Stack :</span> Html ,CSS , & Tailwind CSS</p> <AiOutlineGithub fontSize={30} /><ImLink fontSize={30} /></div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}
