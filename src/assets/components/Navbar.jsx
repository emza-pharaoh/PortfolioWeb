import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='w-full'>
        <div className='w-full flex justify-between items-center text-white p-2 bg-transparent'>
            {/* Logo Text */}
            <div className='px-5'>
                <h1 className="text-shadow-lg text-2xl font-poppins text-shadow-md ">EBM<span className='text-4xl text-accent'>.</span></h1>
            </div>
            <div>
                {/* Navlinks */}
            <ul className='flex flex-row gap-5 px-10'>
                <li className=' font-poppins text-shadow-md text-lg'>
                    <Link to='/'>Home</Link>
                </li>
                <li className=' font-poppins text-shadow-md text-lg'>
                    <Link to='/Services'>Services</Link>
                </li>
                <li className=' font-poppins text-shadow-md text-lg'>
                    <Link to='/Resume'>Resume</Link>
                </li>
                <li className=' font-poppins text-shadow-md text-lg'>
                    <Link to='/Projects'>Projects</Link>
                </li>
                <li className=' font-poppins text-shadow-md text-lg'>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
            </div>
            


        </div>
        
    </nav>
    </>
  )
}

export default Navbar