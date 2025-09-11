import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import logo from './../assets/logo.jpg'

  const VerifyCertificate =()=> {
  const [formData, setFormData] = useState({
    enrollNo: '',
    rollNo: '',
    forgotEmail: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckResult = () => {
    console.log('Login data:', { enrollNo: formData.enrollNo, rollNo: formData.rollNo });
    // Handle login logic here
  };


  return (
    <>
      
      <style jsx>{`
        .login-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.45);
        }
        
        .login-card {
          background: white;
          border-radius: 8px;
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
          border-radius: 8px;
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
          border-radius: 8px;
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
          border-radius: 8px;
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
          border-radius: 8px;
          padding: 12px 30px;
          font-weight: 600;
        }
        
        .btn-secondary {
          background: #e2e8f0;
          border: none;
          border-radius: 8px;
          padding: 12px 30px;
          color: #4a5568;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .login-card {
            margin: 10px;
            border-radius: 8px;
          }
          
          .logo-section,
          .login-form-section {
            padding: 40px 2px;
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
                     <img src={logo} alt="" style={{width:'100%'}} />
            </div>

            <div className="col-lg-6 col-md-6 p-5">
              <div className="login-form-section">
                <div className="w-100">
                  <div className="welcome-text">Welcome to Certificate Verification</div>
                  <div className="subtitle">Download Result eonestep</div>
                  
                  <div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enrollment No"
                        name="enrollNo"
                        value={formData.enrollNo}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Roll No"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <button 
                      type="button" 
                      className="btn btn-primary mb-3"
                      onClick={handleCheckResult}
                    >
                      Check Result
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyCertificate