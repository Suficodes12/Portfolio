

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomeMain } from './HomeComp/HomeMain'
import { Header } from './headerFooter/Header'
import { Footer } from './headerFooter/Footer'

function App() {
  

  return (
    <>


    <BrowserRouter>
    <Header/>
      <Routes> 



          <Route path="/" element={<HomeMain/>}/>
        
        </Routes>  

     
 <Footer/>

</BrowserRouter>



    </>
  )
}

export default App
