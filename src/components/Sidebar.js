import React from 'react'
import { NavLink } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx'
export const Sidebar = ({ sidebar, setsidebar }) => {
    function hideSidebar() {

        setsidebar(false);

    }
    return (
        <div className={`h-screen  ${sidebar === true ? 'w-[85%]' : 'w-[0]'} sm:block hidden  bg-white bg-opacity-80 fixed top-0 z-50 `}>
            <div>
                <button onClick={hideSidebar} className='absolute right-1 top-2'>
                    <RxCross2 fontSize={40} /></button>
            </div>
            <div className={`${sidebar === true ? 'block' : 'hidden'} mt-20  `}>
                <ul className='flex flex-col items-center  gap-6'>
                    <li className='border-black'>
                        <NavLink to="/" className='font-sa text-2xl'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className='font-sa text-2xl' >Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className='font-sa text-2xl' >Skills</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
