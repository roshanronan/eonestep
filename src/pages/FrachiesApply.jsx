import React, { useState, useEffect } from 'react';
import apiService from '../utils/apiService';
import { toast } from "react-toastify";
import { validate } from '../utils/formValidation';
import { useAuth } from '../utils/AuthContext';
import { useParams } from 'react-router-dom';

const injectionPattern = /(<script.*?>.*?<\/script.*?>)|(;|--|\b(select|update|delete|insert|drop|alter|create|truncate|exec|union|sleep)\b)/i;


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
  totalStaff: '',
  secretarySign: null,
  examinerSign: null,
  invigilatorSign: null,
};

const initialEditFormState = {
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
  totalStaff: '',
  secretarySign: null,
  examinerSign: null,
  invigilatorSign: null,
}


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
  secretarySign: { required: true, message: 'Secretary Sign is required' },
};

const FranchiseApplyForm = ({ editMode = false }) => {
  const [formData, setFormData] = useState(!editMode ? initialFormState : initialEditFormState);
  const [errors, setErrors] = useState({});
  const [secretarySignPreview, setSecretarySignPreview] = useState(null);
  const [invigilatorSignPreview, setInvigilatorSignPreview] = useState(null);
  const [examinerSignPreview, setExaminerSignPreview] = useState(null);
  const { loading, setLoading, session } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    if (editMode && id) {
      async function fetchStudent() {
        try {
          const response = await apiService.get(`/franchise/${id}`);
          const franchise = response.data.franchise;
          setFormData({
            name: franchise.name,
            instituteName: franchise.instituteName,
            pincode: franchise.pincode,
            town: franchise.town,
            city: franchise.city,
            state: franchise.state,
            phone: franchise.phone,
            email: franchise.email,
            country: franchise.country,
            totalCoverArea: franchise.totalCoverArea,
            totalComputer: franchise.totalComputer,
            totalStaff: franchise.totalStaff,
          });
          if(franchise.examinerSign){
          // setExaminerSignPreview(import.meta.env.VITE_IMAGE_BASE_URL + franchise.examinerSign)
          setExaminerSignPreview(franchise.examinerSign)
}
          if(franchise.invigilatorSign){
          // setInvigilatorSignPreview(import.meta.env.VITE_IMAGE_BASE_URL + franchise.invigilatorSign)
          setInvigilatorSignPreview(franchise.invigilatorSign)
}
          if(franchise.secretarySign){
          // setSecretarySignPreview(import.meta.env.VITE_IMAGE_BASE_URL + franchise.secretarySign)
          setSecretarySignPreview(franchise.secretarySign)
     } 
      } catch (error) {
          toast.error("Failed to fetch franchise details");
        }
      }
      fetchStudent();
    }
  }, [editMode, id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      switch (name) {
        case 'secretarySign':
          if (files && files[0]) {
            if (files[0].size > 102400) {
              setErrors({ secretarySign: 'Image size must be less than 100KB.' })
            }else if(editMode && !formData.secretarySign && !secretarySignPreview){
              setErrors({ secretarySign: 'Image size must be less than 100KB.' })
            } else {
              setErrors({ secretarySign: '' })
            }

            setSecretarySignPreview(URL.createObjectURL(files[0]));
          } else {
            setSecretarySignPreview(null);
          }
          break;
        case 'examinerSign':
          if (files && files[0]) {
            if (files[0].size > 102400) {
              setErrors({ examinerSign: 'Image size must be less than 100KB.' })
            } else {
              setErrors({ examinerSign: '' })
            }

            setExaminerSignPreview(URL.createObjectURL(files[0]));
          } else {
            setExaminerSignPreview(null);
          }
          break;
        case 'invigilatorSign':
          if (files && files[0]) {
            if (files[0].size > 102400) {
              setErrors({ invigilatorSign: 'Image size must be less than 100KB.' })
            } else {
              setErrors({ invigilatorSign: '' })
            }

            setInvigilatorSignPreview(URL.createObjectURL(files[0]));
          } else {
            setInvigilatorSignPreview(null);
          }
          break;

        default:
          setInvigilatorSignPreview(null);
          setExaminerSignPreview(null);
          setSecretarySignPreview(null);

      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (value && injectionPattern.test(value)) {
        setErrors({ [name]: 'Invalid value detected.' })
      }
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData, validationRules);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const formPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formPayload.append(key, value);
        });

        setLoading(true);
      if(editMode){ 
 apiService.put(`/franchise/${id}/edit`,  formPayload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then(response => {
            toast.success(response?.message || 'Application Updated successfully!');
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
            console.error('Error submitting form:', error);
            toast.error(error?.message || 'Failed to update application. Please try again.');
          });
      }else{
          apiService.post('/franchise/apply',  formPayload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then(response => {
            toast.success(response?.message || 'Application submitted successfully!');
            setFormData(initialFormState); 
            setSecretarySignPreview(null)
            setExaminerSignPreview(null)
            setInvigilatorSignPreview(null)
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
            console.error('Error submitting form:', error);
            toast.error(error?.message || 'Failed to submit application. Please try again.');
           
          });
      }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }else{
      toast.error("Please fill the required field(s)")
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
            <div className="card" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
              <div className="form-header">
                <h2 className='m-0 text-white'><i class="fas fa-building me-2"></i>{editMode?'Update Franchise Details':'Franchise Apply With Eonestep'}</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h5 className="mb-2 fw-bold">Personal and Institute Information</h5>
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



                  <h5 className="mb-2 mt-4 fw-bold">Address Information</h5>

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
                        maxLength="6"
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

                  <h5 className="mb-2 mt-4 fw-bold">Contact Information</h5>
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
                        maxLength="10"
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
                        disabled={editMode && session?.user?.role == 'franchise'}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>



                  <h5 className="mb-2 mt-4 fw-bold">Franchise Details</h5>
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
                        min={1}
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
                        min={1}
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
                        min={1}
                      />
                      {errors.totalStaff && <div className="invalid-feedback">{errors.totalStaff}</div>}
                    </div>
                  </div>

                  <h5 className="mb-2 mt-4 fw-bold">Franchise Authority Sign</h5>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="secretarySign" className="form-label">Secretary Sign*</label>
                      <input
                        type="file"
                        className={`form-control ${errors.secretarySign ? 'is-invalid' : ''}`}
                        id="secretarySign"
                        name="secretarySign"
                        onChange={handleChange}
                        accept="image/*"
                      />
                      {errors.secretarySign && <div className="invalid-feedback">{errors.secretarySign}</div>}
                      {secretarySignPreview && (
                        <div className="mt-2">
                          <img
                            src={secretarySignPreview}
                            alt="Preview"
                            style={{
                              maxWidth: "100%",
                              maxHeight: 120,
                              borderRadius: 8,
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="examinerSign" className="form-label">Examiner Sign</label>
                      <input
                        type="file"
                        className={`form-control ${errors.examinerSign ? 'is-invalid' : ''}`}
                        id="examinerSign"
                        name="examinerSign"
                        // value={formData.examinerSign}
                        onChange={handleChange}
                        accept='image/*'
                      />
                      {errors.examinerSign && <div className="invalid-feedback">{errors.examinerSign}</div>}
                      {examinerSignPreview && (
                        <div className="mt-2">
                          <img
                            src={examinerSignPreview}
                            alt="Preview"
                            style={{
                              maxWidth: "100%",
                              maxHeight: 120,
                              borderRadius: 8,
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="invigilatorSign" className="form-label">Inviglator Sign</label>
                      <input
                        type="file"
                        className={`form-control ${errors.invigilatorSign ? 'is-invalid' : ''}`}
                        id="invigilatorSign"
                        name="invigilatorSign"
                        // value={formData.invigilatorSign}
                        onChange={handleChange}
                        accept='image/*'
                      />
                      {errors.invigilatorSign && <div className="invalid-feedback">{errors.invigilatorSign}</div>}
                      {invigilatorSignPreview && (
                        <div className="mt-2">
                          <img
                            src={invigilatorSignPreview}
                            alt="Preview"
                            style={{
                              maxWidth: "100%",
                              maxHeight: 120,
                              borderRadius: 8,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <div className="row">
                   <div className="col-md-4 mb-3">
                    <label htmlFor="franchiseStamp" className="form-label">Franchise Stamp</label>
                    <input
                      type="file"
                      className={`form-control ${errors.franchiseStamp ? 'is-invalid' : ''}`}
                      id="franchiseStamp"
                      name="franchiseStamp"
                      // value={formData.invigilatorSign}
                      onChange={handleChange}
                       accept='image/*'
                    />
                    {errors.franchiseStamp && <div className="invalid-feedback">{errors.franchiseStamp}</div>}
                    {franchiseStampPreview && (
                      <div className="mt-2">
                        <img
                          src={franchiseStampPreview}
                          alt="Preview"
                          style={{
                            maxWidth: "100%",
                            maxHeight: 120,
                            borderRadius: 8,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div> */}



                  <div className="d-flex gap-2 justify-content-center">
                    <button type="submit" className="btn btn-primary btn-lg col-md-6 col-12 my-md-5 my-3" disabled={loading}>
                     { editMode? 'Update Frachise': 'Apply For Franchise'} {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
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