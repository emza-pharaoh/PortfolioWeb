import React from 'react'
import Navbar from '../components/Navbar';
import {FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNode, FaBootstrap} from "react-icons/fa";
import {TbSql} from "react-icons/tb";

const ProjectData = [
  {
    id: "1",
    title: "Recording Studio Website",
    img: "/RecordingStudioWeb.png",
    link: "https://holllowworldentertainment.web.app/",
    description: "This is a website I designed to promote my recording studio side hustle where user are there to book a session or get directly in contact with me to purchase a beat or other services, coded with pure html and bootstrap",
  },
  {
    id: "2",
    title: "First Portfolio Website",
    img: "/FirstPortfolioWeb.png",
    link: "https://my-portfolio-page-107bf.web.app/",
    description: "My previouse portfolio webiste with a simple layout coded with pure html, css and javascript",
  },
  {
    id: "3",
    title: "DentistCo",
    img: "/dentistco.png",
    link: "https://dentistco.netlify.app/",
    description: "A Modern React Js & Tailwind website for a pseudo dentist company, created this one while practicing my react",
  },
  {
    id: "4",
    title: "ConstructCo",
    img: "/constructco.png",
    link: "https://construtco.netlify.app",
    description: "A Modern React Js & Tailwind website for a pseudo Construction company, created this one while practicing my react",
  },
  {
    id: '5',
    title: "Beat Sales App",
    img: "/Bt1.png",
    img2: "/Bt2.png",
    img3: "/Bt3.png",
    img4: "/Bt4.png",
    img5: "/Bt5.png",
    description: "This is a Modern Beat Sales App that created with React Native Expo, It aims at connecting Musicians from Artists to Porducer to Purchase Content from each other interactively and lets them communicate withe each other as well",
  },
]

const Projects = () => {
  return (
    <>
    <div  data-aos="fade-in" data-aos-duration="200" className='z-20 absolute w-full'>
    <Navbar />
    </div>

    <div className='bg-gray-900 place-content-center place-items-center w-full min-h-screen items-center p-5  py-16'>
      
    <h1  data-aos="fade-down" data-aos-duration="300" className="text-3xl font-bold text-accent text-center my-3 animate-pulse text-shadow-xl">Projects</h1>

      
      <div  data-aos="fade-up" data-aos-duration="700" className="border border-primary rounded-xl  h-[480px] md:h-[460px] md:h-[400px] 
       overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent ">
          {ProjectData.map((Data) => {
            return(
              <>
              <div className='p-5 m-3 grid grid-cols-1 md:grid-cols-2 border border-primary  rounded-lg shadow-2xl' key={Data.id}>

                <div className='md:mx-3 my-1'>
                <h1 className="text-2xl font-bold text-accent text-shadow-xl">{Data.title}</h1>

                <p className="text-xl font-poppins text-gray-400 mt-5 mb-5">{Data.description}</p>

                <div className='text-center md:my-10 md:opacity-100 opacity-0 transition-all duration-150'>
                {Data.link ? (<>
                  <a href={Data.link} className="bg-accent hover:bg-green-800 rounded-md p-2 px-10 text-gray-300 text-shadow-lg shadow-2xl">Live Preview</a>
                </>):(<></>)}
                </div>

                </div>
                 <div>
                   {/* Image */}
                  {/* If the Data contains a img2 then generates the extra div below */}
                  {Data.img2 ? (<>
                  <div className='grid grid-cols-2 md:grid-cols-5 gap-2 '>
                  <img className="shadow-2xl rounded-xl siz" src={Data.img} alt={Data.title} />
                    <img className="shadow-2xl rounded-xl siz" src={Data.img2} alt={Data.title} />
                    <img className="shadow-2xl rounded-xl siz" src={Data.img3} alt={Data.title} />
                    <img className="shadow-2xl rounded-xl siz" src={Data.img4} alt={Data.title} />
                    <img className="shadow-2xl rounded-xl siz" src={Data.img5} alt={Data.title} />

                  </div>
                    
                  </>) : (<>
                    <img className="shadow-2xl rounded-xl" src={Data.img} alt={Data.title} />
                
                  </>)}

                  <div className='text-center my-5 md:opacity-0 opacity-100 transition-all duration-150'>
                {Data.link ? (<>
                  <a href={Data.link} className="bg-accent hover:bg-green-800 rounded-md p-2 px-10 text-gray-300 text-shadow-lg shadow-2xl">Live Preview</a>
                </>):(<></>)}
                </div>


                 </div>
                
                  


              </div>
              
                
              </>
            )
          })}
      </div>

    </div>

    </>
  )
}

export default Projects
