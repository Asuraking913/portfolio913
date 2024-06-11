import React, { useEffect } from 'react'
import myImage1 from "../assets/img1.png"
import myImage2 from "../assets/img4.png"
import Skill from './skill'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import reactImg from "../assets/react.svg"
import pyImg from "../assets/py.png"
import myImage3 from "./../assets/chef.jpg"
import myImage4 from "./../assets/bank.jpg"
import myImage5 from "./../assets/asura.jpg"
import myImage6 from "./../assets/asura_web.jpg"
import Proje from './project'
import Foot from './footer'

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

  const projectItems = [
    {
      img: myImage3,
      h3: "Chefgods restaurant website", 
      skill: "HTML, CSS/SCSS",
      p: "A responsive two paged Restaurant website for, highly responsive for various devices"
    },
    {
      img: myImage4,
      h3: "Banking Site landing page", 
      skill: "Reactjs, Tailwindcss",
      p: "A simple landing page website for a bank, responsive for both mobile and Desktop views"
    }, 
    {
      img: myImage5,
      h3: "AsuraSwift Desktop application", 
      skill: "Python, PySimpleGUI, sockets",
      p: "A Desktop application to transfer files betweeen two computers via a wifi connection"
    },
    {
      img: myImage6,
      h3: "AsuraSwift Website", 
      skill: "Reactjs, Tailwindcss",
      p: "A Website to download my Desktop application for both windows and Linux based operating systems"
    }
  ]

  return (
    <>
      <section className='sm:px-[--padx] min-[300px]:px-[--padx1] flex items-center min-[300px]:h-[100vh] sm:h-screen justify-between'>
            <div className='flex gap-[0.5em] flex-col'>
              <p className='sm:text-xl min-[300px]:text-[1.2em] text-[--accent] font-bold roboto'>Hello!!</p>
              <h1 className='poppins sm:text-[3rem] min-[300px]:text-4xl text-[--text] line font-bold'><span><span className='sm:block'>I'm Israel</span> Shedrack</span></h1>
              <h2 className='sm:text-2xl min-[300px]:text-wrap min-[300px]:text-xl text-[--text] roboto font-semibold'>A <span className='  '>Software Developer</span> with 4years of experience</h2>
              <p className='w-[50ch] sm:text-[--text] min-[300px]:w-[35ch] roboto text-xl min-[300px]:text-[1.1em]'>Building Responsive interfaces for websites, along with developing automated scripts for data scraping</p>
              <button className='p-[1em] hover:bg-[--accentH] duration-[1s] rounded-[5px] px-[1em] bg-[--accent] w-[40%] text-white roboto font-semibold textxl'>Download CV</button>
            </div>
            <div className='p-[2em] relative sm:flex min-[300px]:hidden pr-[8em] items-center justify-center pb-[4em]'>
              <img src={myImage1} className='h-[520px] rounded-br-[8em]' alt="" />
            </div>
      </section>
      <section className='sm:h-[70vh] min-[300px]:h-[full] flex items-center justify-between min-[300px]:px-[--padx1] sm:px-[--padx]'>
        
        <div className='w-[50%] min-[300px]:hidden sm:block p-[2em]'>
          <img src={myImage2} className='h-[500px] rounded-bl-[4em] rounded-br-[1em] mb-[4em] object-cover' alt="" />
        </div>
        <div className='sm:w-[60%] min-[300px]:w-[100%] flex flex-col gap-[1em]'>
          <h2 className='text-4xl min-[300px]:text-3xl poppins font-bold text-[--accent]'>About Me</h2>
          <h3 className='text-xl roboto font-semibold text-[--text]'>More than 4years programming Experienced</h3>
          <p className='italic roboto text-[--text]'>I am a software developer with 4years of experience creating websites with responsive interfaces, i specialize in using HTML CSS/SCSS Tailwindcss, Javascript and Reactjs to develop websites with that are responsive and can adapt to various devices. I am also a python developer who specializes in writing scripts for automation process or data scraping. I also build use python to build Desktop GUI applications for business inventory systems and lots more</p>
          <div className='grid grid-cols-2 grid-rows-2 gap-[1em] min-[300px]: mt-[1em]'>
            <p className='roboto text-[--text]'><span className='text-[--accent] font-bold poppins'>Name:</span> Israel Shedrack</p>
            <p className='roboto text-[--text]'><span className='text-[--accent] font-bold poppins'>Email:</span> israelshedrack913<span className='min-[300px]:block'>@gmail.com</span></p>
            <p className='roboto text-[--text]'><span className='text-[--accent] font-bold poppins'>Location:</span> Nigeria, Rivers State, Bonny Island</p>
            <p className='roboto sm:text-nowrap'><span className='text-[--accent] font-bold poppins'>Contacts:</span> Facebook, Linkedin, whatsapp, email</p>
          </div>
          <div className='p-[1em] pl-0 flex items-center justify-between'>
          <button className='sm:p-[1em] min-[300px]:p-[1em] min-[300px]:px-[.8em] text-nowrap rounded-[5px] hover:bg-[--accentH] duration-[1s] sm:px-[1.5em] bg-[--accent] w-[40%] text-white roboto font-semibold textxl'>Download CV</button> 
          <div className='flex gap-[.5em] min-[300px]:flex-col'>
            <span className='poppins min-[300px]:block text-nowrap font-bold text-[--accent] text-xl'>Follow me:</span> <div className='flex gap-[.5em] items-center'>
              <i className='fa-brands animate-pulse hover:scale-125 duration-[0.5s] text-[1.1em] fa-facebook text-blue-600'></i>
                          <i className='fa-brands animate-pulse hover:scale-125 duration-[0.5s] hover:animate-none text-[1.1em] fa-linkedin text-blue-600'></i>
                          <i className='fa-brands animate-pulse hover:animate-none hover:scale-125 duration-[0.5s] text-[1.1em] fa-x-twitter text-black'></i>
                          <i className='fa-brands animate-pulse hover:animate-none hover:scale-125 duration-[0.5s] text-[1.1em] fa-whatsapp text-green-600'></i>
                          <i className='fa-brands animate-pulse hover:scale-125 duration-[0.5s] text-[1.1em] fa-github text-[--text] hover:animate-none'></i>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className='gap-[1.5em] sm:py-[2em] sm:px-[--padx] min-[300px]:px-[--padx1] flex flex-col sm:h-[80vh] min-[300px]:h-[100%]'>
        <h2 className='text-xl roboto font-semibold'>My Expertise</h2>
        <h3 className='capitalize text-3xl min-[300px]:text-2xl min-[300px]:text-center text-[--accent] font-semibold poppins'>Awesome Services for you</h3>
        <div className='flex sm:gap-[5em] min-[300px]:justify-center min-[300px]:w-full min-[300px]:items-center min-[300px]:gap-[2em] sm:flex-row min-[300px]:flex-col'>{skillItems.map(skill => (<Skill h3={skill.h3} p={skill.p} />))}</div>
      </section>
      <section className='h-auto min-[300px]:py-[6em] sm:py-[4em] justify-between flex sm:flex-row min-[300px]:flex-col min-[300px]:px-[--padx1] sm:p-[--padx] items-center'>
        <div className='sm:w-[50%] min-[300px]:w-[100%] '>
          <h2 className='text-xl min-[300px]:text-[1em] sm:text-left font-semibold text-[--text] uppercase min-[300px]:text-center'>Skill Set</h2>
          <h3 className='text-2xl min-[300px]:text-xl min-[300px]:text-center sm:text-left text-[--accent] min-[300px]:text-wrap font-bold capitalize poppins sm:text-nowrap'>Creative and professional skills experience on few areas</h3>
          <p className='roboto italic sm:text-left min-[300px]:text-center'>Check out some the skills i use in solving various tech related problems. <span className='sm:block'>This also includes my areas of specialization in these respective disciplines.</span> I have experience dealing with HTML, CSS/SCSS, Tailwindcss, Javascript, Reactjs and Python programming</p>
        </div>
        <div className='sm:w-[60%] sm:block min-[300px]:hidden'>
          <ul>
          <Swiper 
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop = {true}
            autoplay = {{delay: 4500}}
            navigation
            pagination = {{clickable: true}}
            className='w-[50%] mr-[0.01em] class1 relative'
            >
              <SwiperSlide>
                <li className=''>
                  <h4 className='text-[--accent] font-bold text-xl'>Python programming</h4>
                  <p className='roboto italic'><span className='font-bold'>Selenium:</span> for scraping</p>
                  <p className='roboto italic'><span className='font-bold'>PySimpleGUI:</span> for GUI Development</p>
                  <p className='roboto italic'><span className='font-bold capitalize'>Pygame:</span> for 2d game Development</p>
                  <p className='roboto italic'><span className='font-bold'>Sockets:</span> for backend development</p>
                </li> 
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <h4 className='text-[--accent] font-bold text-xl'>Web design</h4>
                  <p><span className='font-bold'>HTML, CSS/SCSS & Tailwindcss:</span> for design</p>
                  <p><span className='font-bold'>Javascript:</span> Frontend design and functionality</p>
                  <p><span className='font-bold'>Reactjs:</span> for frontend design and responsiveness</p>
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
      <section className='flex flex-col gap-[3em] justify-center py-[4em] items-center sm:px-[--padx] min-[300px]:px-[padx1]'>
        <div className='flex items-center w-full'>
          <div className='w-full flex flex-col justify-center min-[300px]:px-[--padx1]'>
            <h2 className='text-2xl min-[300px]:text-xl poppins text-[--accent] font-bold'>Featured Projects</h2>
            <p className='roboto capitalize text-xl italic'>Project catalogue</p>
          </div>
          <div className='mr-[2em]'>
            <a href="" className='p-[1em] hover:bg-[--accentH] duration-[1s] px-[2em] text-nowrap roboto font-bold text-[white] rounded-[.2em] bg-[--accent]'>View all</a>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 min-[300px]:grid-cols-1 sm:grid-rows-2 place-items-center sm:gap-[8em] min-[300px]:gap-[em] min-[300px]:gap-y-[3em] sm:gap-y-[2em]'>
            {projectItems.map(proj => (<Proje img={proj.img} h3={proj.h3} p={proj.p} skill={proj.skill}/>))}
        </div>
      </section>
      <Foot />
    </>
  )
}

export default Body
