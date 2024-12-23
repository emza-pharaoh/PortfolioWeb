import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Services from './assets/pages/Services';
import Projects from './assets/pages/Projects';
import Resume from './assets/pages/Resume';
import Contact from './assets/pages/Contact';

const App = () => {
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
