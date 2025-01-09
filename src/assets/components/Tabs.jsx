import { useState } from "react";
import {FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNode} from "react-icons/fa";
import {TbSql} from "react-icons/tb";
const Education = [
    {
        id: 1,
        Qualification: "National Senior Certificate (NSC)",
        Instistution: "Ohlange High School",
        completed: "2020",
        subjects: {
            subjects: "IsiZulu First Language",
            subjects: "English",
            subjects: "Life Sciences",
            subjects: "Physical Sciences",
            subjects: "Mathematics",
            subjects: "Life Orientation",
            subjects: "Computer Application Technology",
        }
    },
    {
        id: 2,
        Qualification: "Bsc Computer Science & Hydrology",
        Instistution: "University of Zululand",
        completed: "2023",
        AcademicRecord: ""
            
    },
]

const Experience = [
  {
    id: 0,
    company: "Lid's Internet Cafe",
    Role: "All Round Clerk, Custormer Service",
    Position: "Seasonal",
    year: "2017",
    duration: "3 Months total Experience",
  },
  {
    id: 1,
    company: "Country Road (Woolworths Pavillion)",
    Role: "Customer Service",
    Position: "Seasonal",
    type: "Seasonal",
    year: "2022, 2023",
    duration: "8 Months total Experience"
  },
  {
    id: 2,
    company: "Holllow World Records",
    Role: "Sound Engineer, Producer, Artist, Brand Designer",
    Position: "Permanent",
    year: "2024",
    duration: "9 years total Experience"
  },
  {
    id: 3,
    company: "Freelance ICT Assistant",
    Role: "Consulting, Diagnosing and Resolving ICT issues for clients",
    Position: "Permanent",
    year: "2024",
    duration: "4 years total Experience"
  },
]

const Skills = [
  {
    id: "1",
    name: "Python",
    icon: <FaPython className="text-gray-300 h-12 w-12 p-1"/>,
    level: "Intermediate",
  },
  {
    id: "2",
    name: "Java",
    icon: <FaJava className="text-gray-300 h-12 w-12 p-1"/>,
    level: "Intermediate",
  },
  {
    id: "3",
    name: "Javascript",
    icon: <FaJs className="text-yellow-500 h-12 w-12 p-1"/>,
    level: "Intermediate",
  },
  {
    id: "4",
    name: "HTML",
    icon: <FaHtml5 className="text-orange-600 h-12 w-12 p-1"/>,
    level: "Mastered",
  },
  {
    id: "5",
    name: "React",
    icon: <FaReact className="text-blue-400 h-12 w-12 p-1"/>,
    level: "Intermediate",
  },
  {
    id: "6",
    name: "React Native",
    icon: <FaReact className="text-blue-400 h-12 w-12 p-1"/>,
    level: "Intermediate",
  },
  {
    id: "7",
    name: "SQL",
    icon: <TbSql className="text-gray-300 h-12 w-12 p-1"/>,
    level: "Intermediate",
  },
  {
    id: "8",
    name: "node",
    icon: <FaNode className="text-accent h-12 w-12 p-1"/>,
    level: "Intermediate",
  },
  
]

const AboutMe = [
  {
    Interest: "CyberSecurity",
    img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descriptio1: "Always had a thing for secure access of Internet resources, from when I created my first facebook account when I was thirteen I always held my passwords and personal information dear and I still use it, as I grew up I found myself interested in hacking, of course from Movies but I found I had at least the minimum requirements and interest level to Persue this Field. This is Currently My Highest Priority to get into Cybersecurity but it is not my only interest in the field.",
  },
  {
    Interest: "Web Development",
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "I Developed a interest for web development in my Second Year of Varsity where we were given a project to develop a webapp for our school restaurant, since then I researched and learned different frameworks and trending technology like react JS and TailwindCss",
  },
  {
    Interest: "Software Development",
    img: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Being the field that I want to get into the most, Software development has always been my target work field, I would love to actually work in a professional environment outside of my personal projects and school projects. This is a very popular field amongst CompSci Graduates but I feel that the industry needs more Software developer now more than ever So I take interest in it"
  }
  
]


