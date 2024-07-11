import React from 'react'
import { useState } from 'react'

function Head() {

  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex z-[20] justify-between fixed top-0 w-full  items-center min-[300px]:px-[--padx1] sm:px-[--padx] py-[1em] bg-[var(--bg)]'>
        <i className='fa-solid fa-bug text-3xl text-[--accent] animate-bounce'></i>
        <i onClick={handleNav} className='fa-solid fa-bars sm:hidden text-[--accent] text-4xl'></i>
        {
          nav ? 
          <>
          <nav className='sm:block  hidden'>
            <ul className='flex gap-[2.5em] text-[var(--text)]'>
                <li onClick={() => (window.scrollTo({top: 0, behavior : 'smooth'}))} className='text-[1em] items-center cursor-pointer hover:border-b-[2px] border-[--accent] roboto font-bold uppercase'>Home</li>
                <li onClick={() => (document.getElementById('proj').scrollIntoView({behavior : 'smooth',}))} className='flex gap-[.5em] text-[1em] items-center cursor-pointer hover:border-b-[2px] border-[--accent] roboto font-bold uppercase'>Projects <i className='fa-solid animate-bounce fa-caret-left text-[--accent]'></i></li>
                <li onClick={() => (document.getElementById('about').scrollIntoView({behavior : 'smooth',}))} className='text-[1em] items- cursor-pointer hover:border-b-[2px] border-[--accent] roboto font-bold uppercase'>About </li>
                <li onClick={() => (document.getElementById('foot').scrollIntoView({behavior : 'smooth',}))} className='flex items-center gap-[.5em] text-[1em] items- cursor-pointer hover:border-b-[2px] border-[--accent] roboto font-bold uppercase'>Contact <i className='fa-solid animate-bounce fa-caret-left text-[--accent]'></i></li>
                <li onClick={() => (document.getElementById('skill').scrollIntoView({behavior : 'smooth',}))} className='flex items-center gap-[.5em] text-[1em] items- cursor-pointer hover:border-b-[2px] border-[--accent] roboto font-bold uppercase'> Skills <i className='fa-solid animate-bounce fa-caret-left text-[--accent]'></i></li>
            </ul>
          </nav>
          </>

          :

          <>
            <nav className='h-screen  bg-[--accent] fixed top-0 w-full left-0'>
              <i onClick={handleNav} className='fa-solid active:scale-110 duration-[0.5s] fa-times text-4xl fixed right-0 mt-[.2em] mr-[.4em] text-[white] textSha'></i>
              <ul className='flex flex-col items-center justify-center gap-[2.5em] text-[--accent] h-screen'>
                  <li className='w-[200px] active:scale-110 flex duration-[.1s] rounded-[2em] shadow-lg shadow-black active:shadow-[#00000062] justify-center py-[1em] px-[1.5em] bg-white text-[1em] items- cursor-pointer roboto font-bold uppercase'>Home</li>
                  <li className='w-[200px] active:scale-110 flex duration-[.1s] rounded-[2em] shadow-lg shadow-black active:shadow-[#00000062] justify-center py-[1em] px-[1.5em] bg-white  items-center gap-[.5em] text-[1em] items- cursor-pointer roboto font-bold uppercase'>Projects <i className='fa-solid fa-caret-left text-[--accent]'></i></li>
                  <li className='w-[200px] active:scale-110 flex duration-[.1s] rounded-[2em] shadow-lg shadow-black active:shadow-[#00000062] justify-center py-[1em] px-[1.5em] bg-white text-[1em] items- cursor-pointer roboto font-bold uppercase'>About </li>
                  <li className='w-[200px] active:scale-110 flex duration-[.1s] rounded-[2em] shadow-lg shadow-black active:shadow-[#00000062] justify-center py-[1em] px-[1.5em] bg-white items-center gap-[.5em] text-[1em] items- cursor-pointer roboto font-bold uppercase'>Contact <i className='fa-solid fa-caret-left text-[--accent]'></i></li>
                  <li className='w-[200px] active:scale-110 flex duration-[.1s] rounded-[2em] shadow-lg shadow-black active:shadow-[#00000062] justify-center py-[1em] px-[1.5em] bg-white items-center gap-[.5em] text-[1em] items- cursor-pointer roboto font-bold uppercase'> Skills <i className='fa-solid fa-caret-left text-[--accent]'></i></li>
              </ul>
            </nav>
          </>
        }
    </div>
  )
}

export default Head