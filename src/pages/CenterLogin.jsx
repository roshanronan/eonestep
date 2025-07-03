import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import logo from './../assets/logo.jpg'

export default function CenterLogin() {
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [formData, setFormData] = useState({
    centerId: '',
    password: '',
    forgotEmail: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = () => {
    console.log('Login data:', { centerId: formData.centerId, password: formData.password });
    // Handle login logic here
  };

  const handleForgotPassword = () => {
    console.log('Forgot password email:', formData.forgotEmail);
    // Handle forgot password logic here
    setShowForgotModal(false);
    setFormData(prev => ({ ...prev, forgotEmail: '' }));
  };

  return (
    <>
      
      <style jsx>{`
        .login-container {
          min-height: 80vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .login-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 100%;
        }
        
        
        .welcome-text {
          color: #2c5282;
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        
        .subtitle {
          color: #4a5568;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .form-control {
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          padding: 15px 20px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }
        
        .btn-login {
          background: linear-gradient(135deg, #2c5282 0%, #2a4365 100%);
          border: none;
          border-radius: 10px;
          padding: 15px 30px;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .btn-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(44, 82, 130, 0.3);
          color: white;
        }
        
        .forgot-link {
          color: #e53e3e;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .forgot-link:hover {
          color: #c53030;
          text-decoration: underline;
        }
        
        .modal-content {
          border-radius: 10px;
          border: none;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .modal-header {
          border-bottom: 1px solid #e2e8f0;
          padding: 25px;
        }
        
        .modal-title {
          color: #2c5282;
          font-weight: 600;
        }
        
        .modal-body {
          padding: 30px 25px;
        }
        
        .btn-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #718096;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 10px;
          padding: 12px 30px;
          font-weight: 600;
        }
        
        .btn-secondary {
          background: #e2e8f0;
          border: none;
          border-radius: 10px;
          padding: 12px 30px;
          color: #4a5568;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .login-card {
            margin: 10px;
            border-radius: 15px;
          }
          
          .logo-section,
          .login-form-section {
            padding: 40px 20px;
            min-height: auto;
          }
          
          .welcome-text {
            font-size: 1.5rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="login-container">
        <div className="login-card container">
          <div className="row g-0">
          
            <div className="col-lg-6 col-md-6 py-5 d-flex justify-content-center">
                     <img src={logo} alt="" />
            </div>

            <div className="col-lg-6 col-md-6 p-5">
              <div className="login-form-section">
                <div className="w-100">
                  <div className="welcome-text">Welcome to Center Login</div>
                  <div className="subtitle">sign in continue to eonestep</div>
                  
                  <div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Center ID"
                        name="centerId"
                        value={formData.centerId}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Center Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <button 
                      type="button" 
                      className="btn btn-login mb-3"
                      onClick={handleLogin}
                    >
                      Center Login
                    </button>
                    
                    <div className="text-center">
                      <a 
                        href="#" 
                        className="forgot-link"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowForgotModal(true);
                        }}
                      >
                        Forget Password ?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <Mail className="me-2" size={20} />
                  Forgot Password
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowForgotModal(false)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="modal-body">
                <p className="mb-3 text-muted">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
                <div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      name="forgotEmail"
                      value={formData.forgotEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setShowForgotModal(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={handleForgotPassword}
                    >
                      Send Reset Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}