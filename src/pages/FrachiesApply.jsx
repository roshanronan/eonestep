import React, { useState } from 'react';

const FranchiseApplyForm = () => {
  const [formData, setFormData] = useState({
    personName: '',
    instituteName: '',
    pinCode: '',
    town: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    country: '',
    coverArea: '',
    computerCount: '',
    staffCount: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.personName.trim()) newErrors.personName = 'Person name is required';
    if (!formData.instituteName.trim()) newErrors.instituteName = 'Institute name is required';
    if (!formData.pinCode.trim()) newErrors.pinCode = 'Pin code is required';
    if (!formData.town.trim()) newErrors.town = 'Town is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.coverArea.trim()) newErrors.coverArea = 'Cover area is required';
    if (!formData.computerCount.trim()) newErrors.computerCount = 'Computer count is required';
    if (!formData.staffCount.trim()) newErrors.staffCount = 'Staff count is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="alert alert-success">
              <h4 className="alert-heading">Thank you for your application!</h4>
              <p>We have received your franchise application and will contact you shortly.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gradient-container">
      <div className="container py-5">
        <div className="row justify-content-center">
        <div className="col-md-8 ">
          <div className="card">
            <div className="card-header text-white text-center">
              <h2 className='m-0 text-primary'>Franchise Apply With Eonestep</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h5 className="mb-4">Personal and Institute Information</h5>
                <div className="mb-3">
                  <label htmlFor="personName" className="form-label">Person Name*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.personName ? 'is-invalid' : ''}`}
                    id="personName"
                    name="personName"
                    value={formData.personName}
                    onChange={handleChange}
                  />
                  {errors.personName && <div className="invalid-feedback">{errors.personName}</div>}
                </div>

                <div className="mb-3">
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

                <h5 className="mb-4 mt-4">Address Information</h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="pinCode" className="form-label">Pin Code*</label>
                    <input
                      type="text"
                      className={`form-control ${errors.pinCode ? 'is-invalid' : ''}`}
                      id="pinCode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                    />
                    {errors.pinCode && <div className="invalid-feedback">{errors.pinCode}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
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
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
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
                  <div className="col-md-6 mb-3">
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

                <div className="mb-3">
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

                <h5 className="mb-4 mt-4">Franchise Details</h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="coverArea" className="form-label">Total Cover Area (in Sqft)*</label>
                    <input
                      type="number"
                      className={`form-control ${errors.coverArea ? 'is-invalid' : ''}`}
                      id="coverArea"
                      name="coverArea"
                      value={formData.coverArea}
                      onChange={handleChange}
                    />
                    {errors.coverArea && <div className="invalid-feedback">{errors.coverArea}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="computerCount" className="form-label">Total No. of Computers*</label>
                    <input
                      type="number"
                      className={`form-control ${errors.computerCount ? 'is-invalid' : ''}`}
                      id="computerCount"
                      name="computerCount"
                      value={formData.computerCount}
                      onChange={handleChange}
                    />
                    {errors.computerCount && <div className="invalid-feedback">{errors.computerCount}</div>}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="staffCount" className="form-label">Total No. of Staff*</label>
                  <input
                    type="number"
                    className={`form-control ${errors.staffCount ? 'is-invalid' : ''}`}
                    id="staffCount"
                    name="staffCount"
                    value={formData.staffCount}
                    onChange={handleChange}
                  />
                  {errors.staffCount && <div className="invalid-feedback">{errors.staffCount}</div>}
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Apply For Franchise
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