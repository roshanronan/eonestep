import React,{useState,useEffect} from 'react';
import StudentList from '../components/StudentList';
import apiService from '../utils/apiService';
import FullPageLoader from '../components/FullPageLoader';

const CertificateReqested = () => {
    const [pageLoader,setPageLoader] = useState(false);
    const [certificateReqData,setCertificateReqData] = useState([])

    useEffect(() => {
        getCertificateReq();
    }, []);

    const getCertificateReq = () =>{
    setPageLoader(true)
    apiService.get('/students/certificate-request').then(response => {
    setCertificateReqData(response?.data)
      setPageLoader(false)
    }).catch(error => {
        setPageLoader(false)
      console.error('Error fetching certificate request data:', error);
    });
  }

  return (
    <>
   {!pageLoader ? <div className="container py-4">


      <div className="card mb-4 shadow-sm">
        <div className="card-header d-flex justify-content-between flex-column flex-md-row align-items-center">
          <h3 className="mb-0 fw-bold">Certificate Request</h3>
-
        </div>
        <div className="card-body">
          <p className="text-muted">View or manage students certificate.</p>

           <StudentList list={certificateReqData?.students||[]} isCertificatePage={true} getCertificateReq={getCertificateReq}  />
        </div>
      </div>

    </div>:<FullPageLoader/>}
    </>
  );
}

export default CertificateReqested