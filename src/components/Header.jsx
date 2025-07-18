import React from 'react'
import { ChevronDown  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Header = () => {
  const { user } = useAuth();
  return (
      <header id="header" className="header d-flex sticky-top px-5" >
    <div className="d-flex justify-content-between align-items-center w-100">

      <Link to='/eonestep/' className="logo d-flex align-items-center">
        <h1 className="sitename">EoneStep</h1>
      </Link>
    

      <nav id="navmenu" className="navmenu" >
        <ul>
          <li><Link to="/eonestep/check-result"> Certificate Verification</Link></li>
          <li className="dropdown"><Link href=""><span>Courses   <ChevronDown size={20} /></span></Link>
            <ul>
              <li><Link to="/eonestep/software-course">Computer Software</Link></li>
              <li><Link to="/eonestep/hardware-course">Computer Hardware</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link to="/eonestep#about"><span>About   <ChevronDown size={20}  /></span></Link>
            <ul>
              <li><Link to="/eonestep#about">About Us</Link></li>
              <li><Link to="/eonestep#affiliation">Affiliation Process</Link></li>
              <li><Link to="/eonestep#refundncancel">Refund & Cancellation Policy</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link href=""><span>Student Zone   <ChevronDown size={20}  /></span></Link>
            <ul>
              <li><Link href="">Student Verification</Link></li>
              <li><Link href="">Student Login</Link></li>
             
            </ul>
          </li>
        <li><Link to='/eonestep/center-login'>Center Login</Link></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" style={{fontSize:40}}></i>
      </nav>

    </div>
  </header>
  )
}

export default Header