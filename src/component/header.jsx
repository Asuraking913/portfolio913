import React from 'react'

function Head() {
  return (
    <div className='flex justify-between fixed top-0 w-full items-center px-[--padx] py-[1em] bg-[var(--bg)]'>
        <i className='fa-solid fa-bug text-3xl text-[--accent]'></i>
        <nav>
          <i ></i>
            <ul className='flex gap-[2.5em] text-[var(--text)]'>
                <li className='text-[1em] items- cursor-pointer roboto font-bold uppercase'>Home</li>
                <li className='flex items-center gap-[.5em] text-[1em] items- cursor-pointer roboto font-bold uppercase'>Projects <i className='fa-solid fa-caret-left text-[--accent]'></i></li>
                <li className='text-[1em] items- cursor-pointer roboto font-bold uppercase'>About </li>
                <li className='flex items-center gap-[.5em] text-[1em] items- cursor-pointer roboto font-bold uppercase'>Contact <i className='fa-solid fa-caret-left text-[--accent]'></i></li>
                <li className='flex items-center gap-[.5em] text-[1em] items- cursor-pointer roboto font-bold uppercase'> Skills <i className='fa-solid fa-caret-left text-[--accent]'></i></li>
            </ul>
        </nav>
    </div>
  )
}

export default Head