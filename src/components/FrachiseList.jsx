import React, { useState, useEffect } from 'react';
import { Building2, Check, OctagonPause, MapPin, Calendar, User, Eye, EyeOff, Phone, Mail,UserPlus, Pencil, Settings, OctagonX, Badge, BadgeCheck, BadgeAlert, RotateCcwKey, OctagonMinus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import apiService from '../utils/apiService';
import { toast } from "react-toastify";
import { Modal, Button, Form } from 'react-bootstrap'; 

const FranchiseList = ({list,getFranchiseData}) => {
  const navigate = useNavigate();
  const [franchises, setFranchises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [selectedFranchise, setSelectedFranchise] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  useEffect(() => {
    setFranchises(list.map(item => ({
      id: item.id,
      name: item.instituteName,
      owner: item.name,
      location: item.city + ', ' + item.state,
      phone: item.phone,
      email: item.email,
      appliedDate: item.createdAt,
      status: item.status,
      studentCount : item.studentCount
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

  const handleOpenResetModal = (franchise) => {
    // console.log('frachise',franchise)
    setSelectedFranchise(franchise);
    setShowResetModal(true);
    setNewPassword('');
  };

  const handleCloseResetModal = () => {
    setShowResetModal(false);
    setSelectedFranchise(null);
    setNewPassword('');
  };

  const handleResetPassword = async () => {
    if (!newPassword) {
      toast.error('Please enter a new password.');
      return;
    }
    try {
      setResetLoading(true);
      await apiService.patch(`/franchise/${selectedFranchise.id}/hard-password-reset`, { password: newPassword });
      toast.success('Password reset successfully!');
      setResetLoading(false);
      handleCloseResetModal();
    } catch (error) {
      setResetLoading(false);
      toast.error(error?.message || 'Failed to reset password.');
    }
  };

  const suspendFranchise =async (id) =>{

    try{
      const response = await apiService.patch(`/franchise/${id}/suspend`)
      if(response.status == 200){
        toast.success(response.message)
      }
      getFranchiseData()

    }catch(error){
       toast.error(error?.message || 'Failed to Suspend Franchise.');
    }
  }


  const getStatusBadge = (status) => {
    switch(status) {
      case 'approved':
        return <span className="badge text-white bg-success"  title="Franchise Approved">
          <BadgeCheck size={20} className="" />
        </span>;
      case 'rejected':
        return <span className="badge text-white bg-danger"  title="Franchise Suspended">
           <BadgeAlert size={20} className="" /> 
        </span>;
      default:
        return <span className="badge text-white bg-warning"  title="Franchise Pending">
          <Badge size={20} className="" /> 
        </span>;
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
        <div className="card-header d-flex justify-content-between flex-column flex-md-row align-items-center">
          <h3 className="mb-0 fw-bold">Franchies Applications</h3>
          <button className="btn btn-primary btn-sm" onClick={()=>navigate('/apply-franchise')}>
            <UserPlus size={16} className="me-1" /> Add New Franchise
          </button>
        </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Franchise Details</th>
                     <th scope="col">Students</th>
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
                          <span>{franchise.studentCount}</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          {/* <User size={16} className="text-muted me-2" /> */}
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
                              disabled={loading}
                            >
                              {loading ? <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>: <Check size={16} className="me-1" />}
                            
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
                          // <span className="text-muted">Action taken</span>
                          <div>
                          {franchise.status === 'approved' && (
                            <div className='d-flex align-items-center gap-2'>
                              <span className="text-white bg-info d-flex align-items-center rounded-3 p-1 " title="Reset Password"
                               style={{cursor:'pointer'}}
                                onClick={() => handleOpenResetModal(franchise)}
                               >
                              <RotateCcwKey size={20} className="" />    
                            </span>
                             <span className="text-white bg-primary d-flex align-items-center rounded-3 p-1"  title="Edit Franchise"
                              style={{cursor:'pointer'}}
                              onClick={()=>navigate(`/edit-franchise/${franchise.id}`)}
                              >
                              <Pencil size={20} className="" />    
                            </span>
                            <span className="text-white bg-danger d-flex align-items-center rounded-3 p-1"  title="Suspend Franchise"
                              style={{cursor:'pointer'}}
                              onClick={()=>{suspendFranchise(franchise.id)}}
                              >
                              <OctagonPause size={20} className="" />    
                            </span>
                            </div>
                          ) }
                          { franchise.status === 'rejected' &&  <div className='d-flex align-items-center gap-2'> <span className="text-white bg-success d-flex align-items-center rounded-3 p-1"
                              title="Re-Activate Franchise"
                              style={{cursor:'pointer'}}
                              onClick={()=>{suspendFranchise(franchise.id)}}
                              >
                              <OctagonMinus size={20} className="" />    
                            </span>
                            </div>
                            }
                          </div>
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

      <Modal show={showResetModal} onHide={handleCloseResetModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reset Franchise Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                 type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                disabled={resetLoading}
              />
               <span
                style={{
                  position: 'absolute',
                  right: 30,
                  top: 53,
                  cursor: 'pointer',
                  zIndex: 2
                }}
                onClick={() => setShowPassword(prev => !prev)}
                tabIndex={0}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-secondary' onClick={handleCloseResetModal} disabled={resetLoading}>
            Cancel
          </Button>
          <Button  className='btn btn-primary' onClick={handleResetPassword} disabled={resetLoading}>
           Reset Password {resetLoading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FranchiseList;