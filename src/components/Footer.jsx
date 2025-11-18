import React from 'react';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
import logoHeader from '../assets/logo.png'

export default function Footer() {
  return (
      <footer className="footer position-relative overflow-hidden">
        {/* <div className="position-absolute w-100 h-100" style={{top: 0, left: 0}}>
      <div className="blur-circle circle1"></div>
      <div className="blur-circle circle2"></div>
      <div className="blur-circle circle3"></div>
        </div> */}
        <div className="mx-lg-5 px-lg-5 px-3 ">
    

          <div className="row d-flex flex-column flex-md-row justify-content-center">
            {/* Company Info Section */}
            <div className="col-lg-4 col-md-6 col-12 d-flex flex-column align-items-start">
             <div className='d-flex flex-row align-items-center mb-3'> <div className="me-3 rounded" style={{
                        background: 'rgba(255, 255, 255, 1)',
                        backdropFilter: 'blur(10px)'
                      }}> <img src={logoHeader} height={55}/> </div>
                       <h2 className='m-0'>Eonestep Academy</h2>
                       </div>
              <p >
              <strong> EONESTEP – India’s No.1 Computer Education Franchise.</strong><br/>
Get free franchise registration and start your own computer training center with the best computer education affiliation in India.
                   </p>
            </div>  

            {/* Contact Info Section */}
            <div className="col-lg-4 col-md-6 col-12 d-flex flex-column align-items-strat">
              <h3  className='mt-md-0 mt-3'>Contact Us</h3>
              
              <div className="contact-item">
                <MapPin className="icon-location" />
                <p >Barola, Near Verma Jewellers, Sector-49 Noida, UP 201301</p>
              </div>
              
              <div className="contact-item">
                <Phone className="icon-phone-green" />
                <p >8766391724</p>
              </div>
              
              <div className="contact-item">
                <Phone className="icon-phone-blue" />
                <p >8766391724</p>
              </div>
              
              <div className="contact-item">
                <Mail className="icon-email" />
                <p style={{overflowWrap:"anywhere"}}>eonestep.education@gmail.com</p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="col-lg-4 col-md-12 col-12 d-flex flex-column align-items-md-center z-100 align-items-start">
              <h3 className='mt-md-0 mt-3'>Social Media Handles</h3>
              
              <div className="social-icons">
                <a 
                  href="https://www.facebook.com/ecceducationalhub/" 
                  className="facebook" 
                  aria-label="Facebook"
                  // onClick={(e) => e.preventDefault()}
                >
                  <Facebook size={20} />
                </a>
                
                <a 
                  href=" https://www.youtube.com/@ComputerGyan1" 
                  className="youtube" 
                  aria-label="YouTube"
                  // onClick={(e) => e.preventDefault()}
                >
                  <Youtube size={20} />
                </a>
                
                <a 
                  href="https://www.instagram.com/ecceducation/" 
                  className="instagram" 
                  aria-label="Instagram"
                  // onClick={(e) => e.preventDefault()}
                >
                  <Instagram size={20} />
                </a>
                
                {/* <a 
                  href="https://twitter.com/EducationEcc?s=08" 
                  className="twitter" 
                  aria-label="Twitter"
                  onClick={(e) => e.preventDefault()}
                >
                  <Twitter size={20} />
                </a> */}
              </div>
            </div>
          </div>
         
          <div className="row">
            <div className="col-12">
              <div className="copyright">
                COPYRIGHT © 2021 EONESTEP, ALL RIGHTS RESERVED. WEBSITE DESIGN AND DEVELOPED BY : EONESTEP IT TEAM
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}