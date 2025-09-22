import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import logo from './../assets/logo.png'
import apiService from '../utils/apiService';
import { useAuth } from '../utils/AuthContext';
import { validate } from '../utils/formValidation';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import html2pdf from 'html2pdf.js';
import CertificatePDF from '../components/Certificate';

async function convertImagesToBase64(element) {
  const imgElements = element.querySelectorAll("img");

  for (let img of imgElements) {
    if (img.src.startsWith("data:")) {
      // already base64
      continue;
    }

    try {
      const res = await fetch(img.src, { mode: "cors" });
      const blob = await res.blob();

      const reader = new FileReader();
      const base64 = await new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });

      img.src = base64; // replace src with base64
    } catch (err) {
      console.error("Failed to convert image:", img.src, err);
    }
  }
}


  const VerifyCertificate =()=> {
  const {loading,setLoading } = useAuth();
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    enrollNo: '',
    rollNo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev =>(
      {
        ...prev,
        [name]:""
      }
    ))
  };

    const checkResultRules = {
    enrollNo: { required: true, minLength: 8, message: 'Enoll No is required' },
    rollNo: { required: true, minLength: 6, message: 'Roll No is required' },
  };

  const handleCheckResult = async () => {

    const payload = { enrollNumber: formData.enrollNo, rollNumber: formData.rollNo }
   

    const validationErrors = validate(formData, checkResultRules);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      toast.error('Please fix errors before submitting');
      return;
    }

    try {
        setLoading(true);
     const response = await apiService.post('/students/certificate',payload)
     setLoading(false);
      // navigate("/certificate",{state:{studentData:response?.data?.student}})
     setStudentData(response?.data?.student)
     setShowModal(true)
    } catch (error) {
      console.error('Fetch Result Failed:', error);
      setLoading(false);
      toast.error(error?.message || 'Fetch Result Failed. Please check your credentials.');
      return;
    }

    // Handle login logic here
  };

     const options = {
      margin: 0,
      filename: `${studentData?.enrollNumber}-certificate.pdf`,
      image: { type: "jpeg", quality: 2 },
      html2canvas: { scale: 1,useCORS: true }, // better quality
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    const handleDownload = async() => {
       const element = document.getElementById("certificate");
    // const element = document.getElementById("certificate");
    await convertImagesToBase64(element);
    html2pdf().set(options).from(element).save();
    setShowModal(false);
     setFormData(prev => ({
      ...prev,
      [name]: ''
    }));
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
          // background: rgba(255, 255, 255, 0.45);
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
          
            <div className="col-lg-6 col-md-6 py-md-5 py-sm-3 py-1 d-flex justify-content-center">
                     <img src={logo} alt=""style={{
      maxWidth: "100%",
      height: "auto",
      objectFit: "contain"
    }} />
            </div>

            <div className="col-lg-6 col-md-6 p-md-5 p-sm-3 p-1">
              <div className="login-form-section">
                <div className="w-100">
                  <div className="welcome-text">Welcome to Certificate Verification</div>
                  <div className="subtitle">Download Result eonestep</div>
                  
                  <div>
                    <div className="mb-3">
                      <input
                        type="text"
                           className={`form-control${errors.enrollNo ? ' is-invalid' : ''}`}
                        placeholder="Enrollment No"
                        name="enrollNo"
                        value={formData.enrollNo}
                        onChange={handleInputChange}
                        required
                      />
                        {errors.enrollNo && <div className="invalid-feedback">{errors.enrollNo}</div>}
                    </div>
                    
                    <div className="mb-4">
                      <input
                        type="text"
                           className={`form-control${errors.rollNo ? ' is-invalid' : ''}`}
                        placeholder="Roll No"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleInputChange}
                        required
                      />
                         {errors.rollNo && <div className="invalid-feedback">{errors.rollNo}</div>}
                    </div>
                    
                    <button 
                      type="button" 
                      className="btn btn-primary mb-3"
                      onClick={handleCheckResult}
                      disabled={loading}
                    >
                      Check Result {loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
                    </button>
                  </div>
                </div>
                 <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Certificate Ready</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The certificate for <b>{studentData?.studentName}</b> is ready.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDownload}>
            Download PDF
          </Button>
        </Modal.Footer>
      </Modal>

      <div style={{ display: "none" }}>
        <div id="certificate">
          <CertificatePDF studentDetails={studentData}/>
          {/* your full certificate design */}
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