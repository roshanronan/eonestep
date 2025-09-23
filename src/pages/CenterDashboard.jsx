import React,{useEffect,useState} from 'react';
import {
  Users, BookOpen, UserPlus, CalendarDays, BadgeCheck, Mail, Pencil,
  User
} from 'lucide-react';
import StudentList from '../components/StudentList';
import EnrollmentLineChart from '../components/EnrollmentLineChart';
import { useNavigate } from 'react-router-dom';
import apiService from '../utils/apiService';
import { useAuth } from '../utils/AuthContext';
import FullPageLoader from '../components/FullPageLoader';

const CenterDashboard = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);
  const [franchiseData,setFranchiseData] = useState([]);
  const {session} = useAuth();
  const [pageLoader,setPageLoader] = useState(false)

  useEffect(() => {
    document.title = "Center Dashboard - OneStep Education"
    setPageLoader(true)
    getStudentData();
    franchiseDetail()

  }, []);

  const franchiseDetail = ()=>{
    // session?.user?.franchiseId
    apiService.get(`/franchise/${session?.user?.franchiseId}`).then(
      respose =>{
        setFranchiseData(respose.data.franchise)
        setPageLoader(false)
      }
    ).catch(error => {
      console.error('Error fetching franchise data:', error);
      setPageLoader(false)
    });
  }

  const getStudentData = () => {
    apiService.get('/students').then(response => {
      setStudentData(response.data);
       setPageLoader(false)
    }).catch(error => {
      console.error('Error fetching franchise student data:', error);
       setPageLoader(false)
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
    // {
    //   title: 'Last Login',
    //   value: '4 July, 2025',
    //   icon: CalendarDays,
    //   color: 'text-danger',
    //   change: '+2.1%',
    //   changeType: 'positive'
    // }
  ];

  return (
    <>
   {!pageLoader ? <div className="container py-4">
       <div className="mb-5">
          <h1 className="display-4 fw-bold text-white mb-2" style={{
            background: 'linear-gradient(45deg, #fbbf24, #f472b6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
          }}>{franchiseData.instituteName} Dashboard</h1>
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
      {/* <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h3 className="mb-0 fw-bold">Monthly Student Enrollments</h3>
        </div>
        <div className="card-body">
          <EnrollmentLineChart />
        </div>
      </div> */}

      {/* Student Actions */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header d-flex justify-content-between flex-column flex-md-row align-items-center">
          <h3 className="mb-0 fw-bold">Students</h3>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('/register-student')  }>
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
            <strong>Name:</strong> {franchiseData.instituteName}
          </div>
          <div className="col-md-6 mb-2">
            <strong>Email:</strong> {franchiseData.email}
          </div>
          <div className="col-md-6 mb-2">
            <strong>Address:</strong> {franchiseData.city}, {franchiseData.state}
          </div>
          <div className="col-md-6 mb-2 text-capitalize">
            <strong>Status:</strong> <BadgeCheck className="text-success" size={16} /> {franchiseData.status}
          </div>
          <div className="col-12 mt-2">
            <button className="btn btn-outline-secondary btn-sm" onClick={()=>navigate(`/edit-franchise/${session?.user?.franchiseId}`)}>
              <Pencil size={14} className="me-1" /> Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>:<FullPageLoader/>}
    </>
  );
};


export default CenterDashboard