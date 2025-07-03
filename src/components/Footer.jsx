import React from 'react';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <>
      
      <style jsx>{`
        .footer {
          background-color:rgb(0, 0, 0);
          color:rgb(255, 255, 255);
          padding: 60px 0 30px 0;
        }
        
        .footer h2 {
          color: #ffffff;
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        
        .footer h3 {
          color: #ffffff;
          font-weight: 600;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }
        
        .footer p {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .contact-item svg {
          margin-right: 0.75rem;
          margin-top: 0.2rem;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
        
        .icon-location {
          color: #ef4444;
        }
        
        .icon-phone-green {
          color: #10b981;
        }
        
        .icon-phone-blue {
          color: #3b82f6;
        }
        
        .icon-email {
          color: #f87171;
        }
        
        .social-icons a {
          display: inline-block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          margin-right: 1rem;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .social-icons .facebook {
          background-color: #3b5998;
        }
        
        .social-icons .facebook:hover {
          background-color: #2d4373;
          color: white;
        }
        
        .social-icons .youtube {
          background-color: #ff0000;
        }
        
        .social-icons .youtube:hover {
          background-color: #cc0000;
          color: white;
        }
        
        .social-icons .instagram {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        }
        
        .social-icons .instagram:hover {
          opacity: 0.8;
          color: white;
        }
        
        .social-icons .twitter {
          background-color: #1da1f2;
        }
        
        .social-icons .twitter:hover {
          background-color: #0d8bd9;
          color: white;
        }
        
        .copyright {
          border-top: 1px solid #4b5563;
          padding-top: 2rem;
          margin-top: 3rem;
          text-align: center;
          color:rgb(255, 255, 255);
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 20px 0;
          }
          
          .footer h2 {
            font-size: 1.75rem;
          }
          
          .footer h3 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }
          
          .social-icons a {
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="mx-lg-5 px-lg-5 px-3">
          <div className="row">
            {/* Company Info Section */}
            <div className="col-lg-4 col-md-6 col-12 px-4">
              <h2>EONESTEP</h2>
              <p style={{fontSize:20}}>
                EONESTEP in India Top Franchise Brand Free Franchise,how register open center No.1 Computer Center Education Institute in india Best computer education affiliation franchise registration
              </p>
            </div>

            {/* Contact Info Section */}
            <div className="col-lg-4 col-md-6 col-12 px-5">
              <h3>CONTACT US</h3>
              
              <div className="contact-item">
                <MapPin className="icon-location" />
                <p style={{fontSize:20}}>Barola, Near Verma Jewellers, Sector-49 Noida, UP 201301</p>
              </div>
              
              <div className="contact-item">
                <Phone className="icon-phone-green" />
                <p style={{fontSize:20}}>8766391724</p>
              </div>
              
              <div className="contact-item">
                <Phone className="icon-phone-blue" />
                <p style={{fontSize:20}}>8766391724</p>
              </div>
              
              <div className="contact-item">
                <Mail className="icon-email" />
                <p style={{fontSize:20}}>eonestep.education@gmail.com</p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="col-lg-4 col-md-12 col-12 px-4">
              <h3>SOCIAL MEDIA HANDLE</h3>
              
              <div className="social-icons">
                <a 
                  href="https://www.facebook.com/ecceducationalhub" 
                  className="facebook" 
                  aria-label="Facebook"
                  onClick={(e) => e.preventDefault()}
                >
                  <Facebook size={20} />
                </a>
                
                <a 
                  href="https://www.youtube.com/c/ComputerGyan1" 
                  className="youtube" 
                  aria-label="YouTube"
                  onClick={(e) => e.preventDefault()}
                >
                  <Youtube size={20} />
                </a>
                
                <a 
                  href="https://www.instagram.com/ecceducation/" 
                  className="instagram" 
                  aria-label="Instagram"
                  onClick={(e) => e.preventDefault()}
                >
                  <Instagram size={20} />
                </a>
                
                <a 
                  href="https://twitter.com/EducationEcc?s=08" 
                  className="twitter" 
                  aria-label="Twitter"
                  onClick={(e) => e.preventDefault()}
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="row">
            <div className="col-12">
              <div className="copyright">
                COPYRIGHT © 2021 EONESTEP, ALL RIGHTS RESERVED. WEBSITE DESIGN AND DEVELOPED BY : EONESTEP IT TEAM
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}