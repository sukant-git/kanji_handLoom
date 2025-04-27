
import './App.css'
import Aboutus from './components/About us/Aboutus'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/Navbar/Navbar'
import Products from './components/products/products'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HandlooMachine from './components/HandLooMachine/HandlooMachine'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);

  return (
    <>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products />} />
     
         <Route path='/machinery' element={<HandlooMachine/>} />
       
    </Routes>
      <Aboutus/>
      </div>
    </>
  )
}

export default App;
