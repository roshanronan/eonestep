import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Check, X, MapPin, Calendar, User, Phone, Mail, Users, Pen, UserRound, UserRoundCheck, UserRoundPlus, UserRoundPen, FileUser, ShieldUser, UserPlus, UserPen, Delete, UserRoundX } from 'lucide-react';
import apiService from '../utils/apiService';
import { toast } from 'react-toastify';
import { useAuth } from '../utils/AuthContext';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { validate } from '../utils/formValidation';

const initialState = {
    fullName: '',
    designation: '',
    experience: '',
    studentsTaught: '',
    phone: '',
    rating: ''
}

const InstructorList = () => {
    const [instructors, setInstructors] = useState([]);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [instructorId, setInstructorId] = useState();
    const { session } = useAuth()
    const { loading, setLoading } = useAuth();
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [selectedInstructorId, setSelectedInstructorId] = useState('')


    const toggleShowModal = (stuId) => {
        setShowModal(!showModal);
        setInstructorId(stuId)
    };

    useEffect(() => {
        getInstructors()
    }, []);

    const getInstructors = () => {
        apiService.get('/instructors').then(response => {
            setInstructors(response.data);
        }).catch(error => {
            console.error('Error fetching instructors data:', error);
        });
    }



    const addInstructorRule = {
        fullName: { required: true, minLength: 3, message: 'Full Name is required' },
        experience: { required: true, minLength: 1, message: 'Experience is required' },
        designation: { required: true, minLength: 3, message: 'Designation is required' },
        phone: { required: true, minLength: 3, message: 'Phone is required' },
        rating: { required: true, minLength: 3, message: 'Rating is required' },
        studentsTaught: { required: true, minLength: 3, message: 'Student Field is required' },
    };

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

    const deleteInstructor = async (id) => {
 try {
                setLoading(true);
                const response = await apiService.delete(`/instructors/${id}`);
                toast.success(response?.message)
                getInstructors()
                 setLoading(false);
            } catch (error) {
                console.error('Adding Instructor Failed:', error);
                setLoading(false);
                toast.error(error?.message);
                return;
            }
    }

    const editInstructorInfo = async (instructorData) => {
        toggleShowModal()
        setSelectedInstructorId(instructorData?.id)
        setFormData(instructorData)
    }


    const addInstructor = async () => {
        const validationErrors = validate(formData, addInstructorRule);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            toast.error('Please fix errors before submitting');
            return;
        }

        if (selectedInstructorId === '') {
            try {
                setLoading(true);
                const response = await apiService.post(`/instructors`, formData);
                toast.success(response?.message)
                 setLoading(false);
                setFormData(initialState)
                toggleShowModal()
                getInstructors()
            } catch (error) {
                console.error('Adding Instructor Failed:', error);
                setLoading(false);
                toast.error(error?.message);
                return;
            }
        } else {

            try {
                setLoading(true);
                const response = await apiService.put(`/instructors/${selectedInstructorId}`,formData);
                setLoading(false)
                toast.success(response?.message)
                setFormData(initialState)
                toggleShowModal()
                getInstructors()
            } catch (error) {
                console.error('Updating Instructor Failed:', error);
                setLoading(false);
                toast.error(error?.message);
                return;
            }
        }
    }


    const getStatusBadge = (status) => {
        switch (status) {
            case 'inactive':
                return <span className="badge text-white bg-success" title="Studnet Graduated">
                    <ShieldUser size={20} className="" />
                </span>;
            case 'rejected':
                return <span className="badge bg-danger">Rejected</span>;
            default:
                return <span className="badge text-white bg-success" title="Studnet Enrolled">
                    <UserRound size={20} className="" />
                </span>;
        }
    };

    const [searchTerm, setSearchTerm] = useState('');


    const filteredInstructors = instructors.filter(instructor =>
        instructor.fullName && instructor.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-header d-flex justify-content-between flex-column flex-md-row align-items-center">
                    <h3 className="mb-0 fw-bold">Instructors</h3>
                    <button className="btn btn-primary btn-sm" onClick={() => toggleShowModal()} >
                        <UserPlus size={16} className="me-1" /> Add New Instructor
                    </button>
                </div>
                <div className="card-body">
                    <p className="text-muted">View or manage Instructors here.</p>
                    <div className="mb-5">
                        <div className="container-fluid px-0">
                            {/* Search Input */}
                            {/* <div className="mb-3 col-lg-4 col-md-6 col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Enroll Number"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div> */}

                            <div className="card shadow-sm border-0">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-hover mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    {/* <th scope="col">Instructor Details</th> */}
                                                    <th scope="col">Full Name</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Student Taught</th>
                                                    <th scope="col">Degination</th>
                                                    <th scope="col">Experience</th>
                                                    <th scope="col">Rating</th>
                                                    {/* <th scope="col">Status</th> */}
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredInstructors.map((instructor) => (
                                                    <tr key={instructor.id} >
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <h6 className="mb-0 fw-bold">{instructor.fullName}</h6>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div>
                                                                <div className="d-flex align-items-center mb-1">
                                                                    <small>{instructor.phone}</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <div className="d-flex align-items-center mb-1">
                                                                    <small>{instructor.studentsTaught}</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <div className="d-flex align-items-center mb-1">
                                                                    <small>{instructor.designation}</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <small>{instructor.experience}</small>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <small>{instructor.rating}</small>
                                                            </div>
                                                            {/* {getStatusBadge(instructor.status)} */}
                                                        </td>
                                                        <td>
                                                            <span className="badge text-white bg-info mb-2 mx-2" onClick={() => editInstructorInfo(instructor)} title="Edit Instructor">
                                                                <UserPen size={20} className="" />
                                                            </span>
                                                            <span className="badge text-white bg-danger mx-2" onClick={() => deleteInstructor(instructor.id)} title="Delete Instructor">
                                                                <UserRoundX size={20} className="" />
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* { instructorId && showModal && <StudentCourseModal showModal={showModal} setShowModal={setShowModal} toggleShowModal={toggleShowModal} id={instructorId} />} */}

                            {/* Empty State */}
                            {filteredInstructors.length === 0 && (
                                <div className="text-center py-5">
                                    <Building2 size={48} className="text-muted mb-3" />
                                    <h5 className="text-muted">No Instructors Found</h5>
                                    <p className="text-muted">Try searching with a different Enroll Number.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={toggleShowModal} size='xl' centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedInstructorId == ''?'Add New Instructor':'Update Instructor'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* First Row - 3 Fields */}
                        <Row className="mb-3">
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Instructor Name"
                                        isInvalid={!!errors.fullName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.fullName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Degination</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleInputChange}
                                        placeholder="Degination"
                                        isInvalid={!!errors.designation}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.designation}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        placeholder="Experience"
                                        isInvalid={!!errors.experience}
                                        // disabled={loading}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.experience}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Second Row - 3 Fields */}
                        <Row className="mb-3 position-relative" >
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Students Taught</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="studentsTaught"
                                        value={formData.studentsTaught}
                                        onChange={handleInputChange}
                                        placeholder="Students Taught"
                                        // disabled={loading}
                                        isInvalid={!!errors.studentsTaught}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.studentsTaught}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="rating"
                                        value={formData.rating}
                                        onChange={handleInputChange}
                                        placeholder="Rating"
                                        min="1"
                                        max="100"
                                        // disabled={loading}
                                        isInvalid={!!errors.rating}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.rating}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone"
                                        min="1"
                                        max="100"
                                        // disabled={loading}
                                        isInvalid={!!errors.phone}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-secondary' onClick={toggleShowModal} disabled={loading}>
                        Cancel
                    </Button>
                    <Button className='btn btn-primary' onClick={addInstructor} disabled={loading}>
                     {selectedInstructorId == ''?'Add Instructor':'Update Instructor'} {loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default InstructorList;