import React from 'react'
import myImage1 from "../assets/img1.png"
import myImage2 from "../assets/img4.png"

function Body() {
  return (
    <>
      <section className='px-[--padx] flex items-center h-screen justify-between'>
            <div className='flex gap-[0.5em] flex-col'>
              <p className='text-xl text-[--accent] font-bold roboto'>Hello!!</p>
              <h1 className='poppins text-[3rem] text-[--text] line font-bold'><span><span className='sm:block'>I'm Israel</span> Shedrack</span></h1>
              <h2 className='text-2xl text-[--text] roboto font-semibold'>A Software Developer with 4years of expeience</h2>
              <p className='w-[50ch] text-[--text] roboto text-xl'>Building Responsive interfaces for websites, along with developing automated scripts for data scraping</p>
              <button className='p-[1em] hover:bg-[--accentH] duration-[1s] rounded-[5px] px-[1.5em] bg-[--accent] w-[40%] text-white roboto font-semibold textxl'>Download CV</button>
            </div>
            <div className='p-[2em] pr-[8em] flex items-center justify-center pb-[4em]'>
              <img src={myImage1} className='h-[500px] rounded-br-[8em]' alt="" />
            </div>
      </section>
      <section className='h-[40vh] flex items-center justify-between px-[--padx]'>
        
        <div className='w-[50%] p-[2em]'>
          <img src={myImage2} className='h-[500px] rounded-bl-[4em] rounded-br-[1em] mb-[4em] object-cover' alt="" />
        </div>
        <div className='w-[60%]'>
          <h2 className='text-4xl poppins font-bold text-[--accent]'>About Me</h2>
          <h3 className='text-xl roboto font-semibold text-[--text]'>More than 4years programming Experienced</h3>
          <p className='italic roboto text-[--text]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur laborum alias libero incidunt itaque, ducimus aspernatur dicta modi a adipisci exercitationem quod suscipit error optio sapiente et! Vel, eaque ab.</p>
          <div className='grid grid-cols-2 grid-rows-2 gap-[1em] mt-[1em]'>
            <p className='roboto text-[--text]'><span className='text-[--accent] font-bold poppins'>Name:</span> Israel Shedrack</p>
            <p className='roboto text-[--text]'><span className='text-[--accent] font-bold poppins'>Email:</span> israelshedrack913@gmail.com</p>
            <p className='roboto text-[--text]'><span className='text-[--accent] font-bold poppins'>Location:</span> Nigeria, Rivers State, Bonny Island</p>
            <p className='roboto text-nowrap'><span className='text-[--accent] font-bold poppins'>Contacts:</span> Facebook, Linkedin, whatsapp, email</p>
          </div>
          <div className='p-[1em] pl-0 flex items-center justify-between'>
          <button className='p-[1em] rounded-[5px] hover:bg-[--accentH] duration-[1s] px-[1.5em] bg-[--accent] w-[40%] text-white roboto font-semibold textxl'>Download CV</button> 
          <div className='flex gap-[.5em]'>
            <span className='poppins font-bold text-[--accent] text-xl'>Follow me:</span> <div className='flex gap-[.5em] items-center'>
              <i className='fa-brands text-xl fa-facebook text-blue-600'></i>
                          <i className='fa-brands text-xl fa-linkedin text-blue-600'></i>
                          <i className='fa-brands text-xl fa-x-twitter text-black'></i>
                          <i className='fa-brands text-xl fa-whatsapp text-green-600'></i>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Body