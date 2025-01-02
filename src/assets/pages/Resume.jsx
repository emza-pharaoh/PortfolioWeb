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