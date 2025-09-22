import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useAuth } from '../utils/AuthContext';
import apiService from '../utils/apiService';
import { validate } from '../utils/formValidation';
import { toast } from 'react-toastify';




const initialState = {
    studentName: '',
    fatherName: '',
    courseName: '',
    imageUpload: '',
    subjects: '',
    grade: '',
    percentage: ''
}



const StudentCourseModal = ({ showModal, setShowModal, toggleShowModal, id }) => {
    // const [showModal,setShowModal] = useState(false);
    const { loading, setLoading } = useAuth();
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (!id) return
        const getStudentDetails = async () => {
            const response = await apiService.get(`/students/${id}/course-details`)
            const marks = response?.data?.student

            setFormData({
                studentName: marks.studentName,
                fatherName: marks.fatherName,
                courseName: marks.courseName,
                imageUpload: marks.imageUpload,
                subjects: marks.subjects,
                grade: marks.grade,
                percentage: marks.percentage
            })
        }
        getStudentDetails()
    }, [id])

    const updateReportRule = {
        subjects: { required: true, minLength: 3, message: 'Subject is required' },
        courseName: { required: true, minLength: 3, message: 'Course Name is required' },
        grade:{},
    };

    const updateReport = async () => {
        const validationErrors = validate(formData, updateReportRule);
       
         setErrors(validationErrors);
       
        if (Object.keys(validationErrors).length > 0) {
            toast.error('Please fix errors before submitting');
            return;
        }

        try {
            setLoading(true);
            const response = await apiService.put(`/students/${id}/course-details`, {
                courseName: formData.courseName,
                subjects: formData.subjects,
                grade: formData.grade,
                percentage: formData.percentage
            });
            setLoading(false)
            if (response?.data) {
               
            }

            setLoading(false);
        } catch (error) {
            console.error('Login faileddd:', error);
            setLoading(false);
            toast.error(error?.message || 'Login failed. Please check your credentials.');
            return;
        }

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    return (
        <Modal show={showModal} onHide={toggleShowModal} size='xl' centered>
            <Modal.Header closeButton>
                <Modal.Title>Student's Report</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* First Row - 3 Fields */}
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="studentName"
                                    value={formData.studentName}
                                    onChange={handleInputChange}
                                    placeholder="Student Name"
                                    disabled={true}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Father Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleInputChange}
                                    placeholder="Father Name"
                                    disabled={true}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="courseName"
                                    value={formData.courseName}
                                    onChange={handleInputChange}
                                    placeholder="Course Name"
                                    isInvalid={!!errors.courseName}
                                    disabled={loading}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.courseName}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Second Row - 3 Fields */}
                    <Row className="mb-3 position-relative" >
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Grade</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="grade"
                                    value={formData.grade}
                                    onChange={handleInputChange}
                                    placeholder="Grade"
                                    disabled={loading}
                                    isInvalid={!!errors.grade}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.grade}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Percentage</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="percentage"
                                    value={formData.percentage}
                                    onChange={handleInputChange}
                                    placeholder="Percentage"
                                    min="1"
                                    max="100"
                                    disabled={loading}
                                    isInvalid={!!errors.percentage}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.percentage}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="textarea"
                                    name="subjects"
                                    value={formData.subjects}
                                    onChange={handleInputChange}
                                    placeholder="Subject"
                                    disabled={loading}
                                    isInvalid={!!errors.subjects}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.subjects}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='position-relative'>
                            <div className="mt-2">
                                <img
                                    // src={import.meta.env.VITE_IMAGE_BASE_URL + formData.imageUpload}
                                    src={formData.imageUpload}
                                    alt="Preview"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: 120,
                                        borderRadius: 8,
                                    }}
                                    className=''
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn-secondary' onClick={toggleShowModal} disabled={loading}>
                    Cancel
                </Button>
                <Button className='btn btn-primary' onClick={updateReport} disabled={loading}>
                    Update Report{loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StudentCourseModal