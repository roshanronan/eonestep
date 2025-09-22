import React, { useEffect, useState } from 'react';
import { Blocks, Building2, GraduationCap, TrendingUp, Users,Pencil,BadgeCheck } from 'lucide-react';
import FranchiseList from '../components/FrachiseList';
import apiService from '../utils/apiService';
import FullPageLoader from '../components/FullPageLoader';

const AdminDashboard = () => {
  const {user} = JSON.parse(localStorage.getItem('session')) || {};
  const [adiminData, setAdminData] = useState(null);
  const [pageLoader,setPageLoader] = useState(false)

  useEffect(() => {
    document.title = "Admin Dashboard - OneStep Education"
    getFranchiseData();
    // console.log(localStorage.getItem('session'));
  }, []);

  const getFranchiseData = () => {
    setPageLoader(true)
    apiService.get('/franchise').then(response => {
      // console.log('Franchise Data:', response.data);
      // Handle the response data as needed
      setAdminData(response.data);
      setPageLoader(false)
    }).catch(error => {
      console.error('Error fetching franchise data:', error);
      setPageLoader(false)
    });

  }

  const stats = [
    {
      title: 'Total Franchise',
      value: adiminData?.FranchisesData.totalFranchises,
      icon: Building2,
      color: 'text-primary',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Total Students',
      value: adiminData?.FranchisesData.totalStudents,
      icon: GraduationCap,
      color: 'text-success',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Active Franchise Partners',
      value: adiminData?.FranchisesData.approvedFranchises,
      icon: Users,
      color: 'text-info',
      change: '+5%',
      changeType: 'positive'
    }
  ];

  return (
    <>
      {
        !pageLoader? <div className="container min-vh-100">
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="mb-5">
          <h1 className="display-4 fw-bold text-light mb-2"  style={{
            background: 'linear-gradient(45deg, #fbbf24, #f472b6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
          }}>Admin Dashboard</h1>
          <p className="text-light">Welcome back! Here's what's happening with your franchise network.</p>
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

        <FranchiseList list={adiminData?.FranchisesData?.Franchises ||[]} getFranchiseData={getFranchiseData}/>

   

      
      </div>
    </div>:<FullPageLoader/>
      }
    </>
  );
};

export default AdminDashboard;