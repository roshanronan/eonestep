import React from 'react'
import { ChevronDown  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const AuthHeader = () => {
  const { user,logout } = useAuth();
  return (
      <header id="header" className="header d-flex sticky-top px-5" >
    <div className="d-flex justify-content-between align-items-center w-100">

      <Link to='/eonestep/' className="logo d-flex align-items-center">
        <h1 className="sitename">EoneStep</h1>
      </Link>
    

      <nav id="navmenu" className="navmenu" >
        <ul>
          <li><Link to="/eonestep/check-result"> Certificate Verification</Link></li>
        {/* {<li>{user?.role == 'center'? <Link to='/eonestep/students'>Student</Link>:<Link to='/eonestep/franchise-req'>Franchises</Link>}</li> }
        {<li>{user?.role == 'center'? <Link to='/eonestep/enroll-student'>Enroll Student</Link>:<Link to='/eonestep/franchise-req'>Franchise Request</Link>}</li> } */}
        {<li>{user?.role == 'center'? <Link to='/eonestep/center-dashboard'>Center Dashboard</Link>:<Link to='/eonestep/admin-dashboard'>Admin Dashboard</Link>}</li> }
        <li><Link to='/eonestep' onClick={logout}>Logout</Link></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" style={{fontSize:40}}></i>
      </nav>

    </div>
  </header>
  )
}

export default AuthHeader