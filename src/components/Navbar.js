import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import {TiSocialLinkedin,TiSocialFacebook,TiSocialInstagram,TiSocialGithub} from 'react-icons/ti'
import {FaDiscord} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'

import {SiGeeksforgeeks} from "react-icons/si"
import {VscThreeBars} from "react-icons/vsc"
export const Navbar = ({setsidebar,sidebar}) => {
    function showSidebar()
    {
            setsidebar(true);
    }
    
    return (
        <div className='mt-0 relative z-50'>
            <div className='flex w-full justify-around sm:justify-between bg-violet-500 fixed pt-6 sm:pt-4 pb-4 sm:pb-2  shadow-md'>
                <div>
                    <button onClick={showSidebar} className='sm:block hidden pl-2 '><VscThreeBars fontSize={35}/></button>
                </div>
                <div className=' sm:hidden '>
                    <h3 className='font-logo text-[28px] text-white' > Krishno Gopal Das </h3>
                </div>
                <div className=' sm:hidden block'>
                    <ul className='flex justify-around gap-10 text-[20px]'>
                        <li className='font-sa text-2xl hover:text-violet-100'>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li className='font-sa text-2xl hover:text-violet-100'>
                            <NavLink to="/projects" >Projects</NavLink>
                        </li>
                        <li  className='font-sa text-2xl hover:text-violet-100'>
                            <NavLink  to="/skills" >Skills</NavLink>
                        </li>

                    </ul>
                </div>

                <div className='flex items-center sm:bg-violet-300 rounded-full border border-violet-400 px-2 mr-[5px]  sm:gap-2 gap-5'>
                    <Link  className='font-sa text-2xl hover:text-violet-100 transition-all duration-200' to='https://www.linkedin.com/in/krishno-gopal-das-125133154/'><TiSocialLinkedin className='sm:w-[30px]' fontSize={35}/></Link>
                    
                    <Link   className='font-sa text-2xl hover:text-violet-100 transition-all duration-200' to='https://auth.geeksforgeeks.org/user/spondhon3/'>
                        <SiGeeksforgeeks className='font-sa text-2xl hover:text-violet-100 transition-all duration-200 sm:w-[30px]' fontSize={55}/></Link>
                    <TiSocialInstagram  className='sm:w-[30px] font-sa text-2xl hover:text-violet-100 transition-all duration-200'  fontSize={45}/>
                    <Link  className='font-sa text-2xl hover:text-violet-100 transition-all duration-200' to='https://github.com/KRISHNO-001'>
                        <AiOutlineGithub className='sm:w-[30px]  font-sa text-2xl hover:text-violet-100 transition-all duration-200' fontSize={45}/>
                        </Link>
                    <FaDiscord  className='sm:w-[30px]  font-sa text-2xl hover:text-violet-100 transition-all duration-200' fontSize={45}/>
                </div>
            </div>

        </div>
    )
}
