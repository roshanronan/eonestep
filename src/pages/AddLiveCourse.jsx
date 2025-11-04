import React, { useState, useEffect } from 'react';
import apiService from '../utils/apiService';
import { useLocation, useParams,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const initialState = {
    title: '',
    subtitle: '',
    description: '',
    topicToLearn: '',
    startTime: '',
    endTime: '',
    level: 'beginner',
    seats: 0,
    price: 0,
    status: 'upcoming',
    meetingLink: '',
    thumbnail: '',
    instructorId: ''
  }

function formatDateTimeLocal(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  // Get local date parts
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const AddLiveCourse =({ editMode = false}) =>{
  const [formData, setFormData] = useState(initialState);
  const {state}=useLocation()
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [instructors,setInstructors] = useState([]);
  const courseDetail = state?.courseDetail;
  const navigate = useNavigate()

  useEffect(() => {
    getInstructors()
    if (editMode) {
      setFormData({
        ...courseDetail,
        startTime: formatDateTimeLocal(courseDetail?.startTime),
        endTime: formatDateTimeLocal(courseDetail?.endTime)
      });
      if (courseDetail.thumbnail) {
        setThumbnailPreview(courseDetail.thumbnail);
      }
    }
  }, [editMode]);


    const getInstructors = () => {
        apiService.get('/instructors').then(response => {
            setInstructors(response.data);
        }).catch(error => {
            console.error('Error fetching instructors data:', error);
        });
    }

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.startTime) {
      newErrors.startTime = 'Start time is required';
    }

    if (!formData.endTime) {
      newErrors.endTime = 'End time is required';
    }

    if (formData.startTime && formData.endTime) {
      if (new Date(formData.startTime) >= new Date(formData.endTime)) {
        newErrors.endTime = 'End time must be after start time';
      }
    }

    if (!formData.instructorId) {
      newErrors.instructorId = 'Please select an instructor';
    }

    if (formData.seats < 0) {
      newErrors.seats = 'Seats must be a positive number';
    }

    if (formData.price < 0) {
      newErrors.price = 'Price must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
       if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      if (files && files[0]) {
        setThumbnailPreview(URL.createObjectURL(files[0]));
      } else {
        setThumbnailPreview(null);
      }
    }else{
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));}

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setThumbnailFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setThumbnailPreview(reader.result);
          setFormData(prev => ({
            ...prev,
            thumbnail: reader.result
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a valid image file');
      }
    }
  };

  const handleRemoveThumbnail = () => {
    setThumbnailFile(null);
    setThumbnailPreview('');
    setFormData(prev => ({
      ...prev,
      thumbnail: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please filled the required field(s)')
      return;
    }
      try {
        setLoading(true);
        const formPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formPayload.append(key, value);
        }); 

        let response;
        if(editMode){
          response = await apiService.put(
          "/livecourses/live-courses/" + courseDetail.id,
          formPayload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
          setLoading(false);
        }else{
              response = await apiService.post(
          "/livecourses/live-courses",
          formPayload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        
          setLoading(false);
          setFormData(initialState)
        }
      
        toast.success(response?.message || "Course Added successfully!");
        navigate('/live-classes')
        // Optionally reset form or handle response
        
      } catch (error) {
        setLoading(false);
        toast.error(error?.message || "Failed to add class.");
      }
     
  };

  const handleReset = () => {
    setFormData(initialState);
    setThumbnailPreview('');
    setThumbnailFile(null);
    setErrors({});
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow">
              <div className="card-header text-white text-center py-3" style={{background:'linear-gradient(135deg, #667eea 0%, #2A476E 100%)'}}>
           <h2 className="mb-0 text-white">
                  {editMode ? 'Edit Live Course' : 'Create Live Course'}
                </h2>
              </div>
              <div className="card-body p-4">
                <div className="row g-3">
                  
                  {/* Title */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                      placeholder="Enter course title"
                    />
                    {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                  </div>

                  {/* Subtitle */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">Subtitle</label>
                    <input
                      type="text"
                      name="subtitle"
                      value={formData.subtitle}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter course subtitle"
                    />
                  </div>

                  {/* Description */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className="form-control"
                      placeholder="Enter course description"
                    />
                  </div>

                  {/* Topics to Learn */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-book me-2"></i>Topics to Learn
                    </label>
                    <textarea
                      name="topicToLearn"
                      value={formData.topicToLearn}
                      onChange={handleChange}
                      rows="3"
                      className="form-control"
                      placeholder="Enter topics that will be covered(Separate topics by comma(,))"
                    />
                  </div>

                  {/* Start Time */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-calendar me-2"></i>Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      name="startTime"
                      value={formatDateTimeLocal(formData?.startTime)}
                      onChange={handleChange}
                      className={`form-control ${errors.startTime ? 'is-invalid' : ''}`}
                    />
                    {errors.startTime && <div className="invalid-feedback">{errors.startTime}</div>}
                  </div>

                  {/* End Time */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-clock me-2"></i>End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      name="endTime"
                      value={formatDateTimeLocal(formData.endTime)}
                      onChange={handleChange}
                      className={`form-control ${errors.endTime ? 'is-invalid' : ''}`}
                    />
                    {errors.endTime && <div className="invalid-feedback">{errors.endTime}</div>}
                  </div>

                  {/* Instructor */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-person me-2"></i>Instructor <span className="text-danger">*</span>
                    </label>
                    <select
                      name="instructorId"
                      value={formData.instructorId}
                      onChange={handleChange}
                      className={`form-select ${errors.instructorId ? 'is-invalid' : ''}`}
                    >
                      <option value="">Select an instructor</option>
                      {instructors.map(instructor => (
                        <option key={instructor.id} value={instructor.id}>
                          {instructor.fullName}
                        </option>
                      ))}
                    </select>
                    {errors.instructorId && <div className="invalid-feedback">{errors.instructorId}</div>}
                  </div>

                  {/* Level */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Level</label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="upcoming">Upcoming</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  {/* Seats */}
                  <div className="col-md-3">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-people me-2"></i>Seats
                    </label>
                    <input
                      type="number"
                      name="seats"
                      value={formData.seats}
                      onChange={handleChange}
                      min="0"
                      className={`form-control ${errors.seats ? 'is-invalid' : ''}`}
                      placeholder="0"
                    />
                    {errors.seats && <div className="invalid-feedback">{errors.seats}</div>}
                  </div>

                  {/* Price */}
                  <div className="col-md-3">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-currency-dollar me-2"></i>Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                      placeholder="0.00"
                    />
                    {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                  </div>

                  {/* Meeting Link */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-link-45deg me-2"></i>Course Promo/Youtube Link
                    </label>
                    <input
                      type="url"
                      name="meetingLink"
                      value={formData.meetingLink}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="https://meet.example.com/..."
                    />
                  </div>

                  {/* Thumbnail Upload */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-image me-2"></i>Course Thumbnail
                    </label>
                    <input
                      type="file"
                      name='thumbnail'
                      accept="image/*"
                      onChange={handleChange}
                      className="form-control"
                    />
                    <small className="form-text text-muted">
                      Supported formats: JPG, PNG, GIF (Max size: 3MB)
                    </small>
                  </div>

                  {/* Thumbnail Preview */}
                  {thumbnailPreview && (
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <span className="fw-semibold">Thumbnail Preview</span>
                          <button
                            onClick={handleRemoveThumbnail}
                            className="btn btn-sm btn-danger"
                          >
                            <i className="bi bi-trash me-1"></i>Remove
                          </button>
                        </div>
                        <div className="card-body text-center">
                          <img
                            src={thumbnailPreview}
                            alt="Thumbnail preview"
                            style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
                            className="img-fluid rounded"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="col-12 mt-4">
                    <div className="d-flex gap-2 justify-content-end">
                      
                      <button
                        onClick={handleReset}
                        className="btn btn-outline-secondary"
                      >
                        <i className="bi bi-arrow-clockwise me-2"></i>Reset
                      </button>

                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="btn btn-primary"
                      >
                   
                          <>
                            <i className="bi bi-check-circle me-2"></i>
                            {editMode ? 'Update Course' : 'Create Course'}
                            {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                          </>
                       
                      </button>
                    </div>
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
export default AddLiveCourse