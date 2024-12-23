import React from 'react'
import Navbar from '../components/Navbar';

const Services = () => {

const ServiceData = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam dignissimos nulla aliquam inventore molestias placeat expedita vero maiores laudantium explicabo debitis ea architecto, incidunt est, asperiores aspernatur adipisci vel.",
    Technologies: ""

  },
  {
    num: "02",
    title: "IT Admin",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam dignissimos nulla aliquam inventore molestias placeat expedita vero maiores laudantium explicabo debitis ea architecto, incidunt est, asperiores aspernatur adipisci vel.",
    Technologies: ""

  },
  {
    num: "03",
    title: "Software Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam dignissimos nulla aliquam inventore molestias placeat expedita vero maiores laudantium explicabo debitis ea architecto, incidunt est, asperiores aspernatur adipisci vel.",
    Technologies: ""

  },
  {
    num: "04",
    title: "Sound Engineering",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam dignissimos nulla aliquam inventore molestias placeat expedita vero maiores laudantium explicabo debitis ea architecto, incidunt est, asperiores aspernatur adipisci vel.",
    Technologies: ""

  },
  {
    num: "05",
    title: "Poster Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam dignissimos nulla aliquam inventore molestias placeat expedita vero maiores laudantium explicabo debitis ea architecto, incidunt est, asperiores aspernatur adipisci vel.",
    Technologies: ""

  },
  {
    num: "06",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam dignissimos nulla aliquam inventore molestias placeat expedita vero maiores laudantium explicabo debitis ea architecto, incidunt est, asperiores aspernatur adipisci vel.",
    Technologies: ""

  },
  
 
]


  return (
    <>
    <div className='z-20 absolute w-full'>
    <Navbar />
    </div>

    <div className='bg-gray-900 w-full h-screen  p-20 place-content-center  '>

      <div className=' grid grid-cols-1 md:grid-cols-2 gap-2 h-screen md:h-[400px] 
      overflow-y-scroll overflow-x-hidden scrollbar-track-transparent 
      scrollbar scrollbar-thin scrollbar-thumb-accent
       scroll-smooth'>

        {ServiceData.map((Data) => {
          return (
            <>
          <div className='border border-primary rounded-lg p-5 shadow-xl  hover:bg-primary group'>
          <h1 className='text-3xl text-gray-300 group-hover:animate-pulse text-shadow-lg font-poppins'><span className='text-5xl text-accent p-3 '>{Data.num}</span>{Data.title}</h1>
          <p className='text-lg font-thin text-shadow-sm text-white'>{Data.description}</p>

          </div>
          

         
          
          </>
          )
          
        })}
      </div>

    </div>

    </>
  )
}

export default Services