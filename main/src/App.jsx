import React from 'react'
import NavBar from './component/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Courses from './component/Courses';
import Contact from './component/Contact';
import Services from './component/Services';

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
