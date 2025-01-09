import React from 'react'
import Navbar from '../components/Navbar';
import NavBtns from '../components/NavBtns';
const Services = () => {


  const ServiceData = [
    {
      num: "01",
      title: "Web Development",
      description: "As a computer science graduate and freelancer, I specialize in creating responsive, user-friendly websites using the latest technologies like React, Tailwind CSS, and Vite. My goal is to deliver websites that are not only visually appealing but also highly functional, ensuring a seamless user experience.",
      Technologies: "React, Tailwind CSS, Vite, JavaScript, HTML, CSS"
    },
    {
      num: "02",
      title: "IT Admin",
      description: "With a strong background in IT, I offer IT administration services to ensure smooth operations for businesses. This includes system setup, network management, troubleshooting, and providing solutions to optimize IT infrastructure for enhanced efficiency.",
      Technologies: "Linux, Windows Server, Networking, IT Support Tools"
    },
    {
      num: "03",
      title: "Software Development",
      description: "I provide software development services tailored to your needs, from desktop applications to backend systems. With my expertise in programming and problem-solving, I create reliable and scalable solutions to meet your unique requirements.",
      Technologies: "Python, Java, C++, JavaScript, APIs"
    },
    {
      num: "04",
      title: "Sound Engineering",
      description: "Combining technical expertise with creativity, I offer sound engineering services for music production, podcast editing, and more. I ensure high-quality audio output, making use of advanced tools to meet the specific needs of each project.",
      Technologies: "Pro Tools, Ableton Live, FL Studio, Logic Pro X"
    },
    {
      num: "05",
      title: "Poster Design",
      description: "With a keen eye for design, I create professional and engaging posters for events, promotions, or branding. My designs are tailored to capture attention and effectively convey your message.",
      Technologies: "Adobe Photoshop, Adobe Illustrator, Canva"
    },
    {
      num: "06",
      title: "UI/UX Design",
      description: "I craft intuitive and aesthetically pleasing user interfaces and experiences for web and mobile applications. My designs focus on user-centric principles to ensure ease of use and accessibility, aligning with your project goals.",
      Technologies: "Figma, Adobe XD, Sketch, Wireframing, Prototyping"
    }
  ];


  return (
    <>
    <div data-aos="fade-in" data-aos-duration="200" className='z-20 absolute w-full'>
    <Navbar />
    </div>

    <div  className='bg-gray-900 w-full h-screen p-5 md:p-20 place-content-center '>

      <h1 data-aos="fade-in" data-aos-duration="400" className="text-4xl font-semibold py-2 mt-10  md:mt-0 text-center text-accent text-shadow-lg ">Services</h1>

      <div data-aos="fade-up" data-aos-duration="800" className=' grid grid-cols-1 mb-10 md:grid-cols-2 gap-2 h-96 md:h-[100%] md:h-[400px] 
      overflow-y-scroll overflow-x-hidden scrollbar-track-transparent 
      scrollbar scrollbar-thin scrollbar-thumb-accent
       scroll-smooth border border-primary rounded-md '>

        {ServiceData.map((Data) => {
          return (
            <>
          <div className='border border-primary rounded-lg p-5 m-2 shadow-xl  hover:bg-primary group'>
          <h1 className='text-3xl text-gray-300 group-hover:animate-pulse text-shadow-lg font-poppins'><span className='text-5xl text-accent p-3 '>{Data.num}</span>{Data.title}</h1>
          <p className='text-lg font-thin text-shadow-sm text-white'>{Data.description}</p>

          </div>
          

         
          
          </>
          )
          
        })}
      </div>

    </div>

    <div className="fixed bottom-4 right-1 md:right-full md:left-1/2 transform md:-translate-x-1/2 bg-transparent text-white p-2 rounded-lg">
        <NavBtns location="Services" />
    </div>

    </>
  )
}

export default Services