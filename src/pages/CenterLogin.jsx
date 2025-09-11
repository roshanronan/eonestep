import React, { useState } from 'react';
import { X, Mail, Eye, EyeOff } from 'lucide-react';
import logo from './../assets/logo.png';
import { useAuth } from '../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import apiService from '../utils/apiService';
import { validate } from '../utils/formValidation';



export default function CenterLogin() {
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [formData, setFormData] = useState({
    centerId: '',
    password: '',
    forgotEmail: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { login,loading,setLoading } = useAuth();
  const navigate = useNavigate();

  const loginRules = {
    centerId: { required: true, minLength: 3, message: 'Center ID is required' },
    password: { required: true, minLength: 6, message: 'Password is required' },
  };
  const forgotRules = {
    forgotEmail: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Valid email required' },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleLogin = async() => {
  
    const validationErrors = validate(formData, loginRules);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      toast.error('Please fix errors before submitting');
      return;
    }
    try {
        setLoading(true);
      const response = await apiService.post('/auth/login', {
        email: formData.centerId,    
        password: formData.password,
      });
      setLoading(false);

      
      if(response?.data?.user?.mustChangePassword){
        navigate('/eonestep/change-password',{state:{token:response?.data?.token }});
        return;
      }
      login(response?.data); 
      // toast.success('Login successful!');
      if(response?.data?.user?.role == 'franchise'){
        navigate('/eonestep/center-dashboard');
      }
      if(response?.data?.user?.role == 'admin'){
        navigate('/eonestep/admin-dashboard');
      }
     
    } catch (error) {
      console.error('Login faileddd:', error);
      setLoading(false);
      toast.error(error?.message || 'Login failed. Please check your credentials.');
      return;
    }

    
  };

  const handleForgotPassword = async() => {
    const validationErrors = validate(formData, forgotRules);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      toast.error('Please enter a valid email address', { autoClose: 4000 });
      return;
    }
  try {
    setLoading(true);
      const response = await apiService.post('/auth/forgot-password', {
      email: formData.forgotEmail,    
    });   
    // Handle forgot password logic here
    if(response?.status == 200){
      setLoading(false);
    toast.success('Reset link sent to your email!');
    setShowForgotModal(false);
    setFormData(prev => ({ ...prev, forgotEmail: '' }));
    }
  } catch (error) {
      setLoading(false)
      console.error('Forgot password error:', error);
      toast.error(error?.message || 'Failed to send reset link. Please try again.');
      return;   
  }
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
        }
        
        .login-card {
          background: rgba(255, 255, 255, 0.9);
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
          color: #0a6cdcff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .forgot-link:hover {
          color: #0a6cdcff;
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
                     <img src={logo} alt="" style={{width:'100%'}}/>
            </div>

            <div className="col-lg-6 col-md-6 col-12 p-md-5">
              <div className="login-form-section">
                <div className="w-100">
                  <div className="welcome-text">Welcome to Center Login</div>
                  <div className="subtitle">sign in continue to eonestep</div>
                  
                  <div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control${errors.centerId ? ' is-invalid' : ''}`}
                        placeholder="Center ID/Email"
                        name="centerId"
                        value={formData.centerId}
                        onChange={handleInputChange}
                      />
                       {errors.centerId && <div className="invalid-feedback">{errors.centerId}</div>}
                    </div>
                    
                    <div className="mb-4 position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control${errors.password ? ' is-invalid' : ''}`}
                        placeholder="Center Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      <span
                        className="position-absolute end-0 top-50 translate-middle-y me-3"
                        style={{ cursor: 'pointer', zIndex: 2 }}
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </span>
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    
                    <button 
                      type="button" 
                      className="btn btn-primary mb-3"
                      onClick={handleLogin}
                      disabled={loading}
                    >
                      Center Login {loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
                    </button>
                    
                    <div className="text-left">
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
                      className={`form-control${errors.forgotEmail ? ' is-invalid' : ''}`}
                      placeholder="Enter your email address"
                      name="forgotEmail"
                      value={formData.forgotEmail}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.forgotEmail && <div className="invalid-feedback">{errors.forgotEmail}</div>}
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