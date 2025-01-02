import React from 'react'
import Navbar from '../components/Navbar';
import NavBtns from '../components/NavBtns';
import {FaInstagram, FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Home = () => {
  return (
    < >
    <div data-aos="fade-in" data-aos-duration="200" className='z-20 absolute w-full'>
    <Navbar />
    </div>

      

    <div  className='bg-gray-900 place-content-center place-items-center w-full min-h-screen flex flex-col md:flex-row items-center p-5 gap-5 py-16'>

        {/* Text Section */}
         <div className='p-5 w-ful text-white order-2 md:order-1' data-aos="fade-up" data-aos-duration="800">
            <h2 className='text-xl text-gray-400 font-thin'>Computer Science and Hydrology Graduate</h2>
            <h1 className='text-4xl md:text-5xl font-poppins text-shadow-xl'>Hi, I'm <span className='text-accent'>Emanuel Mhlanga</span></h1>
            <p className=' text-sm md:text-md font-thin text-shadow-sm'> I passionately want to get into the tech workforce offically as a Graduate in Computer Science.
                I've Always had a passion and thorough understanding for tedchnology and have seeked to greatly improve my skills
                and relevants in the technological society. As a South African there's not a lot of advancements to be made
                yet which is why i am enthusiastic to usher the country into the 4th industrial revolution through technology
            </p>

        <div className='flex flex-wrap md:flex-row gap-7 py-5'>
          
          <a href="#">
              <FaInstagram className='text-4xl hover:text-yellow-300 text-white duration-300 text-shadow-xl'/>
          </a>
          <a href="https://www.linkedin.com/in/emanuel-mhlanga-1aaa49279/">
              <FaLinkedin className='text-4xl hover:text-yellow-300 text-white duration-300 text-shadow-xl'/>
          </a>
          <a href="https://github.com/emza-pharaoh">
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
        <div data-aos="fade-in" data-aos-duration="400" className='w-full h-full  md:h-full/2 place-items-center bg-center order-1 md:order-2 md:mr-20'>
        <div className='ml-[18px] md:ml-0  w-[300px] h-[300px] md:size-96 '>
            <img className='border-primary rounded-2xl' src='Me3.jpeg' alt="EBM" />
        </div>

        </div>
        


    </div>
    
    <div className="fixed bottom-4 right-1 md:right-full md:left-1/2 transform md:-translate-x-1/2 bg-transparent text-white p-2 rounded-lg">
        <NavBtns location="Home" />
    </div>

    
    
    </>
  )
}

export default Home