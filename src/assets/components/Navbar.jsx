import React from 'react'
import {Link} from 'react-router-dom';
import SideBarView from "./SideBarView";
import { BiMenuAltLeft, BiMenuAltRight} from 'react-icons/bi';



export const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Services",
        link: "/Services"
    },
    {
        id: 3,
        name: "Resume",
        link: "/Resume"
    },
    {
        id: 4,
        name: "Projects",
        link: "/projects"
    },
    {
        id: 5,
        name: "Contact",
        link: "/Contact"
    },
];

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }


  return (
    <>
    <nav className='w-full'>
        <div className='w-full flex justify-between items-center text-white p-2 bg-transparent'>
            {/* Logo Text */}
            <div className='px-5 '>
                <h1 className="text-shadow-lg text-2xl font-poppins text-shadow-md ">EBM<span className='text-4xl text-accent'>.</span></h1>
            </div>


            <div className=' hidden md:block xl:pl-[550px]'>
                {/* Navlinks */}
            <ul className='flex flex-row gap-5 px-10 '>
                
                {MenuLinks.map((Data) => {
                    return(
                        <>
                    <li key={Data.id} className=' font-poppins text-shadow-md text-md hover:border hover:border-primary hover:border-transparent rounded-xl p-1 hover:bg-accent transition-colors duration-150'>
                         <Link to={Data.link}>{Data.name}</Link>
                    </li> 
                        </>
                    )
                })}
            </ul>
            </div>
             {/* Mobile Navlinks */}
             <div className='flex gap-2 items-center p-2'>
                    
                   
                    {
                        showMenu ?
                         (<BiMenuAltRight onClick={toggleMenu} className='text-3xl md:hidden' />
                        ) :
                         (<BiMenuAltLeft onClick={toggleMenu} className='text-3xl md:hidden' />
                         )
                    }
                    
            </div>

            
            


        </div>
        {/* Sidebar For mobile navlinks */}
        <SideBarView showMenu={showMenu}/>
        
    </nav>
    </>
  )
}

export default Navbar