import { useState } from 'react'
import './App.css'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Navbar from './Navbar'
import Section4 from './Components/Section4'

function App() {

  return(
    <>
    <Navbar />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    </>
  )
}

export default App
