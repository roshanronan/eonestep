import React, { useState, useEffect } from 'react';
import { Building2, Check, X, MapPin, Calendar, User, Phone, Mail,UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import apiService from '../utils/apiService';
import { toast } from "react-toastify";

const FranchiseList = ({list}) => {
  const navigate = useNavigate();
  const [franchises, setFranchises] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFranchises(list.map(item => ({
      id: item.id,
      name: item.instituteName,
      owner: item.name,
      location: item.city + ', ' + item.state,
      phone: item.phone,
      email: item.email,
      appliedDate: item.createdAt,
      status: item.status
    })));
  }, [list]);

  const handleAccept = async (id) => {
    try {
      setLoading(true);
      await apiService.patch(`/franchise/${id}/approve`);
      setFranchises(franchises.map(franchise => 
        franchise.id === id ? { ...franchise, status: 'approved' } : franchise
      ));
      setLoading(false);
      toast.success('Franchise approved successfully!');
    } catch (error) {
      setLoading(false);
      toast.error(error?.message||'Failed to approve franchise.');
    }
  };

  const handleReject = (id) => {
    setFranchises(franchises.map(franchise => 
      franchise.id === id ? { ...franchise, status: 'rejected' } : franchise
    ));
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'approved':
        return <span className="badge bg-success">Approved</span>;
      case 'rejected':
        return <span className="badge bg-danger">Rejected</span>;
      default:
        return <span className="badge bg-warning">Pending</span>;
    }
  };

  return (
    <div className="container card min-vh-100 mb-5">
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="mb-4">
          <h3 className=" fw-bold text-dark mb-2">Franchise Applications</h3>
          <p className="text-muted">Review and manage franchise applications</p>
        </div>

        {/* Stats */}
        <div className="row mb-4">
          <div className="col-12 col-md-4 mb-3">
            <div className="card ">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <Building2 size={24} className="me-3 text-primary" />
                  <div>
                    <h5 className="card-title mb-0">Total Applications</h5>
                    <h3 className="mb-0 fw-bold">{franchises.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card ">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <Calendar size={24} className="me-3 text-warning" />
                  <div>
                    <h5 className="card-title mb-0">Pending Review</h5>
                    <h3 className="mb-0 fw-bold">{franchises.filter(f => f.status === 'pending').length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <Check size={24} className="me-3 text-success" />
                  <div>
                    <h5 className="card-title mb-0">Approved</h5>
                    <h3 className="mb-0 fw-bold">{franchises.filter(f => f.status === 'approved').length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Franchise List */}
        <div className="card shadow-sm border-0">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0 fw-bold">Franchies Applications</h3>
          <button className="btn btn-primary btn-sm" onClick={()=>navigate('/eonestep/apply-franchise')}>
            <UserPlus size={16} className="me-1" /> Add New Franchise
          </button>
        </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Franchise Details</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Applied Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {franchises.map((franchise) => (
                    <tr key={franchise.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                            <Building2 size={20} className="text-primary" />
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
                        <div className="d-flex align-items-center">
                          <User size={16} className="text-muted me-2" />
                          <span>{franchise.owner}</span>
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
                        {franchise.status === 'pending' ? (
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() => handleAccept(franchise.id)}
                            >
                              <Check size={16} className="me-1" />
                              Accept
                            </button>
                            {/* <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleReject(franchise.id)}
                            >
                              <X size={16} className="me-1" />
                              Reject
                            </button> */}
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
        {franchises.filter(f => f.status === 'pending').length === 0 && (
          <div className="text-center py-5">
            <Building2 size={48} className="text-muted mb-3" />
            <h5 className="text-muted">No pending applications</h5>
            <p className="text-muted">All franchise applications have been reviewed.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FranchiseList;