import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import Navbar from './Navbar';
import {MenuLinks} from './Navbar';
const SideBarView = ({showMenu}) => {
  return (
    <div className={`${showMenu ? "left-0" : "left-[-100%]"}
     fixed bottom-0 top-0 w-[75%] h-screen
     transition-all duration-300 pt-10 px-8 
     bg-primary shadow-2xl z-50 text-white` }>
        <div className='card'>
            {/* User section */}
            <div className='px-2 '>
                <h1 className="text-shadow-lg text-2xl font-poppins text-shadow-md ">EBM<span className='text-4xl text-accent'>.</span></h1>
            </div>

        {/* Navlinks */}
        <nav>
          <ul className='p-2 pt-9'>
            {
              MenuLinks.map(({id, name, link}) => {
                  return (
                    <li key={id} className="pt-5 cursor-pointer
                    hover:text-accent text-xl py-2
                    transition-all duration-150 ">
                      <a href={link} className="">{name}</a>
                    </li>
                  );
              })
            }
          </ul>
        </nav>
           
        </div>

        

    </div>
  )
}

export default SideBarView