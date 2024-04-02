import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/AmeyLogo.png'

function Navbar() {
    const[bgCol, setBgCol] = useState("#252525")
  return (
    <nav className={`w-full flex justify-between px-1 sm:px-2 h-16 items-center z-10 relative text-white`} style={{backgroundColor:`${bgCol}`}}>
        <div className='w-2/12 sm:w-6/12 flex items-center sm:gap-10 h-full'>
            <img src={logo} alt="" className='h-full'/>
            <h3 className='text-sm sm:text-xl font-bold text-[#2f6294]' >FloodMatrix</h3>
        </div>
        <div className='w-7/12 text-sm sm:w-6/12 flex justify-around '>
            <NavLink
            to={'/'}
            className={({isActive})=> isActive ? `text-[#2f6294] sm:text-xl ` :null }>
                Home
            </NavLink>
            <NavLink
            to={'/about'}
            className={({isActive})=> isActive ? `text-[#2f6294] sm:text-lg`:null } >
                About
            </NavLink>
            <NavLink
            to={'/contact'}
            className={({isActive})=> isActive ? `text-[#2f6294] sm:text-lg`:null } >
                Contact us
            </NavLink>
            <NavLink
            to={'/login'}
            className={({isActive})=> isActive ? `text-[#2f6294] sm:text-lg`:null } >
                Login
            </NavLink>
            <NavLink
            to={'/signup'}
            className={({isActive})=> isActive ? `text-[#2f6294] sm:text-lg`:null } >
                Signup
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar