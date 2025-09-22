import React, { useState, useRef } from 'react';
import frame from '../assets/cer_img/frame.jpg';
import centerName from '../assets/cer_img/center_name.jpg';
import eonestepLogo from '../assets/cer_img/eonestep_logo.png';
import iso9001 from '../assets/cer_img/iso_900.png';
import skillIndia from '../assets/cer_img/skill_india.png';     
import minister from '../assets/cer_img/minister.png';
import roImage from '../assets/cer_img/ro_image.png';
import msme from '../assets/cer_img/msme.png';
import sig_first from '../assets/cer_img/sig_first.jpg';
import sig_sec from '../assets/cer_img/sig_sec.jpg';
import sign_control from '../assets/cer_img/sign_control.png';
import uniqueEducationSign from '../assets/cer_img/uniqueeducation_sig.png';
import stamp from '../assets/cer_img/stamp.png';
import web_img from '../assets/cer_img/web_img.jpg';
import text_cert from '../assets/cer_img/text_cer.png';
import skill_academy_sign from '../assets/cer_img/skill_acadmy_sig.png';
import iso from '../assets/cer_img/iso.png';


const CertificatePDF = ({studentDetails}) => {

  const certificateRef = useRef();
  return (
    <div className="w-full bg-gray-100 ">
      {/* Certificate Container - A4 Size */}
      <div 
        ref={certificateRef}
        className="certificate-container mx-auto bg-white"
        style={{
          width: '210mm',
          height: '279mm',
          padding: '20px 70px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '12px',
          color: 'black',
          position: 'relative',
          backgroundImage: `url(${frame})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Header Section */}
        <table className='mt-4' style={{ width: '100%', marginBottom: '15px' }}>
          <tbody>
            <tr className='d-flex align-items-center justify-content-center'>
              {/* <td> */}
                <img 
                  src={eonestepLogo} 
                  alt="Logo" 
                  style={{ height: '60px', width: '110px' }}
                />
              {/* </td>
              <td> */}
                <img 
                  src={centerName} 
                  alt="Center Name" 
                  style={{ height: '60px', width: '80%' }}
                />
              {/* </td> */}
            </tr>
          </tbody>
        </table>

        {/* Certification Info */}
        <div style={{ textAlign: 'center', marginBottom: '5px' }}>
          <div>An ISO 9001:2015 Certified Computer Education Board</div>
        </div>
        <div style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '5px' }}>
          <div>Register Under Goverment of India, Labour Department, Ministry of Corp.Affairs</div>
        </div>
        <div style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '5px' }}>
          <div>Register under MSME ,(Information Technology)</div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <div>CIN: U80902UP2021PTC154198, Govt. of India</div>
        </div>

        {/* Divider */}
        <hr style={{ color: '#8A8A8A', width: '100%', height: '1px', marginBottom: '15px' }} />

        {/* Student Details Section */}
        <table style={{ width: '100%', marginBottom: '15px' }}>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left' }}>Enrollment No.: {studentDetails?.enrollNumber}</td>
              <td></td>
              <td style={{ textAlign: 'right' }}>Roll No.: {studentDetails?.rollNumber}</td>
            </tr>
            <tr>
              <td></td>
              <td style={{ textAlign: 'center', paddingTop: '10px' }}>
                <img 
                  src={text_cert}
                  alt="Certificate Text" 
                  style={{ height: '30px', width: '180px' }}
                />
              </td>
              <td style={{ position: 'relative' }}>
                <div style={{ position: 'relative', height: '120px' }}>
                  <img 
                    // src={import.meta.env.VITE_IMAGE_BASE_URL + studentDetails?.imageUpload} 
                    src={studentDetails?.imageUpload} 
                    alt="Student Photo" 
                    style={{ 
                      position: 'absolute',
                      top: '-30px',
                      right: '0px',
                      height: '120px',
                      width: '120px',
                      zIndex: 1
                    }}
                  />
                  <img 
                    src={stamp}
                    alt="Stamp" 
                    style={{ 
                      position: 'absolute',
                      top: '40px',
                      left: '30px',
                      height: '90px',
                      width: '160px',
                      zIndex: 2
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td style={{ fontSize: '15px', textAlign: 'center' }}>
                <div>Session: {studentDetails?.session}</div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>

        {/* Certificate Details */}
        <div style={{ marginBottom: '15px', lineHeight: '18px', color: 'rgb(48, 73, 99)' }}>
          <div>This is Certify <span style={{ color: 'black' }}>{studentDetails?.studentName}</span></div>
          <div>Fathers Name <span style={{ color: 'black' }}>{studentDetails?.fatherName}</span></div>
          <div>Have Completed <span style={{ color: 'black' }}>{studentDetails?.courseName}</span></div>
          <div>At <span style={{ color: 'black' }}>{studentDetails?.franchiseName} ({ studentDetails?.franchiseCity +", " + studentDetails?.franchiseState} Code E1STEP/{studentDetails?.franchiseCode})</span></div>
          <div>With the following Subjects <span style={{ color: 'black' }}>{studentDetails?.subjectName}</span></div>
        </div>

        {/* Performance Details */}
        <div style={{ marginBottom: '15px', color: 'rgb(48, 73, 99)' }}>
          {studentDetails?.percentage && studentDetails?.percentage.trim() !== '' && (
            <div>He has secured <span style={{ color: 'black' }}>{studentDetails?.percentage}%</span></div>
          )}
          <div>With <span style={{ color: 'black' }}>{studentDetails?.grade}</span> Grade</div>
        </div>

        {/* Signatures Section */}
        <table style={{ width: '100%', marginBottom: '10px' }}>
          <tbody>
            <tr>
              {/* {(studentDetails?.franchiseCode === 'ESA1002' || studentDetails?.franchiseCode=== 'ESA1001') && (
                <td style={{ textAlign: 'center' }}>
                  <img 
                    src={sign_control}
                    alt="Signature 1" 
                    style={{ height: '70px', width: '150px' }}
                  />
                </td>
              )} */}
              {
                studentDetails?.franchiseSecretarySign && (<td style={{ textAlign: 'center' }}>
                  <img 
                    src={studentDetails?.franchiseSecretarySign}
                    alt="Signature 1" 
                    style={{ height: '70px', width: '150px' }}
                  />
                </td>)
              }
              {/* {studentDetails?.franchiseCode === 'ESA1003' && (
                <td style={{ textAlign: 'center' }}>
                  <img 
                    src={skill_academy_sign} 
                    alt="Skill Academy Signature" 
                    style={{ height: '70px', width: '150px' }}
                  />
                </td>
              )} */}

               {
                studentDetails?.franchiseInvigilatorSign && <td style={{ textAlign: 'center' }}>
                  <img 
                    src={studentDetails?.franchiseInvigilatorSign}
                    alt="Signature 1" 
                    style={{ height: '70px', width: '150px' }}
                  />
                </td>
              }
              {/* {studentDetails?.franchiseCode === 'ESA1004' && (
                <td style={{ textAlign: 'center' }}>
                  <img 
                    src={sig_first} 
                    alt="Unique Education Signature" 
                    style={{ height: '70px', width: '150px' }}
                  />
                </td>
              )} */}
               {
                studentDetails?.franchiseExaminerSign && <td style={{ textAlign: 'center' }}>
                  <img 
                    src={studentDetails?.franchiseExaminerSign}
                    alt="Signature 1" 
                    style={{ height: '70px', width: '150px' }}
                  />
                </td>
              }
              <td style={{ textAlign: 'center' }}>
                <img 
                  src={uniqueEducationSign}
                  alt="Controller Signature" 
                  style={{ height: '70px', width: '150px' }}
                />
              </td>
              <td style={{ textAlign: 'center' }}>
                <img 
                  src={sig_sec}
                  alt="Secretary Signature" 
                  style={{ height: '70px', width: '150px' }}
                />
              </td>
            </tr>
            <tr>
              {/* {studentDetails?.franchiseCode === 'ESA1002' && ( */}
                <td style={{ textAlign: 'center' }}>
                  <div>Checked by</div>
                </td>
              {/* )} */}
              <td style={{ textAlign: 'center' }}>
                <div>Controller of Exam</div>
              </td>
              <td style={{ textAlign: 'center' }}>
                <div>Secretary</div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Certification Logos */}
        <table style={{ width: '100%', marginTop: '10px' }}>
          <tbody>
            <tr>
              <td>
                <img 
                  src={iso}
                  alt="ISO" 
                  style={{ height: '80px', width: '130px', marginLeft: '-10%',mixBlendMode: 'multiply',
                }}
                />
              </td>
              <td>
                <img 
                  src={skillIndia}
                  alt="Skill India" 
                  style={{ height: '90px', width: '140px', marginLeft: '-25%',mixBlendMode: 'multiply',
                }}
                />
              </td>
              <td>
                <img 
                  src={minister}
                  alt="Minister" 
                  style={{ height: '90px', width: '110px', marginLeft: '-35%',mixBlendMode: 'multiply',
                }}
                />
              </td>
              <td>
                <img 
                  src={roImage}
                  alt="RO Image" 
                  style={{ height: '100px', width: '210px', marginLeft: '-20%',mixBlendMode: 'multiply',
                }}
                />
              </td>
              <td>
                <img 
                  src={msme}
                  alt="MSME" 
                  style={{ height: '90px', width: '100px', marginLeft: '-35%' ,mixBlendMode: 'multiply',
                }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <table style={{ width: '100%',marginTop: '30px' }}>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left', fontSize: '15px', verticalAlign: 'top', width: '50%' }}>
                <div>Education One-Step Academy Pvt. Ltd (E-ONESTEP)</div>
                <div>Head Office:</div>
                <div>Barola, Sector-49, Jagdish</div>
                <div>Chauhan Mkt. Noida UP 201301</div>
                <div>E-Mail: eonestep.education@gmail.com</div>
                <br />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src={web_img}
                    alt="Web" 
                    style={{ height: '20px', width: '20px', marginRight: '5px' }}
                  />
                  https://www.eonestep.com
                </div>
              </td>
              <td style={{ textAlign: 'center', verticalAlign: 'top' }}>
                <img 
                  src={iso9001}
                  alt="ISO 9001" 
                  style={{ height: '250px', width: '290px', marginTop: '-10%' }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>{`
        @media print {
          .certificate-container {
            margin: 0 !important;
            padding: 30px !important;
            width: 210mm !important;
            height: 297mm !important;
            page-break-after: avoid !important;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          @page {
            size: A4;
            margin: 0;
          }
        }
        
        .print\\:hidden {
          display: block;
        }
        
        @media print {
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CertificatePDF;