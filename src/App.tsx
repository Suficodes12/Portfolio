

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomeMain } from './HomeComp/HomeMain'
import { Header } from './headerFooter/Header'
import { Footer } from './headerFooter/Footer'
import { useRef } from 'react'

function App() {

  const skillsRef = useRef<HTMLDivElement| null> (null)
  const contactRef = useRef<HTMLDivElement | null>(null);
  const AboutRef = useRef<HTMLDivElement | null>(null);
  const ProjectRef = useRef<HTMLDivElement | null>(null);
  const TopRef = useRef<HTMLDivElement | null>(null);
  

  return (
    <>


    <BrowserRouter>
    <Header skillsRef={skillsRef} TopRef={TopRef} ProjectRef={ProjectRef} AboutRef={AboutRef} contactRef={contactRef}/>
      <Routes> 



          <Route path="/" element={
            <HomeMain
            ProjectRef={ProjectRef}
              skillsRef={skillsRef}
              AboutRef={AboutRef}
              TopRef={TopRef}
              contactRef={contactRef}

          />}/>
        
        </Routes>  

     
 <Footer skillsRef={skillsRef} TopRef={TopRef} ProjectRef={ProjectRef} AboutRef={AboutRef} contactRef={contactRef} />

</BrowserRouter>



    </>
  )
}

export default App
