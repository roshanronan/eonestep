import React,{useRef} from 'react'
import Certificate from '../components/Certificate';

const StudentCertificate = () => {

  return (
    <div>
      {/* Hidden certificate template */}
      <div id="certificate-content">
        <Certificate  />
      </div>
    </div>
  );        
}


export default StudentCertificate