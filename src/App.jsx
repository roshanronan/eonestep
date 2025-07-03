import { useState } from 'react'
import './App.css'
import Header from './components/Header'

import Footer from './components/Footer'
import { Phone } from 'lucide-react'
import { Routes,Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import CenterLogin from './pages/CenterLogin'
import VerifyCertificate from './pages/VerifyCertificate'
import SoftwareCourse from './pages/SoftwareCourse'
import HardwareCourse from './pages/HardwareCourse'
import FranchiseApplyForm from './pages/FrachiesApply';
import { useHeaderEffects } from './utils/CustomHook';

function App() {
  useHeaderEffects()

  return (
    <div>
      <div className='d-flex flex-xl-row flex-column justify-content-between align-items-center px-3 pt-3 mb-3 pb-3' style={{borderBottom:'2px solid green'}}>
        <div className='d-flex flex-column justify-content-between'>
          <h3>Best Education Brand in India (Free Franchise & Registration)</h3>
         <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center justify-content-md-start gap-lg-3 gap-1'> 
          <h6 className='m-0'> <Phone size={20} color='green'/> 8766391724 / 8860365077 </h6>
         <div className='d-flex align-items-center'> <img src="https://img.icons8.com/color/20/000000/gmail-new.png" /> <h6 className='m-0 px-2'>eonestep.education@gmail.com</h6></div>
         
         </div>
        </div>
        <div className='d-flex flex-xl-row flex-column align-items-center justify-content-between gap-lg-3 mt-3 gap-1 pe-2'>
          <Link to="/apply-franchise" className='text-primary m-0' style={{fontSize:20,letterSpacing:'0.5',fontWeight:500}}>Apply For Franchise</Link>
          <Link className='text-primary m-0' style={{fontSize:20,letterSpacing:'0.5',fontWeight:500}}>Gallery</Link>
        </div>
      </div>

      <Header/>
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/center-login'  element={<CenterLogin/>}/>
          <Route path='/check-result' element={<VerifyCertificate/>}/>
          <Route path='/software-course' element={<SoftwareCourse/>} />
          <Route path='/hardware-course' element={<HardwareCourse/>} />
          <Route path='/apply-franchise' element={<FranchiseApplyForm/>}/>
      </Routes>
      <Footer/>
    </div> 
  )
}

export default App
