import React, { useEffect } from 'react'
import myImage1 from "../assets/img1.png"
import myImage2 from "../assets/img4.png"
import Skill from './skill'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useActionData } from 'react-router-dom'

function Body() {

  useEffect(() => {
    document.title = "Israel's Portfolio"
  })

  const skillItems= [
      {
        h3: "Web design", 
        p: "I create websites designs with good functionality and responsive interfaces that is adaptable to devices of various screen sizes"
      },
      {
        h3: "Desktop GUI Development", 
        p: "I build desktop applications using python, applications that can serve as business inventroy systems, or Desktop GUI applications that run automated scripts on"
      }, 
      {
        h3: "Data Scraping", 
        p: "I specialize in creating executable scripts that Extract content from the web or run automated process on the web"
      },
  ]

  return (
    <>
      <section className='sm:px-[--padx] min-[300px]:px-[--padx1] flex items-center min-[300px]:h-[100vh] sm:h-screen justify-between'>
            <div className='flex gap-[0.5em] flex-col'>
              <p className='sm:text-xl min-[300px]:text-[1.2em] text-[--accent] font-bold roboto'>Hello!!</p>
              <h1 className='poppins sm:text-[3rem] min-[300px]:text-4xl text-[--text] line font-bold'><span><span className='sm:block'>I'm Israel</span> Shedrack</span></h1>
              <h2 className='sm:text-2xl min-[300px]:text-xl min-[300px]:text-nowrap text-[--text] roboto font-semibold'>A <span className='  '>Software Developer</span> with 4years of experience</h2>
              <p className='w-[50ch] sm:text-[--text] min-[300px]:w-[35ch] roboto text-xl'>Building Responsive interfaces for websites, along with developing automated scripts for data scraping</p>
              <button className='p-[1em] hover:bg-[--accentH] duration-[1s] rounded-[5px] px-[1.5em] bg-[--accent] w-[40%] text-white roboto font-semibold textxl'>Download CV</button>
            </div>
            <div className='p-[2em] sm:flex min-[300px]:hidden pr-[8em] items-center justify-center pb-[4em]'>
              <img src={myImage1} className='h-[500px] rounded-br-[8em]' alt="" />
            </div>
      </section>
      <section className='sm:h-[70vh] min-[300px]:h-[100vh] flex items-center justify-between min-[300px]:px-[--padx1] sm:px-[--padx]'>
        
        <div className='w-[50%] min-[300px]:hidden sm:block p-[2em]'>
          <img src={myImage2} className='h-[500px] rounded-bl-[4em] rounded-br-[1em] mb-[4em] object-cover' alt="" />
        </div>
        <div className='sm:w-[60%] min-[300px]:w-[100%] flex flex-col gap-[1em]'>
          <h2 className='text-4xl poppins font-bold text-[--accent]'>About Me</h2>
          <h3 className='text-xl roboto font-semibold text-[--text]'>More than 4years programming Experienced</h3>
          <p className='italic roboto text-[--text]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur laborum alias libero incidunt itaque, ducimus aspernatur dicta modi a adipisci exercitationem quod suscipit error optio sapiente et! Vel, eaque ab.</p>
          <div className='grid grid-cols-2 grid-rows-2 gap-[1em] mt-[1em]'>
            <p className='roboto text-[--text]'><span className='text-[--accent] font-bold poppins'>Name:</span> Israel Shedrack</p>
            <p className='roboto text-[--text]'><span className='text-[--accent] font-bold poppins'>Email:</span> israelshedrack913@gmail.com</p>
            <p className='roboto text-[--text]'><span className='text-[--accent] font-bold poppins'>Location:</span> Nigeria, Rivers State, Bonny Island</p>
            <p className='roboto sm:text-nowrap'><span className='text-[--accent] font-bold poppins'>Contacts:</span> Facebook, Linkedin, whatsapp, email</p>
          </div>
          <div className='p-[1em] pl-0 flex items-center justify-between'>
          <button className='p-[1em] text-nowrap rounded-[5px] hover:bg-[--accentH] duration-[1s] px-[1.5em] bg-[--accent] w-[40%] text-white roboto font-semibold textxl'>Download CV</button> 
          <div className='flex gap-[.5em]'>
            <span className='poppins text-nowrap font-bold text-[--accent] text-xl'>Follow me:</span> <div className='flex gap-[.5em] items-center'>
              <i className='fa-brands animate-pulse hover:scale-125 duration-[0.5s] text-xl fa-facebook text-blue-600'></i>
                          <i className='fa-brands animate-pulse hover:scale-125 duration-[0.5s] text-xl fa-linkedin text-blue-600'></i>
                          <i className='fa-brands animate-pulse hover:scale-125 duration-[0.5s] text-xl fa-x-twitter text-black'></i>
                          <i className='fa-brands animate-pulse hover:scale-125 duration-[0.5s] text-xl fa-whatsapp text-green-600'></i>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className='gap-[1.5em] justify-center sm:py-[2em] sm:px-[--padx] min-[300px]:px-[--padx1] flex flex-col items-center sm:h-[70vh] min-[300px]:h-auto'>
        <h2 className='text-xl roboto font-semibold'>My Expertise</h2>
        <h3 className='capitalize text-3xl min-[300px]:text-center text-[--accent] font-semibold poppins'>Awesome Services for you</h3>
        <div className='flex sm:gap-[5em] min-[300px]:w-full min-[300px]:gap-[2em] sm:flex-row min-[300px]:flex-col'>{skillItems.map(skill => (<Skill h3={skill.h3} p={skill.p} />))}</div>
      </section>
      <section className='h-auto min-[300px]:py-[6em] sm:py-[4em] justify-between flex sm:flex-row min-[300px]:flex-col min-[300px]:px-[--padx1] sm:p-[--padx] items-center'>
        <div className='sm:w-[50%] min-[300px]:w-[100%] '>
          <h2 className='text-xl sm:text-left font-semibold text-[--text] uppercase min-[300px]:text-center'>Skill Set</h2>
          <h3 className='text-2xl min-[300px]:text-center sm:text-left text-[--accent] min-[300px]:text-wrap font-bold capitalize poppins sm:text-nowrap'>Creative and professional skills experience on few areas</h3>
          <p className='roboto italic sm:text-left min-[300px]:text-center'>Check out some the skills i use in solving various tech related problems. <span className='sm:block'>This also includes my areas of specialization in these respective disciplines.</span> I have experience dealing with HTML, CSS/SCSS, Tailwindcss, Javascript, Reactjs and Python programming</p>
        </div>
        <div className='sm:w-[60%] sm:block min-[300px]:hidden'>
          <ul>
          <Swiper 
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop = {true}
            autoplay = {{delay: 3500}}
            navigation
            pagination = {{clickable: true}}
            className='w-[50%] mr-[0.01em] class1 relative'
            >
              <SwiperSlide>
                <li className=''>
                  <h4 className='text-[--accent] font-bold text-xl'>Python programming</h4>
                  <p className='roboto italic'>Selenium: for scraping</p>
                  <p className='roboto italic'>PySimpleGUI: for GUI Development</p>
                  <p className='roboto italic'>pygame: for 2d game Development</p>
                  <p className='roboto italic'>sockets: for backend development</p>
                </li> 
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <h4 className='text-[--accent] font-bold text-xl'>Web design</h4>
                  <p>HTML, CSS/SCSS & Tailwindcss: for design</p>
                  <p>Javascript: Frontend design and functionality</p>
                  <p>Reactjs: for frontend design and responsiveness</p>
                </li> 
              </SwiperSlide>
        </Swiper>
            
          </ul>
        </div>
        <div className='mt-[2em] sm:hidden min-[300px]:block'>
          <ul className='flex justify-between'>
              <li className=''>
                <h4 className='text-[--accent] font-bold text-[1em]'>Python programming</h4>
                <p className='roboto italic list-decimal'><span className='font-bold'>Selenium:</span> for scraping</p>
                <p className='roboto italic'><span className='font-bold'>PySimpleGUI:</span> for GUI Development</p>
                <p className='roboto italic'><span className='font-bold'>Pygame:</span> for 2d game Development</p>
                <p className='roboto italic'><span className='font-bold'>Sockets:</span> for backend development</p>
              </li> 
              <li className='min-[300px]:w-[80%]'>
                  <h4 className='text-[--accent] font-bold text-[1em]'>Web design</h4>
                  <p><span className='font-bold'>HTML, CSS/SCSS & Tailwindcss:</span> for website design</p>
                  <p><span className='font-bold'>Javascript:</span> Frontend design and functionality</p>
                  <p><span className='font-bold'>Reactjs:</span> for frontend design and responsiveness</p>
                </li> 
          </ul>
        </div>

      </section>
    </>
  )
}

export default Body
