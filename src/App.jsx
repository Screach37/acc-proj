import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Navbar, Footer } from "./components";
import {Home, About, Services, WorkModel, Contact} from './pages'

function App() {

  return (
    <>
    <div>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/services" element={<Services />}> </Route>
          <Route path="/workmodel" element={<WorkModel />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
        </Routes>
    </div>
    </>
  )
}

export default App
