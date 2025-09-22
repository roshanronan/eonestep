import React, { use } from 'react';
import { Phone, Mail, Star, Award, Users, BookOpen } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';
import { ChevronDown  } from 'lucide-react';


const HeroBanner = () => {
    const navigate = useNavigate();
  return (
    <>
      {/* Bootstrap CSS */}
      
      <div className="position-relative overflow-hidden" style={{
        minHeight: '100vh',
        // background: 'linear-gradient(135deg, #1e3a8a 0%, #691deeff 50%, #3730a3 100%)'
      }}>
        
        {/* Animated Background Elements */}
        <div className="position-absolute w-100 h-100" style={{top: 0, left: 0, zIndex: 1}}>
          <div className="position-absolute rounded-circle" style={{
            top: '80px',
            left: '80px',
            width: '300px',
            height: '300px',
            background: 'rgba(96, 165, 250, 0.2)',
            filter: 'blur(10px)',
            animation: 'floatPulse 6s ease-in-out infinite alternate'
          }}></div>
          <div className="position-absolute rounded-circle" style={{
            top: '160px',
            right: '80px',
            width: '400px',
            height: '400px',
            background: 'rgba(211, 188, 232, 0.2)',
            filter: 'blur(10px)',
            animation: 'floatPulse 6s ease-in-out infinite alternate'
          }}></div>
      <div className="blur-circle circle1"></div>
      <div className="blur-circle circle2"></div>
      <div className="blur-circle circle3"></div>
        </div>

        {/* Navigation */}
        {/* <nav className="navbar navbar-expand-lg position-relative" style={{zIndex: 10}}>
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center">
              <div className="me-3 p-3 rounded" style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)'
              }}>
                <BookOpen className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-white mb-0 fw-bold">EoneStep Education</h2>
                <small className="text-light opacity-75">Excellence in Learning</small>
              </div>
            </div>
            
            <div className="d-none d-lg-flex align-items-center">
              <div className="me-4 text-white d-flex align-items-center">
                <Phone size={16} className="me-2" />
                <span className="small">8766391724 / 8860365077</span>
              </div>
              <div className="text-white d-flex align-items-center">
                <Mail size={16} className="me-2" />
                <span className="small">eonestep.education@gmail.com</span>
              </div>
            </div>
      
          </div>
        </nav> */}

        {/* Main Hero Content */}
        <div className="container-fluid px-4 py-5 position-relative" style={{zIndex: 10}}>
          <div className="row align-items-center min-vh-75">
            
            {/* Left Column */}
            <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
              
              {/* Badge */}
              <div className="d-inline-flex align-items-center rounded-pill px-4 py-2 mb-4" style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)'
              }}>
                <Star className="text-warning me-2" size={20} />
                <span className="text-white fw-medium">Best Education Brand in India</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="display-1 fw-bold text-white mb-4 lh-1">
                Transform Your
                <span className="d-block" style={{
                  background: 'linear-gradient(45deg, #fbbf24, #f472b6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Future Today
                </span>
              </h1>
              
              {/* Description */}
              <p className="lead text-white opacity-75 mb-5 pe-lg-5">
                Join India's leading education franchise network. Get free franchise opportunities 
                and registration to start your educational journey with us.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-5">
                <button className="btn btn-lg px-md-5 px-1 py-md-3 py-1 rounded-pill fw-bold shadow-lg" style={{
                  background: 'linear-gradient(45deg, #fbbf24, #f97316)',
                  border: 'none',
                  color: 'white',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s ease'
                }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                   onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                   onClick={() => {navigate("/apply-franchise")} }
                   >
                  Apply For Franchise
                </button>
                <button className="btn btn-outline-light btn-lg px-md-5 px-1 py-md-3 py-1 rounded-pill fw-bold" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
                onClick={() => {navigate('/gallery')} }
                >
                  View Gallery
                </button>
              </div>

              {/* Stats */}
              <div className="row text-center g-4 mx-auto mx-lg-0" style={{maxWidth: '400px'}}>
                <div className="col-4">
                  <div className="h2 fw-bold text-white mb-1">500+</div>
                  <small className="text-white opacity-75">Franchises</small>
                </div>
                <div className="col-4">
                  <div className="h2 fw-bold text-white mb-1">50k+</div>
                  <small className="text-white opacity-75">Students</small>
                </div>
                <div className="col-4">
                  <div className="h2 fw-bold text-white mb-1">15+</div>
                  <small className="text-white opacity-75">Years</small>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="card h-100 border-0 shadow-lg" style={{
                    background: 'rgba(0, 0, 0, 0.20)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease'
                  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="card-body p-4">
                      <Award className="text-warning mb-3" size={48} />
                      <h5 className="card-title text-white fw-bold">Free Franchise</h5>
                      <p className="card-text text-white opacity-75 small">
                        Start your educational business with zero franchise fee and full support
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-sm-6 ">
                  <div className="card h-100 border-0 shadow-lg" style={{
                    background: 'rgba(0, 0, 0, 0.20)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease'
                  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="card-body p-4">
                      <Users className="text-success mb-3" size={48} />
                      <h5 className="card-title text-white fw-bold">Expert Support</h5>
                      <p className="card-text text-white opacity-75 small">
                        Get comprehensive training and ongoing support from education experts
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="card h-100 border-0 shadow-lg" style={{
                    background: 'rgba(0, 0, 0, 0.20)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease'
                  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="card-body p-4">
                      <BookOpen className="text-info mb-3" size={48} />
                      <h5 className="card-title text-white fw-bold">Quality Education</h5>
                      <p className="card-text text-white opacity-75 small">
                        Proven curriculum and teaching methodologies for guaranteed results
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-sm-6 ">
                  <div className="card h-100 border-0 shadow-lg" style={{
                    background: 'rgba(0, 0, 0, 0.20)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease'
                  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="card-body p-4">
                      <Star className="text-warning mb-3" size={48} />
                      <h5 className="card-title text-white fw-bold">Brand Recognition</h5>
                      <p className="card-text text-white opacity-75 small">
                        Join India's most trusted education brand with nationwide presence
                      </p>
                    </div>
                  </div>
                </div>

                  <div className="px-4 pb-4 position-relative" style={{zIndex: 10}}>
          <div className="card border-0 shadow-lg mx-auto" style={{
            background: 'rgba(0, 0, 0, 0.20)',
            backdropFilter: 'blur(10px)',
            maxWidth: '400px'
          }}>
            <div className="card-body text-center p-4">
              <div className="d-flex align-items-center justify-content-center text-white mb-3"
              style={{ transition: 'transform 0.3s ease'}}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Phone size={16} className="me-2" />
                <span className="big"> <a className='text-white' href="tel:8766391724">8766391724</a> / <a className='text-white' href="tel:8860365077">8860365077</a> </span>
              </div>
              <div
               style={{ transition: 'transform 0.3s ease'}}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              className="d-flex align-items-center justify-content-center text-white">
                <Mail size={16} className="me-2" />
                <span className="big"><a className='text-white' href="mailto:eonestep.education@gmail.com">eonestep.education@gmail.com</a></span>
              </div>
            </div>
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Contact Info */}
        {/* <div className="d-lg-none px-4 pb-4 position-relative" style={{zIndex: 10}}>
          <div className="card border-0 shadow-lg mx-auto" style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            maxWidth: '400px'
          }}>
            <div className="card-body text-center p-4">
              <div className="d-flex align-items-center justify-content-center text-white mb-3">
                <Phone size={16} className="me-2" />
                <span className="small">8766391724 / 8860365077</span>
              </div>
              <div className="d-flex align-items-center justify-content-center text-white">
                <Mail size={16} className="me-2" />
                <span className="small">eonestep.education@gmail.com</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes floatPulse {
            0% { 
              opacity: 0.6; 
              transform: translateY(0px) translateX(0px) scale(1); 
            }
            25% { 
              opacity: 0.8; 
              transform: translateY(-30px) translateX(15px) scale(1.1); 
            }
            50% { 
              opacity: 0.4; 
              transform: translateY(-10px) translateX(-10px) scale(0.9); 
            }
            75% { 
              opacity: 0.7; 
              transform: translateY(20px) translateX(5px) scale(1.05); 
            }
            100% { 
              opacity: 0.6; 
              transform: translateY(0px) translateX(0px) scale(1); 
            }
          }
          
          .min-vh-75 {
            min-height: 75vh;
          }
          
          /* Make sure background elements are visible */
          .position-absolute[style*="blur"] {
            will-change: transform, opacity;
            backface-visibility: hidden;
          }
          
          /* Responsive adjustments for background elements */
          @media (max-width: 768px) {
            .position-absolute[style*="400px"] {
              width: 250px !important;
              height: 250px !important;
            }
            .position-absolute[style*="350px"] {
              width: 200px !important;
              height: 200px !important;
            }
            .position-absolute[style*="300px"] {
              width: 180px !important;
              height: 180px !important;
            }
            .position-absolute[style*="380px"] {
              width: 220px !important;
              height: 220px !important;
            }
            .position-absolute[style*="250px"] {
              width: 150px !important;
              height: 150px !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default HeroBanner;