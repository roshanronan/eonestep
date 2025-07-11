import React, { useState } from 'react';
import { Building2, Check, X, MapPin, Calendar, User, Phone, Mail, Users,Pen } from 'lucide-react';

const StudentList = () => {
  const [students, setFranchises] = useState([
    {
      id: 1,
      name: 'Rajesh Sharma',
      location: 'Mumbai, Maharashtra',
      phone: '+91 98765 43210',
      email: 'rajesh@edutech.com',
      appliedDate: '2024-01-15',
      status: 'enrolled'
    },
    {
      id: 2,
      name: 'Ravi Patel',
      location: 'Delhi, NCR',
      phone: '+91 87654 32109',
      email: 'priya@learnhub.com',
      appliedDate: '2024-01-12',
      status: 'enrolled'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      location: 'Bangalore, Karnataka',
      phone: '+91 76543 21098',
      email: 'amit@skillmaster.com',
      appliedDate: '2024-01-10',
      status: 'enrolled'
    },
    {
      id: 4,
      name: 'Deepika Iyer',
      location: 'Chennai, Tamil Nadu',
      phone: '+91 65432 10987',
      email: 'deepika@smartlearn.com',
      appliedDate: '2024-01-08',
      status: 'enrolled'
    },
    {
      id: 5,
      name: 'Suresh Joshi',
      location: 'Pune, Maharashtra',
      phone: '+91 54321 09876',
      email: 'suresh@techedu.com',
      appliedDate: '2024-01-05',
      status: 'enrolled'
    }
  ]);

  const handleAccept = (id) => {
    setFranchises(students.map(franchise => 
      franchise.id === id ? { ...franchise, status: 'accepted' } : franchise
    ));
  };

  const handleReject = (id) => {
    setFranchises(students.map(franchise => 
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
                          <span>{new Date(franchise.appliedDate).toLocaleDateString()}</span>
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
                              onClick={() => handleAccept(franchise.id)}
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