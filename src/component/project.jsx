import React from 'react'

function Proje({img, h3, p, skill}) {
  return (
    <div className='sm:w-[100%] min-[300px]:w-[95%] duration-[0.5s] flex flex-col gap-[1em]'>
        <img src={img} className='w-full' alt="Image" />
        <h3 className='sm:text-2xl min-[300px]:text-[1em] capitalize poppins text-[--accent] font-bold'>{h3}</h3>
        <p className='roboto italic'>{p}</p>
        <div className='flex items-center justify-between'>
            <p className='roboto text-[1em]'>Built with: {skill}</p>
            <a href="" className='text-[--accent] font-bold border-b-2 border-b-[--accent]'>Read More...</a>
        </div>
    </div>
  )
}

export default Proje