import React from 'react'
import Navbar from '../components/Navbar';
import {FaInstagram, FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import UnizuluLogo from '../img/UNIZULU.png';

const Home = () => {
  return (
    <>
    <div className='z-20 absolute w-full'>
    <Navbar />
    </div>
    <div className='bg-gray-900 w-full h-screen grid grid-cols-1 md:grid-cols-2 items-center p-5 gap-5'>

        {/* Text Section */}
        <div className='p-5 w-full text-white'>
            <h2 className='text-xl text-gray-400 font-thin'>Computer Science and Hydrology Graduate</h2>
            <h1 className='text-5xl font-poppins text-shadow-xl'>Hi, I'm <span className='text-accent'>Emanuel Mhlanga</span></h1>
            <p className='text-md font-thin text-shadow-sm'> I passionately want to get into the tech workforce offically as a Graduate in Computer Science.
                I've Always had a passion and thorough understanding for tedchnology and have seeked to greatly improve my skills
                and relevants in the technological society. As a South African there's not a lot of advancements to be made
                yet which is why i am enthusiastic to usher the country into the 4th industrial revolution through technology
            </p>

        <div className='flex  gap-7 py-5'>
          
          <a href="#">
              <FaInstagram className='text-4xl hover:text-yellow-300 text-white duration-300 text-shadow-xl'/>
          </a>
          <a href="#">
              <FaLinkedin className='text-4xl hover:text-yellow-300 text-white duration-300 text-shadow-xl'/>
          </a>
          <a href="#">
              <FaGithub className='text-4xl hover:text-yellow-300 text-white duration-300 text-shadow-xl'/>
          </a>
          <a href="#">
              <FaFacebook className='text-4xl hover:text-yellow-300 text-white duration-300 text-shadow-xl'/>
          </a>
          <a href="/resume.pdf" download className='btn-primary'>
                Download CV            
          </a>
          

          </div>
        </div>

        {/* Image */}
        <div className='w-full h-full/2 place-items-center bg-center'>
        <div className='self-center border size-96 '>
            <img src="" alt="EBM" />
        </div>

        </div>
        


    </div>
    
    
    </>
  )
}

export default Home