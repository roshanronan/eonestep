import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Phone } from 'lucide-react'
import { Routes,Route, Link,useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import CenterLogin from './pages/CenterLogin'
import VerifyCertificate from './pages/VerifyCertificate'
import SoftwareCourse from './pages/SoftwareCourse'
import HardwareCourse from './pages/HardwareCourse'
import FranchiseApplyForm from './pages/FrachiesApply';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import CenterDashboard from './pages/CenterDashboard';
import { useHeaderEffects } from './utils/CustomHook';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { useAuth } from './utils/AuthContext';
import AuthHeader from './components/AuthHeader'
import FranchiseList from './components/FrachiseList'

function App() {
  useHeaderEffects()
    const location = useLocation();
    const { user } = useAuth();

useEffect(() => {
  if (location.hash) {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      // Get header height
      const header = document.querySelector('header'); // Adjust selector as needed
      const headerHeight = header ? header.offsetHeight : 0;
      
      // Calculate position with offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20; // Extra 20px padding
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}, [location]);

  return (
    <div>
      { !user?.name && <div className='d-flex flex-xl-row flex-column justify-content-between align-items-center px-3 pt-3 mb-3 pb-3' style={{borderBottom:'2px solid green'}}>
        <div className='d-flex flex-column justify-content-between'>
          <h3>Best Education Brand in India (Free Franchise & Registration)</h3>
         <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center justify-content-md-start gap-lg-3 gap-1'> 
          <h6 className='m-0'> <Phone size={20} color='green'/> 8766391724 / 8860365077 </h6>
         <div className='d-flex align-items-center'> <img src="https://img.icons8.com/color/20/000000/gmail-new.png" /> <h6 className='m-0 px-2'>eonestep.education@gmail.com</h6></div>
         
         </div>
        </div>
        <div className='d-flex flex-xl-row flex-column align-items-center justify-content-between gap-lg-3 gap-1 pe-2'>
          <Link to="/eonestep/apply-franchise" className='text-primary m-0' style={{fontSize:20,letterSpacing:'0.5',fontWeight:500}}>Apply For Franchise</Link>
          <Link className='text-primary m-0' style={{fontSize:20,letterSpacing:'0.5',fontWeight:500}}>Gallery</Link>
        </div>
      </div>
}
     { user?.name ? <AuthHeader/> : <Header/>}
      <Routes>
          <Route path='/eonestep/' element={<Landing/>}/>
          <Route path='/eonestep/center-login'  element={<CenterLogin/>}/>
          <Route path='/eonestep/check-result' element={<VerifyCertificate/>}/>
          <Route path='/eonestep/software-course' element={<SoftwareCourse/>} />
          <Route path='/eonestep/hardware-course' element={<HardwareCourse/>} />
          <Route path='/eonestep/apply-franchise' element={<FranchiseApplyForm/>}/>
          <Route path='/eonestep/franchise-req' element={<FranchiseList/>}/>
          <Route path='/eonestep/admin-dashboard' element={
            // <ProtectedRoute role="admin">
              <AdminDashboard/>
            // </ProtectedRoute>
          }/>
          <Route path='/eonestep/center-dashboard' element={
            // <ProtectedRoute role="center">
              <CenterDashboard/>
            // </ProtectedRoute>
          }/>
          
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div> 
  )
}

export default App