const Tabs = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState("education");

  return (

    <div  data-aos="fade-up" data-aos-duration="700" className="w-full max-w-3xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 ">
      {/* Tabs */}
      <div className="flex justify-center md:flex-col gap-1 md:mr-5 md:order-1 order-2
        w-full ">

        <button
          className={`md:py-2 ms:px-4 md:text-xl text-md p-1 mx-3 text-shadow-xl ${activeTab === "education"
              ? "border rounded-lg border-accent text-accent"
              : "text-gray-400 hover:text-accent"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`md:py-2 ms:px-4 md:text-xl text-md p-1 mx-3 text-shadow-xl ${
            activeTab === "experience"
              ? "border rounded-lg border-accent text-accent"
              : "text-gray-400 hover:text-accent"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={`md:py-2 ms:px-4 md:text-xl text-md p-1 mx-3 text-shadow-xl ${
            activeTab === "skills"
              ? "border rounded-lg border-accent text-accent"
              : "text-gray-400 hover:text-accent"
          }`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={`md:py-2 ms:px-4 md:text-xl text-md p-1 mx-3 text-shadow-xl ${
            activeTab === "about-me"
              ? "border rounded-lg border-accent text-accent"
              : "text-gray-400 hover:text-accent"
          }`}
          onClick={() => setActiveTab("about-me")}
        >
          About Me
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 h-96 md:h-full/2 w-full md:w-96 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thin
       scrollbar-thumb-accent scrollbar-track-transparent scrollbar-thumb-rounded-full
       order-2  md:order-1 border border-primary rounded-lg shadow-2xl">
        {/* Education  Content */}
        
        {activeTab === "education" && (
         <>
            {Education.map((Data) => {
            return <>
            <div className="grid grid-cols-1 p-4 m-5 rounded-md border-primary shadow-xl border group hover:bg-primary transition-all duration-150">
                <div key={Data.id} className="text-white">
                    <h1>{Data.Qualification}</h1>
                    <h2 className="text-md font-thin">{Data.Instistution}</h2>
                    <p>Completed - {Data.completed}</p>

                    <div className="mt-5 mb-1">
                    {Data.subjects ? (<></>) : (
                        <>
                      <a href="/AR.PDF" download className='group-hover:bg-green-700 animate-pulse btn-primary p-2 shadow-2xl text-shadow-xl text-gray-300'>
                        Download Academic Record        
                      </a></>
                    )}
                    
                    </div>

                    
                  
                </div>
            </div>
                
                </>
            })}
         
         </>
        )}

        {/* Experience Content */}

        {activeTab === "experience" && (
          <>
            {Experience.map((Exp) => {
            return(
              <>
                <div key={Exp.id} className="grid grid-cols-1 p-4 m-5 rounded-md border-primary shadow-xl border group hover:bg-primary transition-all duration-150">
                    <h1 className="text-gray-400 font-poppins text-shadow-md">
                      <span className="text-md font-thin text-accent text-shadow-lg">Company: </span>{Exp.company}</h1>
                    <h2 className="text-md font-thin text-shadow-lg text-white">
                      <span className="text-md font-thin text-accent text-shadow-lg">Position: </span>{Exp.Position}</h2>
                    <h2 className="text-md font-thin text-shadow-lg text-white">
                      <span className="text-md font-thin text-accent text-shadow-lg">Role: </span>{Exp.Role}</h2>
                      <p className="text-base text-gray-500">
                      <span className="text-md font-thin text-accent text-shadow-lg">year: </span>{Exp.year}
                      </p>
                      <p className="text-base text-gray-500 text-shadow-xl">
                      {Exp.duration}
                      </p>
                </div>
              
              </>
            )
          })}
          </>
        )}

        {/* Skills Content */}

        {activeTab === "skills" && (
          <>
            {Skills.map((skill) => {
              return(
                <>
                <div key={skill.id} className=" w-[95%] flex flex-column md:flex-row justify-start items-center border border-primary 
                rounded-xl mx-2 my-2 group hover:bg-primary shadow-2xl">
                  <div className="p-2 ml-5 mt-1 group-hover:animate-bounce transition-all duration-200">{skill.icon}</div>
                  <h1 className="text-white font-poppins text-shadow-xl">{skill.name}</h1>
                  <p className="text-md font-thin text-gray-400 p-3">({skill.level})</p>
                </div>
                </>
              )
            })}
          </>
        )}


        {activeTab === "about-me" && (
          <>
          <div className="p-5">
          <h1 className="text-xl font-bold text-accent">About Me</h1>
                <h3 className="text-md font-semibold text-gray-400 text-shadow-lg">I am a 23 year old Computer Science Undergraduate at the University of Zululand who aspires to become a relevant asset to the tech industy,I have completed my studies and I am Awaiting Graduation Currently. With that being said I am eager to work on any type of project presented to me and given the time to learn and adapt to any field I guarantee I could excell in any field</h3>
                <h2 className="text-lg font-bold text-accent text-shadow-xl py-5">Field Interests</h2>
            {AboutMe.map((AboutMe) => {
              return(
                <>
                
               

                <h1 className="text-white font-semibold text-xl py-3">{AboutMe.Interest}</h1>
                <img src={AboutMe.img} alt="Cybersecurity" className="rounded-lg shadow-xl my-3" />
                <p className="text-base font-thin text-gray-300">{AboutMe.description}</p>
                
              

                
               
                </>
              )
            })}

          </div>
               
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
