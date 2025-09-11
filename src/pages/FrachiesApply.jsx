import React, { useState } from 'react';
import apiService from '../utils/apiService';
import { toast } from "react-toastify";
import { validate } from '../utils/formValidation';
import { useAuth } from '../utils/AuthContext';

const initialFormState = {
  name: '',
  instituteName: '',  
  pincode: '',
  town: '',
  city: '',     
  state: '',
  phone: '',
  email: '',
  country: '',
  totalCoverArea: '',
  totalComputer: '',
  totalStaff: ''
}; 

const validationRules = {
  name: { required: true, minLength: 2, message: 'Person name is required' },
  instituteName: { required: true, minLength: 2, message: 'Institute name is required' },
  pincode: { required: true, pattern: /^\d{6}$/, message: 'Pin code must be 6 digits' },
  town: { required: true, message: 'Town is required' },
  city: { required: true, message: 'City is required' },
  state: { required: true, message: 'State is required' },
  phone: { required: true, pattern: /^\d{10}$/, message: 'Phone must be 10 digits' },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email is invalid' },
  country: { required: true, message: 'Country is required' },
  totalCoverArea: { required: true, message: 'Total Cover area is required' },
  totalComputer: { required: true, message: 'Total Computer count is required' },
  totalStaff: { required: true, message: 'Total Staff count is required' },
};

const FranchiseApplyForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {loading,setLoading}=useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData, validationRules);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        apiService.post('/franchise/apply', formData)
          .then(response => {
            // console.log('Form submitted successfully:', response); 
            toast.success(response?.message || 'Application submitted successfully!'  );
            setIsSubmitted(true);
            setFormData(initialFormState); // Reset form
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
            console.error('Error submitting form:', error);
            toast.error(error?.message || 'Failed to submit application. Please try again.');
            // Handle submission error (e.g., show a notification)
          }); 
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  // if (isSubmitted) {
  //   return (
  //     <div className="container mt-5">
  //       <div className="row justify-content-center">
  //         <div className="col-md-8">
  //           <div className="alert alert-success">
  //             <h4 className="alert-heading">Thank you for your application!</h4>
  //             <p>We have received your franchise application and will contact you shortly.</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="gradient-container">
      <div className="container py-5">
        <div className="row justify-content-center">
        <div className="col-md-8 ">
          <div className="card" style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
            <div className="form-header">
              <h2 className='m-0 text-white'><i class="fas fa-building me-2"></i>Franchise Apply With Eonestep</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h5 className="mb-4">Personal and Institute Information</h5>
                <div className="row mb-3">
                  <div className="col-md-4 mb-3">
                  <label htmlFor="name" className="form-label">Person Name*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className=" col-md-8 mb-3">
                  <label htmlFor="instituteName" className="form-label">Name Of Institute*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.instituteName ? 'is-invalid' : ''}`}
                    id="instituteName"
                    name="instituteName"
                    value={formData.instituteName}
                    onChange={handleChange}
                  />
                  {errors.instituteName && <div className="invalid-feedback">{errors.instituteName}</div>}
                </div>
                </div>

                

                <h5 className="mb-4 mt-4">Address Information</h5>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="pincode" className="form-label">Pin Code*</label>
                    <input
                      type="text"
                      className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                    {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="town" className="form-label">Town*</label>
                    <input
                      type="text"
                      className={`form-control ${errors.town ? 'is-invalid' : ''}`}
                      id="town"
                      name="town"
                      value={formData.town}
                      onChange={handleChange}
                    />
                    {errors.town && <div className="invalid-feedback">{errors.town}</div>}
                  </div>
                   <div className="col-md-4 mb-3">
                    <label htmlFor="city" className="form-label">City*</label>
                    <input
                      type="text"
                      className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </div>
                </div>

                <div className="row">
                 
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state" className="form-label">State*</label>
                    <input
                      type="text"
                      className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                  </div>
                  <div className=" col-md-4 mb-3">
                  <label htmlFor="country" className="form-label">Country*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                </div>
                </div>

                <h5 className="mb-4 mt-4">Contact Information</h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone*</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email*</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>



                <h5 className="mb-4 mt-4">Franchise Details</h5>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="totalCoverArea" className="form-label">Total Cover Area (in Sqft)*</label>
                    <input
                      type="number"
                      className={`form-control ${errors.totalCoverArea ? 'is-invalid' : ''}`}
                      id="totalCoverArea"
                      name="totalCoverArea"
                      value={formData.totalCoverArea}
                      onChange={handleChange}
                    />
                    {errors.totalCoverArea && <div className="invalid-feedback">{errors.totalCoverArea}</div>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="totalComputer" className="form-label">Total No. of Computers*</label>
                    <input
                      type="number"
                      className={`form-control ${errors.totalComputer ? 'is-invalid' : ''}`}
                      id="totalComputer"
                      name="totalComputer"
                      value={formData.totalComputer}
                      onChange={handleChange}
                    />
                    {errors.totalComputer && <div className="invalid-feedback">{errors.totalComputer}</div>}
                  </div>
                    <div className="col-md-4 mb-4">
                  <label htmlFor="totalStaff" className="form-label">Total No. of Staff*</label>
                  <input
                    type="number"
                    className={`form-control ${errors.totalStaff ? 'is-invalid' : ''}`}
                    id="totalStaff"
                    name="totalStaff"
                    value={formData.totalStaff}
                    onChange={handleChange}
                  />
                  {errors.totalStaff && <div className="invalid-feedback">{errors.totalStaff}</div>}
                </div>
                </div>

              

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                    Apply For Franchise {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FranchiseApplyForm;