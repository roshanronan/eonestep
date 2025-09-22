import React from 'react'
import { ChevronDown  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import logo from "../assets/logo.png"

const AuthHeader = () => {
  const { session,logout } = useAuth();
  return (
      <header id="header" className="header d-flex sticky-top px-5" >
    <div className="d-flex justify-content-between align-items-center w-100">

      <Link to='/' className=" d-flex align-items-center">
        <div className="d-flex align-items-center" >
                      <div className="me-3 rounded" style={{
                        background: 'rgba(255, 255, 255, 1)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        {/* <BookOpen className="text-white" size={32} /> */}
                        <img src={logo} alt="Eonestep Academy logo" height={55} />
                      </div>
                      <div className='d-none d-md-block'>
                        <h2 className="text-white mb-0 fw-bold">EoneStep Academy</h2>
                        <small className="text-light opacity-75">Excellence in Learning</small>
                      </div>
                    </div>
      </Link>
    

      <nav id="navmenu" className="navmenu" >
        <ul>
          <li><Link to="/check-result"> Certificate Verification</Link></li>
        {/* {<li>{session?.user?.role == 'franchise'? <Link to='/students'>Student</Link>:null}</li> } */}
        {<li>{session?.user?.role == 'franchise'? <Link to='/register-student'>Enroll Student</Link>:null}</li> }
        {<li>{session?.user?.role == 'franchise'? <Link to='/center-dashboard'>Center Dashboard</Link>:<Link to='/admin-dashboard'>Admin Dashboard</Link>}</li> }
        <li><Link to='/eonestep' onClick={logout}>Logout</Link></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" style={{fontSize:40}}></i>
      </nav>

    </div>
  </header>
  )
}

export default AuthHeader