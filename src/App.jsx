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
import StudentRegistrationForm from './components/RegisterStudent';
import Gallery from './components/Gallery';
import ChangePassword from './pages/ChangePassword';
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from './components/ScrollToTop';
import StudentCertificate from './pages/StudentCertificate';
import PublicRoute from './utils/PublicRoute';
import EditFranchise from './pages/EditFranchise'
import LiveClassRegistration from './pages/LiveClass'
import CoursesGrid from './pages/LiveCouses'
import CertificateReqested from './pages/CertificateReqested'
import AddLiveCourse from './pages/AddLiveCourse'
import InstructorList from './pages/AddInstructor'


function App() {
  useHeaderEffects()
    const location = useLocation();
    const { session } = useAuth();

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
       {/* <Toaster position="top-right" /> */}
       <ScrollToTop/>
       <ToastContainer
        position="top-right"     // where it appears
        autoClose={3000}         // auto close in 3s
        hideProgressBar={false}  // show progress bar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"          // "light", "dark", "colored"
      />
      {/* { !session?.user?.email && <div className='d-flex flex-xl-row flex-column justify-content-between align-items-center px-3 pt-3 mb-3 pb-3' style={{borderBottom:'2px solid green'}}>
        <div className='d-flex flex-column justify-content-between '>
          <h3 className='text-center'>Best Education Brand in India (Free Franchise & Registration)</h3>
         <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center justify-content-md-start gap-lg-3 gap-1'> 
          <h6 className='m-0'> <Phone size={20} color='green'/> 8766391724 / 8860365077 </h6>
         <div className='d-flex align-items-center'> <img src="https://img.icons8.com/color/20/000000/gmail-new.png" /> <h6 className='m-0 px-2'>eonestep.education@gmail.com</h6></div>
         
         </div>
        </div>
        <div className='d-flex flex-xl-row flex-column align-items-center justify-content-between gap-lg-3 gap-1 pe-2'>
          <Link to="/apply-franchise" className='text-primary m-0' style={{fontSize:20,letterSpacing:'0.5',fontWeight:500}}>Apply For Franchise</Link>
          <Link className='text-primary m-0' style={{fontSize:20,letterSpacing:'0.5',fontWeight:500}}>Gallery</Link>
        </div>
      </div>
} */}
     { session?.user?.email ? <AuthHeader/> : <Header/>}
      <Routes>
          <Route path='/' element={
            <PublicRoute>
              <Landing/>
            </PublicRoute>
            
            }/>
          <Route path='/center-login'  element={
             <PublicRoute>
              <CenterLogin/>
            </PublicRoute>
            }/>
          <Route path='/check-result' element={<VerifyCertificate/>}/>
          <Route path='/software-course' element={<SoftwareCourse/>} />
          <Route path='/hardware-course' element={<HardwareCourse/>} />
          <Route path='/apply-franchise' element={<FranchiseApplyForm/>}/>
          {/* <Route path='/franchise-req' element={<FranchiseList/>}/> */}
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/change-password' element={<ChangePassword/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/live-classes' element={<CoursesGrid/>}/>
          <Route path='/live-classes/:id' element={<LiveClassRegistration/>}/>
          {/* <Route path='/certificate' element={<StudentCertificate/>}/> */}
          
          {/* Protected Routes */}
          <Route path='/register-student' element={
            <ProtectedRoute roles="franchise">
            <StudentRegistrationForm/>
            </ProtectedRoute>
            }/>
          <Route path='/edit-student/:id' element={
            <ProtectedRoute roles="franchise"> 
              <StudentRegistrationForm editMode={true}/>
            </ProtectedRoute>
            }/>
          <Route path='/admin-dashboard' element={
            <ProtectedRoute roles="admin">
              <AdminDashboard/>
            </ProtectedRoute>
          }/>
           <Route path='/add-live-course' element={
            <ProtectedRoute roles="admin">
              <AddLiveCourse/>
            </ProtectedRoute>
          }/>

           <Route path='/edit-live-course' element={
            <ProtectedRoute roles="admin">
              <AddLiveCourse editMode={true}/>
            </ProtectedRoute>
          }/>
           <Route path='/add-instructor' element={
            <ProtectedRoute roles="admin">
             <InstructorList/>
            </ProtectedRoute>
          }/>
           <Route path='/certificate-req' element={
            <ProtectedRoute roles="admin">
              <CertificateReqested/>
            </ProtectedRoute>
          }/>
          <Route path='/edit-franchise/:id' element={
            <ProtectedRoute roles={["admin","franchise"]}>
              <FranchiseApplyForm editMode={true}/>
            </ProtectedRoute>
          }/>
          <Route path='/center-dashboard' element={
            <ProtectedRoute roles="franchise">
              <CenterDashboard/>
            </ProtectedRoute>
          }/>
          
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div> 
  )
}

export default App
