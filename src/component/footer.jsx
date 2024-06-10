import React from 'react'

function Foot() {
  return (
    <section className='bg-[--accent] sm:h-[45vh] min-[300px]:h-[60vh] py-[4em] flex flex-col justify-center items-center gap-[2em]'>
        <h2 className='text-[2.6rem] poppins text-center text-white font-bold'>Contact me</h2>
        <ul className='sm:grid min-[300px]:flex min-[300px]:flex-wrap justify-center min-[300px]:gap-[3em] grid-cols-3  place-items-center'>
            <li>
                <div className='text-center'>
                    <p className='sm:text-xl min-[300px]:text-[1em] roboto font-semibold text-white'> <i className='fa-solid fa-phone text-white mr-[1em]'></i>Call Us On</p> 
                    <p className='text-white roboto'>09035165510</p>
                </div>
            </li>
            <li>
                <div className='text-center'>
                    <p className='text-white min-[300px]:text-[1em] roboto font-bold'><i className='fa-solid fa-envelope text-white mr-[1em]'></i>Email Me At</p> 
                    <p className='text-white roboto'>israelshedrack913@gmail.com</p>
                </div>
            </li>
            <li>
                <div className='text-center'>
                    <p className='text-white min-[300px]:text-[1em] roboto font-bold'><i className='fa-regular fa-flag text-white mr-[1em]'></i>Location</p>
                    <p className='text-white roboto'>Nigeria, Rivers State, Bonny Islands</p>
                </div>
            </li>
        </ul>
        <a href="#email:israelshedrack913" className='bg-white sm:p-[1em] min-[300px]:p-[0.5em] sm:px-[1.5em] min-[300px]:px-[1em] rounded-[5px] text-[--accent] roboto font-semibold border-2 hover:border-[--accent] text-xl'>Send me a Mail</a>
    </section>
  )
}

export default Foot