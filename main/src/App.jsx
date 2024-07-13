import React from 'react'
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Services from './components/Services';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/courses' element={<Courses/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/services' element={<Services/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
