import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Services from './assets/pages/Services';
import Projects from './assets/pages/Projects';
import Resume from './assets/pages/Resume';
import Contact from './assets/pages/Contact';

import AOS from 'aos'
import 'aos/dist/aos.css';

const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
    })
    AOS.refresh();
  }, [])

  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
