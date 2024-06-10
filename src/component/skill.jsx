import React from 'react'

function Skill({h3, p}) {

    if (h3 === "Desktop GUI Development")

    {
        return (
            <div className='sm:w-[350px] duration-[0.4s] min-[300px]:w-[400px] text-center px-[3em] rounded-[.5em] boxSha items-center justify-center p-[1em] bg-[--accent] flex flex-col gap-[.5em]'>
                <div className='flex flex-col gap-[.5em]'>
                    <h3 className='text-xl text-nowrap poppins font-bold text-[--bg]'>{h3}</h3>
                    <p className='roboto italic text-white'>{p}</p>
                </div>
                <p className='captalize text-[1rem] poppins text-white capitalize font-bold border-b-2 cursor-pointer border-[white]'>Know more</p>
            </div>
          )
    }

    else {
        return (
          <div className='sm:w-[350px] sm:h-[220px] duration-[0.4s] min-[300px]:w-[400px] text-center px-[1em] boxSha rounded-[1em] items-center justify-between p-[1em] flex flex-col '>
              <div className='flex flex-col gap-[1em]'>
                  <h3 className='text-xl text-[--accent] text-nowrap font-bold poppins'>{h3}</h3>
                  <p className='roboto italic '>{p}</p>
              </div>
              <p className='captalize poppins text-[1rem] text-[--accent] capitalize font-bold border-b-2 cursor-pointer border-[--accent]'>Know more</p>

          </div>
            )
    }
}

export default Skill