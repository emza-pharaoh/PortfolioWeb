import React from 'react'
import Navbar from '../components/Navbar'
import ContactMe from '../components/ContactMe';


const Contact = () => {
  return (
    <>
    <div className='z-20 absolute w-full'>
    <Navbar />
    </div>

    <div className='bg-gray-900 place-content-center place-items-center w-full min-h-screen items-center p-5  py-16'>
      
      <ContactMe />

    </div>
    
    
    </>
  )
}

export default Contact
