import React from 'react'
import Navbar from '../components/Navbar';
import Tabs from '../components/Tabs';
import NavBtns from '../components/NavBtns';

const Resume = () => {
  return (
    <>
    <div data-aos="fade-in" data-aos-duration="200" className='z-20 absolute w-full'>
    <Navbar />
    </div>
    

    <div className='bg-gray-900 place-content-center place-items-center w-full min-h-screen items-center p-5  py-16'>
  
    <h1 data-aos="fade-in" data-aos-duration="400" className="text-4xl font-semibold py-2 mt-10  md:mt-0 text-center text-accent text-shadow-lg ">Resume</h1>

      <div  data-aos="fade-in" data-aos-duration="800" >
        <Tabs/>
      </div>
    </div>
    
    <div className="fixed bottom-4 right-1 md:right-full md:left-1/2 transform md:-translate-x-1/2 bg-transparent text-white p-2 rounded-lg">
        <NavBtns location="Resume" />
    </div>
    </>
  )
}

export default Resume