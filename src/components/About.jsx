import React from 'react'

const About = () => {

    const pointers =['Computer Center Recognized By Govt. of India.',
        'Authorized Study Centre of Ministry of MSME Govt. of India',
        'Center Authorization by QRO (Quality Research Organization)',
        'Valid Certificate in Govt. as well as in Private Firms & Companies',
        'Online Student/ Certificate/ Marksheet/ Center Verification.',
        'ISO 9001:2015 Quality Management System Certification',
        'No Hidden Investment',
        'Govt. Projects Will be Delivered from Time to Time',
        'E-ONESTEP Computer Center is One of the Best Computer Education Center which has been shown Social Media Site'
    ]

  return (
    <div className='container d-flex flex-column my-5 py-2 justify-content-center align-items-center'>
        <h2 className='display-6 fw-normal text-warning m-0 text-warning'>About Us</h2>
        {/* <hr />   */}
        <p className='py-2 text-white' >E-ONESTEP (Education One Step Academy) Computer Education Organization for Computer and Technical Education is an <strong className='text-warning'>ISO 9001:2015 </strong>Certified Institute. It is an autonomous Computer Education Board Registered under Govt. of India. Registered under Ministry of Corp. Affairs of INDIA. The Organization is Run By Certificate of Incorporation by <strong className='text-warning'> GOVERNMENT OF INDIA CIN No. U80902UP2021PTC154198 & Authorized </strong> Study Centre of Ministry of MSME Govt. of India, Its work for rural skill development basically computer education and Communicative skill development.</p>
        <p className='py-2 text-white' >Our certificate is valid in all over INDIA. We deals in Computer Basic Education to advance computer Education and specialization in various topics. E-ONESTEP Computer Education is Registered Under MSME Ministry of Micro, Small & Medium Enterprises <strong className='text-warning'> UAN No. UDYAM-UP-28-003802.</strong> Education ONESTEP ACADEMY Private Limited, Income Tax Department NSDL-Permanent Account Number AAGCE7134C & Tax Deduction and Collection Account Number <strong className='text-warning'>MRTE02961A </strong>The main objective behind the establishment of this institute is to spread the computer literacy & Vocational Program to all over the country. By this literacy program, we ensure that student may learn more and more become self motivated.</p>
    
        {pointers.map((point,idx)=><div key={idx} className='text-white d-flex align-items-center' style={{width:'100%'}}>
            <p className='m-0 py-1 ps-3' >✨ &nbsp;{point}</p>
        </div>)}
    </div>
  )
}

export default About