import React, { useState, useEffect } from "react";
import apiService from "../utils/apiService";
import { toast } from "react-toastify";
import { useAuth } from "../utils/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import {
  courses,
  guardianTypes,
  genders,
  idTypes,
  subjects,
  states,
} from "../utils/Constant";

const StudentRegistrationForm = ({ editMode = false }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    courseName: "",
    guardianType: "",
    gender: "",
    fatherName: "",
    dob: "",
    pinCode: "",
    town: "",
    district: "",
    state: "",
    idProof: "",
    idNumber: "",
    imageUpload: null,
    phone: "",
    email: "",
    password: "",
    subjectName: "",
    selectFromSession: "",
    selectToSession: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const { session,loading,setLoading } = useAuth();
  const { state } = useLocation();
  const studentId = state?.student?.id || null;
  useEffect(() => {
    if (editMode && studentId) {
      async function fetchStudent() {
        try {
          const response = await apiService.get(`/students/${studentId}`);
          const student = response.data.student;
          setFormData({
            studentName: student.studentName || "",
            courseName: student.Courses[0].courseName || "",
            guardianType: student.guardianType || "",
            gender: student.gender || "",
            fatherName: student.fatherName || "",
            dob: student.dob || "",
            pinCode: student.pinCode || "",
            town: student.town || "",
            district: student.district || "",
            state: student.state || "",
            idProof: student.idProof || "",
            idNumber: student.idNumber || "",
            imageUpload: null, // image preview handled separately
            phone: student.phone || "",
            email: student.email || "",
            password: "", // do not prefill password
            subjectName: student.Courses[0].subjects || "",
            selectFromSession: student.selectFromSession || "",
            selectToSession: student.selectToSession || "",
          });
          if (student.imageUpload) {
            // setImagePreview(import.meta.env.VITE_IMAGE_BASE_URL + student.imageUpload);
             setImagePreview(student.imageUpload);
          }
        } catch (error) {
          console.log("error",error)
          toast.error("Failed to fetch student details");
        }
      }
      fetchStudent();
    }
  }, [editMode, studentId]);
 const injectionPattern = /(<script.*?>.*?<\/script.*?>)|(;|--|\b(select|update|delete|insert|drop|alter|create|truncate|exec|union|sleep)\b)/i;
 


  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      if (files && files[0]) {
        setImagePreview(URL.createObjectURL(files[0]));
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
       if (value && injectionPattern.test(value)) {
      setErrors({[name]:'Invalid value detected.'})
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

  

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required";
    }

    if (!formData.courseName) {
      newErrors.courseName = "Course selection is required";
    }

    if (!formData.guardianType) {
      newErrors.guardianType = "Guardian type is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "Father/Guardian name is required";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!formData.pinCode.trim()) {
      newErrors.pinCode = "Pin code is required";
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = "Pin code must be 6 digits";
    }

    if (!formData.town.trim()) {
      newErrors.town = "Town is required";
    }

    if (!formData.district.trim()) {
      newErrors.district = "District is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    // Image upload validation
    // In edit mode, image is required only if there is no preview
    if (editMode) {
      if (!formData.imageUpload && !imagePreview) {
        newErrors.imageUpload = "Image is required";
      } else if (formData.imageUpload && formData.imageUpload.size > 102400) {
        newErrors.imageUpload = "Image size must be less than 100KB";
      }
    } else {
      if (!formData.imageUpload) {
        newErrors.imageUpload = "Image is required";
      } else if (formData.imageUpload.size > 102400) {
        newErrors.imageUpload = "Image size must be less than 100KB";
      }
    }

    // if (!formData.idProof) {
    //   newErrors.idProof = 'ID proof type is required';
    // }

    // if (!formData.idNumber.trim()) {
    //   newErrors.idNumber = 'ID number is required';
    // }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // if (!formData.password) {
    //   newErrors.password = "Password is required";
    // } else if (formData.password.length < 6) {
    //   newErrors.password = "Password must be at least 6 characters";
    // }

    // if (!formData.subjectName.trim()) {
    //   newErrors.subjectName = 'Subject name is required';
    // }

    if (!formData.selectFromSession) {
      newErrors.selectFromSession = "From session is required";
    }

    if (!formData.selectToSession) {
      newErrors.selectToSession = "To session is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // 
      try {
        // Prepare form data for file upload
        setLoading(true);
        const formPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formPayload.append(key, value);
        });
        formPayload.append("franchise_id", session.user.franchiseId);

        let response;
        if(editMode){
          response = await apiService.put(
          "/students/register/" + studentId,
          formPayload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
          setLoading(false);
        }else{
              response = await apiService.post(
          "/students/register",
          formPayload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
          setIsSubmitted(true);
          setImagePreview(null)
          setLoading(false);
        }
      
        toast.success(response?.message || "Student registered successfully!");
        // Optionally reset form or handle response
      } catch (error) {
          setLoading(false);
        toast.error(error?.message || "Failed to register student.");
        setIsSubmitted(false);
      }
    } else {
      setErrors(newErrors);
      toast.error('Please filled the required field(s)')
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      studentName: "",
      courseName: "",
      guardianType: "",
      gender: "",
      fatherName: "",
      dob: "",
      pinCode: "",
      town: "",
      district: "",
      state: "",
      idProof: "",
      idNumber: "",
      imageUpload: null,
      phone: "",
      email: "",
      password: "",
      subjectName: "",
      selectFromSession: "",
      selectToSession: "",
    });
    setErrors({});
    setImagePreview(null);
  };

  if (isSubmitted) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="alert alert-success text-center">
              <h4> { editMode? 'Details Updated Successfully!' :'Registration Successful!'}</h4>
              <p>
               { editMode?'Student details has been updated.':'Student application has been submitted.'}
              </p>
              <button className="btn btn-primary mt-3" onClick={resetForm}>
                Register Another Student
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: "1200px" }}>
      <div className="row">
        <div className="col-12">
          <div className="card shadow-lg">
            <div className="form-header">
              <h2 className="text-white">
                <i className="fas fa-user-graduate me-2"></i>
               { editMode? 'Edit Student Details': 'Student Registration Form'}
              </h2>
                 </div>
            <div className="card-body p-4">
              <div>
                {/* Row 1: Student Name, Course Name, Guardian Type */}
                <div className="row mb-3">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Student Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.studentName ? "is-invalid" : ""
                      }`}
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="Enter student name"
                    />
                    {errors.studentName && (
                      <div className="invalid-feedback">
                        {errors.studentName}
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    {/* <label className="form-label">Course Name</label>
                    <select
                      className={`form-select ${errors.courseName ? 'is-invalid' : ''}`}
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select> */}
                    <label className="form-label">Course Name</label>
                    <select
                      className={`form-select ${
                        errors.courseName ? "is-invalid" : ""
                      }`}
                      id="courseSelect"
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleInputChange}
                    >
                      <option value="" selected disabled>
                        -- Please select a course --
                      </option>

                      <optgroup label="1 Month Course">
                        <option value="ADIT">
                          ADIT (ADVANCE DIPLOMA IN INFORMATION TECHNOLOGY)
                        </option>
                        <option value="ADCA">
                          ADCA (ADVANCE DIPLOMA IN COMPUTER APPLICATION)
                        </option>
                        <option value="ADWD">
                          ADWD (ADVANCE DIPLOMA IN WEBSITE DESIGNING)
                        </option>
                        <option value="ADOM">
                          ADOM (ADVANCE DIPLOMA IN OFFICE MANAGEMENT)
                        </option>
                        <option value="ADDP">
                          ADDP (ADVANCE DIPLOMA IN DESKTOP PUBLISHING)
                        </option>
                        <option value="DOAM">
                          DOAM (DIPLOMA IN OFFICE APPLICATION AND MANAGEMENT)
                        </option>
                        <option value="DGD">
                          DGD (DIPLOMA IN GRAPHIC DESIGNING)
                        </option>
                      </optgroup>

                      <optgroup label="3 Month Course">
                        <option value="CCF">
                          CCF (CERTIFICATE IN COMPUTER FUNDAMENTALS)
                        </option>
                        <option value="COA">
                          COA (CERTIFICATE IN OFFICE AUTOMATION)
                        </option>
                        <option value="CET">
                          CET (CERTIFICATE IN ENGLISH TYPING)
                        </option>
                        <option value="DFA">
                          DFA (PS EXCELLENT EDUCATIONAL HUB)
                        </option>
                        <option value="CT">CT (CERTIFICATE IN TALLY)</option>
                        <option value="CAC">
                          CAC (CERTIFICATE IN AUTO CAD)
                        </option>
                        <option value="CDP">
                          CDP (CERTIFICATE IN .NET PROGRAMMING)
                        </option>
                        <option value="CP">CP (CERTIFICATE IN PHP)</option>
                        <option value="CHT">
                          CHT (CERTIFICATE IN HINDI TYPING)
                        </option>
                      </optgroup>

                      <optgroup label="6 Month Course">
                        <option value="DIT">
                          DIT (DIPLOMA IN INFORMATION TECHNOLOGY)
                        </option>
                        <option value="DCA">
                          DCA (DIPLOMA IN COMPUTER APPLICATION)
                        </option>
                        <option value="DWD">
                          DWD (DIPLOMA IN WEBSITE DESIGNING)
                        </option>
                        <option value="DTP">
                          DTP (DIPLOMA IN DESKTOP PUBLISHING)
                        </option>
                        <option value="DGA">
                          DGA (DIPLOMA IN GRAPHIC ANIMATION)
                        </option>
                        <option value="DPM">
                          DPM (DIPLOMA IN PROJECT MANAGEMENT)
                        </option>
                      </optgroup>

                      <optgroup label="12 Month Course">
                        <option value="PGDIT">
                          PGDIT (POST GRADUATE DIPLOMA IN INFORMATION
                          TECHNOLOGY)
                        </option>
                        <option value="PGDCA">
                          PGDCA (POST GRADUATE DIPLOMA IN COMPUTER APPLICATION)
                        </option>
                        <option value="MCA">
                          MCA (MASTER OF COMPUTER APPLICATION)
                        </option>
                        <option value="MSCIT">
                          MSCIT (MASTER OF SCIENCE IN INFORMATION TECHNOLOGY)
                        </option>
                      </optgroup>
                    </select>
                    {errors.courseName && (
                      <div className="invalid-feedback">
                        {errors.courseName}
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Guardian Type</label>
                    <select
                      className={`form-select ${
                        errors.guardianType ? "is-invalid" : ""
                      }`}
                      name="guardianType"
                      value={formData.guardianType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Guardian</option>
                      {guardianTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.guardianType && (
                      <div className="invalid-feedback">
                        {errors.guardianType}
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2: Gender, Father Name, DOB */}
                <div className="row mb-3">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className={`form-select ${
                        errors.gender ? "is-invalid" : ""
                      }`}
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Gender</option>
                      {genders.map((gender, index) => (
                        <option key={index} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                    {errors.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Father Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.fatherName ? "is-invalid" : ""
                      }`}
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      placeholder="Enter father/guardian name"
                    />
                    {errors.fatherName && (
                      <div className="invalid-feedback">
                        {errors.fatherName}
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">DOB</label>
                    <input
                      type="date"
                      className={`form-control ${
                        errors.dob ? "is-invalid" : ""
                      }`}
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                    {errors.dob && (
                      <div className="invalid-feedback">{errors.dob}</div>
                    )}
                  </div>
                </div>

                {/* Row 3: Pin Code, Town, District, State */}
                <div className="row mb-3">
                  <div className="col-md-3 mb-3">
                    <label className="form-label">Pin Code</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.pinCode ? "is-invalid" : ""
                      }`}
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      placeholder="Enter pin code"
                      maxLength="6"
                    />
                    {errors.pinCode && (
                      <div className="invalid-feedback">{errors.pinCode}</div>
                    )}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">Town</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.town ? "is-invalid" : ""
                      }`}
                      name="town"
                      value={formData.town}
                      onChange={handleInputChange}
                      placeholder="Enter town"
                    />
                    {errors.town && (
                      <div className="invalid-feedback">{errors.town}</div>
                    )}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">District</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.district ? "is-invalid" : ""
                      }`}
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      placeholder="Enter district"
                    />
                    {errors.district && (
                      <div className="invalid-feedback">{errors.district}</div>
                    )}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">State</label>
                    <select
                      className={`form-select ${
                        errors.state ? "is-invalid" : ""
                      }`}
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                    >
                      <option value="">Select State</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <div className="invalid-feedback">{errors.state}</div>
                    )}
                  </div>
                </div>

                {/* Row 4: ID Proof, ID Number, Image Upload */}
                <div className="row mb-3">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">ID Proof</label>
                    <select
                      className={`form-select ${
                        errors.idProof ? "is-invalid" : ""
                      }`}
                      name="idProof"
                      value={formData.idProof}
                      onChange={handleInputChange}
                    >
                      <option value="">Select IDtype</option>
                      {idTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.idProof && (
                      <div className="invalid-feedback">{errors.idProof}</div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">ID Number</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.idNumber ? "is-invalid" : ""
                      }`}
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleInputChange}
                      placeholder="Enter ID number"
                    />
                    {errors.idNumber && (
                      <div className="invalid-feedback">{errors.idNumber}</div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Image Upload</label>
                    <input
                      type="file"
                      className={`form-control ${
                        errors.imageUpload ? "is-invalid" : ""
                      }`}
                      name="imageUpload"
                      onChange={handleInputChange}
                      accept="image/*"
                    />
                    {errors.imageUpload && (
                      <div className="invalid-feedback">
                        {errors.imageUpload}
                      </div>
                    )}
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
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

                {/* Row 5: Phone, Email, Password */}
                <div className="row mb-3">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      maxLength="10"
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter password"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                </div>

                {/* Row 6: Subject Name, From Session, To Session */}
                <div className="row mb-4">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Subject Name</label>
                    {/* <select
                      className={`form-select ${
                        errors.subjectName ? "is-invalid" : ""
                      }`}
                      name="subjectName"
                      value={formData.subjectName}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select> */}
                    <input
                      type="text"
                      className={`form-control ${
                        errors.district ? "is-invalid" : ""
                      }`}
                      name="subjectName"
                      value={formData.subjectName}
                      onChange={handleInputChange}
                      placeholder="Enter Subject"
                    />
                    {errors.subjectName && (
                      <div className="invalid-feedback">
                        {errors.subjectName}
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Select From Session</label>
                    <input
                      type="date"
                      className={`form-control ${
                        errors.selectFromSession ? "is-invalid" : ""
                      }`}
                      name="selectFromSession"
                      value={formData.selectFromSession}
                      onChange={handleInputChange}
                    />
                    {errors.selectFromSession && (
                      <div className="invalid-feedback">
                        {errors.selectFromSession}
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Select To Session</label>
                    <input
                      type="date"
                      className={`form-control ${
                        errors.selectToSession ? "is-invalid" : ""
                      }`}
                      name="selectToSession"
                      value={formData.selectToSession}
                      onChange={handleInputChange}
                    />
                    {errors.selectToSession && (
                      <div className="invalid-feedback">
                        {errors.selectToSession}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-5 py-2 text-center"
                    // style={{ minWidth: '200px' }}
                    onClick={handleSubmit}
                    disabled ={loading}
                  >
                   {editMode ? 'Update Details' : 'Register Student'} {loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
