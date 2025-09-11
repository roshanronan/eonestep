import React,{useEffect} from 'react';
import {
  Users, BookOpen, UserPlus, CalendarDays, BadgeCheck, Mail, Pencil,
  User
} from 'lucide-react';
import StudentList from '../components/StudentList';
import EnrollmentLineChart from '../components/EnrollmentLineChart';
import { useNavigate } from 'react-router-dom';
import apiService from '../utils/apiService';

const CenterDashboard = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = React.useState([]);

    useEffect(() => {
    document.title = "Center Dashboard - OneStep Education"
    getStudentData();
    // console.log(localStorage.getItem('session'));
  }, []);

  const getStudentData = () => {
    apiService.get('/students').then(response => {
      console.log('Student Data:', response.data);
   
      setStudentData(response.data);
    }).catch(error => {
      console.error('Error fetching franchise data:', error);
    });

  }

    const stats = [
    {
      title: 'Total Students',
      value: studentData?.students?.length,
      icon: Users,
      color: 'text-success',
      change: '+8%',
      changeType: 'positive'
    },
    // {
    //   title: 'Courses Offered',
    //   value: '892',
    //   icon: BookOpen,
    //   color: 'text-info',
    //   change: '+5%',
    //   changeType: 'positive'
    // },
    // {
    //   title: 'Today’s Enrollments',
    //   value: '15.2%',
    //   icon: UserPlus,
    //   color: 'text-warning',
    //   change: '+2.1%',
    //   changeType: 'positive'
    // },
    {
      title: 'Last Login',
      value: '4 July, 2025',
      icon: CalendarDays,
      color: 'text-danger',
      change: '+2.1%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="container py-4">
       <div className="mb-5">
          <h1 className="display-4 fw-bold text-white mb-2">Center Dashboard</h1>
          <p className="text-white fw-bold">Welcome back! Here's what's happening with your Center.</p>
        </div>
      {/* Stats */}
      <div className="row g-4 mb-4">

        {
          stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div className="col-md-3" key={index}>
                <div className={`card shadow-sm`}>
                  <div className="card-body d-flex align-items-center">
                    <IconComponent className={`me-3 ${stat.color}`} />
                    <div>
                      <h6 >{stat.title}</h6>
                      <strong >{stat.value}</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )
        }
      </div>
      {/* Enrollment Trend Line Chart */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h3 className="mb-0 fw-bold">Monthly Student Enrollments</h3>
        </div>
        <div className="card-body">
          <EnrollmentLineChart />
        </div>
      </div>

      {/* Student Actions */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0 fw-bold">Students</h3>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('/eonestep/register-student')  }>
            <UserPlus size={16} className="me-1" /> Add New Student
          </button>
        </div>
        <div className="card-body">
          <p className="text-muted">View or manage enrolled students here.</p>

           <StudentList list={studentData?.students||[]}/>
        </div>
      </div>

      {/* Franchise Profile */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h3 className="mb-0 fw-bold">Franchise Profile</h3>
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
    </div>
  );
};


export default CenterDashboard