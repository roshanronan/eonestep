import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Check, X, MapPin, Calendar, User, Phone, Mail, Users,Pen,UserRound, UserRoundCheck, UserRoundPlus, UserRoundPen, FileUser, ShieldUser  } from 'lucide-react';
import defaultImg from '../assets/image.png'
import StudentCourseModal from './StudentCourseModal';
import apiService from '../utils/apiService';
import { toast } from 'react-toastify';
import { useAuth } from '../utils/AuthContext';

const StudentList = ({list,isCertificatePage=false,getCertificateReq = ()=>{}}) => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const [showModal,setShowModal] = useState(false);
  const [studentId,setStudentId] = useState();
  const {session} = useAuth()


  const toggleShowModal = (stuId) => {
    setShowModal(!showModal);
    setStudentId(stuId)
  };

  useEffect(() => {
    setStudents(list.map(item => ({
      id: item.id,
      name: item.studentName,
      location: item.town + ', ' + item.state,
      phone: item.phone,
      email: item.email,
      enrollDate: item.createdAt,
      fatherName: item.fatherName,
      enrollNumber: item.enrollNumber,
      status: item.status,
      franchiseName:item?.Franchise?.instituteName
      // imagePreview: import.meta.env.VITE_IMAGE_BASE_URL + item.imageUpload 

    })));
  }, [list]); 

  const editStudent = (studentDetails) => {
    navigate(`/edit-student/${studentDetails.id}`, { state: { student: studentDetails } });  
  };

  const requestCertificate = async(id)=>{
    try{ 
      let payload ={
        status : isCertificatePage ? 'inactive':'requested'
      }
      const res = await apiService.put(`/students/certificate-request/${id}`,payload)
      if(res){
        toast.success(res.message)
        if(isCertificatePage){
          getCertificateReq()
        }
      }
    }catch(error){
      toast.error(error.message)
    }
  }

  const updateStudentMarks = (id) => {
    // setStudents(students.map(franchise => 
    //   franchise.id === id ? { ...franchise, status: 'rejected' } : franchise
    // ));
    toggleShowModal(id)
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'inactive':
        return <span className="badge text-white bg-success"  title="Studnet Graduated">
          <ShieldUser size={20} className="" /> 
        </span>;
      case 'rejected':
        return <span className="badge bg-danger">Rejected</span>;
      default:
        return  <span className="badge text-white bg-success"  title="Studnet Enrolled">
          <UserRound size={20} className="" /> 
        </span>;
    }
  };

  const [searchTerm, setSearchTerm] = useState('');

  // Filter students based on enrollNumber
  const filteredStudents = students.filter(student =>
    student.enrollNumber && student.enrollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-5">
      <div className="container-fluid px-0">
        {/* Search Input */}
        <div className="mb-3 col-lg-4 col-md-6 col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Enroll Number"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Student Details</th>
                    {/* <th scope='col'>Photo</th> */}
                    <th scope="col">Father Name</th>
                    <th scope="col">Enroll No</th>
                    {!isCertificatePage ?<th scope="col">Contact</th>:null}
                    <th scope="col">Enroll Date</th>
                    {!isCertificatePage ?<th scope="col">Status</th>:null}
                    {isCertificatePage ?<th scope="col">Ceter</th>:null}
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                   {filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                            <Users size={20} className="text-primary" />
                          </div>
                          <div>
                            <h6 className="mb-0 fw-bold">{student.name}</h6>
                          </div>
                        </div>
                      </td>
                      {/* <td>
                        <div>
                          <img
                            src={student.imagePreview}
                            alt="Pic"
                            style={{
                              maxWidth: "100%",
                              maxHeight: 50,
                              borderRadius: 8,
                            }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = defaultImg;
                            }}
                          />
                        </div>
                      </td> */}
                      <td>
                        <div>
                          <div className="d-flex align-items-center mb-1">
                            <small>{student.fatherName}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="d-flex align-items-center mb-1">
                            <small>{student.enrollNumber}</small>
                          </div>
                        </div>
                      </td>
                      {!isCertificatePage ?
                      <td>
                        <div>
                          <div className="d-flex align-items-center mb-1">
                            <Phone size={14} className="text-muted me-2" />
                            <small>{student.phone}</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <Mail size={14} className="text-muted me-2" />
                            <small>{student.email}</small>
                          </div>
                        </div>
                      </td>
                       :null}
                      <td>
                        <div className="d-flex align-items-center">
                          <Calendar size={16} className="text-muted me-2" />
                          <span>{new Date(student.enrollDate).toLocaleDateString()}</span>
                        </div>
                      </td>
                       {!isCertificatePage ?
                      <td>
                        {getStatusBadge(student.status)}
                      </td>
                       :null}
                        {isCertificatePage ?
                        <td>
                        <small>{student.franchiseName}</small>
                      </td>
                       :null}
                      <td>
                        {student.status === 'active' || (student.status === 'requested' && session.user.role == 'franchise') ? (
                          <div className="d-flex gap-2">
                            <span className="badge text-white bg-info" onClick={() => editStudent(student)} title="Edit Studnet Info">
                              <UserRoundPen size={20} className="" />
                            </span>
                            <span className="badge text-white bg-warning" onClick={() => updateStudentMarks(student.id)} title="Update Student Marksheet">
                              <FileUser size={20} className="" />
                            </span>
                            <span className="badge text-white" style={{background:'teal'}} onClick={() => requestCertificate(student.id)} title="Request Certificate">
                              <UserRoundCheck size={20} className="" />
                            </span>
                          </div>
                        ) : (
                           <>  {isCertificatePage ?( <span className="badge text-white bg-warning" onClick={() => requestCertificate(student.id)} title="Issue Certificate">
                              <UserRoundCheck size={20} className="" />
                            </span> ):<span className="text-muted">Action taken</span> } </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

       { studentId && showModal && <StudentCourseModal showModal={showModal} setShowModal={setShowModal} toggleShowModal={toggleShowModal} id={studentId} />}

        {/* Empty State */}
        {filteredStudents.length === 0 && (
          <div className="text-center py-5">
            <Building2 size={48} className="text-muted mb-3" />
            <h5 className="text-muted">No Students Found</h5>
            <p className="text-muted">Try searching with a different Enroll Number.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;