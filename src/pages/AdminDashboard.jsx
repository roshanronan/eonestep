import React from 'react';
import { Blocks, Building2, GraduationCap, TrendingUp, Users,Pencil,BadgeCheck } from 'lucide-react';
import FranchiseList from '../components/FrachiseList';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Franchise',
      value: '24',
      icon: Building2,
      color: 'text-primary',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Total Students',
      value: '1,847',
      icon: GraduationCap,
      color: 'text-success',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Active Franchise Partners',
      value: '892',
      icon: Users,
      color: 'text-info',
      change: '+5%',
      changeType: 'positive'
    },
    {
      title: 'Rejected Franchise Requests',
      value: '15',
      icon: Blocks,
      color: 'text-warning',
      change: '+2.1%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="container min-vh-100">
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="mb-5">
          <h1 className="display-4 fw-bold text-dark mb-2">Admin Dashboard</h1>
          <p className="text-muted">Welcome back! Here's what's happening with your franchise network.</p>
        </div>

        {/* Stats Cards */}
        <div className="row mb-5">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body d-flex align-items-center">
                      
                        <IconComponent size={24} className={`me-3 ${stat.color}`} />
                   
                    <div>
                     <h6 >{stat.title}</h6>
                      <strong >{stat.value}</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <FranchiseList/>

          <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h3 className="mb-0 fw-bold">Admin Profile</h3>
                </div>
                <div className="card-body row">
                  <div className="col-md-6 mb-2">
                    <strong>Name:</strong> Computer Zone Institute
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Email:</strong> czi@example.com
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Address:</strong> Main Road, Patna
                  </div>
                  <div className="col-md-6 mb-2">
                    <strong>Status:</strong> <BadgeCheck className="text-success" size={16} /> Approved
                  </div>
                  <div className="col-12 mt-2">
                    <button className="btn btn-outline-secondary btn-sm">
                      <Pencil size={14} className="me-1" /> Edit Profile
                    </button>
                  </div>
                </div>
              </div>

        {/* Recent Activity Section */}
        {/* <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-4">Recent Franchise Activity</h5>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                    <Building2 size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-0 fw-medium">New franchise opened in Mumbai</p>
                    <small className="text-muted">2 hours ago</small>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                    <GraduationCap size={16} className="text-success" />
                  </div>
                  <div>
                    <p className="mb-0 fw-medium">50 new students enrolled</p>
                    <small className="text-muted">5 hours ago</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-info bg-opacity-10 p-2 rounded-circle me-3">
                    <Users size={16} className="text-info" />
                  </div>
                  <div>
                    <p className="mb-0 fw-medium">Franchise partner training completed</p>
                    <small className="text-muted">1 day ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

           <div className="col-12 col-lg-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-4">Performance Overview</h5>
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted">Monthly Revenue</span>
                    <span className="fw-bold">₹12,45,000</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted">Student Retention</span>
                    <span className="fw-bold">87%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '87%' }}></div>
                  </div>
                </div>
                
                <div className="mb-0">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted">Franchise Satisfaction</span>
                    <span className="fw-bold">92%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;