import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Check, X, MapPin, Calendar, User, Phone, Mail, Users,Pen } from 'lucide-react';

const StudentList = ({list}) => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      setStudents(list.map(item => ({
        id: item.id,
        name: item.studentName,
        location: item.town + ', ' + item.state,
        phone: item.phone,
        email: item.email,
        enrollDate: item.createdAt,
        status: 'enrolled'
      })));
    }, [list]);

  const editStudent = (studentDetails) => {
    // console.log("frang",franchise);
    navigate(`/eonestep/edit-student/${studentDetails.id}`, { state: { student: studentDetails } });  
  };

  const handleReject = (id) => {
    setStudents(students.map(franchise => 
      franchise.id === id ? { ...franchise, status: 'rejected' } : franchise
    ));
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'accepted':
        return <span className="badge bg-success">Accepted</span>;
      case 'rejected':
        return <span className="badge bg-danger">Rejected</span>;
      default:
        return <span className=" bg-info text-dark p-1 rounded-1">Enrolled</span>;
    }
  };

  return (
    <div className=" mb-5">
      <div className="container-fluid px-0"> 

        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Student Details</th>
                    {/* <th scope="col">Owner</th> */}
                    <th scope="col">Contact</th>
                    <th scope="col">Applied Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((franchise) => (
                    <tr key={franchise.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                            <Users size={20} className="text-primary" />
                          </div>
                          <div>
                            <h6 className="mb-0 fw-bold">{franchise.name}</h6>
                            <small className="text-muted d-flex align-items-center">
                              <MapPin size={14} className="me-1" />
                              {franchise.location}
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="d-flex align-items-center mb-1">
                            <Phone size={14} className="text-muted me-2" />
                            <small>{franchise.phone}</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <Mail size={14} className="text-muted me-2" />
                            <small>{franchise.email}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Calendar size={16} className="text-muted me-2" />
                          <span>{new Date(franchise.enrollDate).toLocaleDateString()}</span>
                        </div>
                      </td>
                      <td>
                        {getStatusBadge(franchise.status)}
                      </td>
                      <td>
                        {franchise.status === 'enrolled' ? (
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() => editStudent(franchise)}
                            >
                              <Pen size={16} className="me-1" />
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleReject(franchise.id)}
                            >
                              <X size={16} className="me-1" />
                              Block
                            </button>
                          </div>
                        ) : (
                          <span className="text-muted">Action taken</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {students.filter(f => f.status === 'enrolled').length === 0 && (
          <div className="text-center py-5">
            <Building2 size={48} className="text-muted mb-3" />
            <h5 className="text-muted">No pending Students</h5>
            <p className="text-muted">All Students have been reviewed.</p>
          </div>
        )}
      </div>
    </div>  );
};

export default StudentList;