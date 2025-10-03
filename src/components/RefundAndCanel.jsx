import React from 'react'

// const RefundAndCanel = () => {
//     const pointers =[
//         {
//             'title':'Refund/Cancellation Policy',
//             'desc':'We have not charge any fee for application for franchise. Any Individuals, Firms Societies, Companies & Organization can apply for our franchise for study center. Before or after the application you can talk on provided phone number for any query about E-ONESTEP Computer Education working and services.'
//         },
//         {
//             'title':'Cancellation',
//             'desc':'if you not agree with E-ONESTEP Computer Education that you can write a email to eonestep.education@gmail.com for cancellation of your application.'
//         },
//         {
//             'title':'Distance between Center',
//             'desc':'The Distance form One Institute to another will be 3 Kilometer inside the Village & 1 Kilometer in the Urban area. Confirm that there are no Other Study Center in your area before sending the registration form. If found, the 2nd Center franchise will be cancelled & No more amount will be refunded. If a Center wants to expand is Distance, It can call the given Number and get all Information.'
//         },
//         {
//             'title':'Refund',
//             'desc':'Once you made payment for franchise activation its not refundable in any case. Payment made for student registration fee also not refundable.'
//         }
//     ]

//   return (
//     <div className='container d-flex flex-column my-5 py-5 justify-content-center align-items-center'>
//         <h2 className='display-5 fw-normal text-warning mb-lg-5 mb-2'>Refund & Cancellation Policy</h2>
         
//         {pointers.map((point,idx)=><div key={idx} className='d-flex flex-column align-items-center justify-content-center my-3 border border-2 border-dark' style={{borderRadius:8,width:'100%',backgroundColor:'#e4dbf1ff'}}>
//             <h3 className='pt-3 border-bottom border-2 border-info m-0' >{point.title}</h3>
//             <p className='m-0 py-2 px-3 text-center' style={{fontSize:18}}>{point.desc}</p>
//         </div>)}
//     </div>
//   )
// }

// export default RefundAndCanel


const RefundCancellationPolicy = () => {
  return (
    <div className="policy-container">
      <style jsx>{`
        .policy-container {
          min-height: 100vh;
          padding: 3rem 1rem;
        }

        .policy-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          margin-bottom: 2rem;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .policy-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }

        .section-title {
          font-size: 2rem;
          font-weight: 500;
          text-align: center;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #6b46c1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(135deg, #6b46c1, #8b5cf6);
          border-radius: 2px;
        }

        .section-content {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #374151;
          text-align: center;
          max-width: none;
        }

        .highlight-email {
          color: #6b46c1;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #6b46c1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight-email:hover {
          text-decoration: underline;
          transform: scale(1.05);
          display: inline-block;
        }

        .container-custom {
          max-width: 1200px;
          margin: 0 auto;
        }

        .icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #6b46c1, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          box-shadow: 0 10px 25px rgba(107, 70, 193, 0.3);
        }

        .distance-highlight {
          background: linear-gradient(135deg, #f59e0b, #f97316);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-weight: 600;
          display: inline-block;
          margin: 0 0.25rem;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        @media (max-width: 768px) {
          .policy-container {
            padding: 2rem 0.5rem;
          }
          
          .policy-section {
            padding: 1.5rem;
            margin-bottom: 1.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .section-content {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem;
          }
          
          .policy-section {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="container-custom">
        {/* Refund/Cancellation Policy Section */}
        <div className="policy-section">
          <div className="icon-wrapper">
            <div className="icon">
              📋
            </div>
          </div>
          <h2 className="section-title">Refund/Cancellation Policy</h2>
          <p className="section-content">
            We have not charge any fee for application for franchise. Any Individuals, Firms Societies, Companies & Organization can apply for our 
            franchise for study center. Before or after the application you can talk on provided phone number for any query about E-ONESTEP Computer 
            Education working and services.
          </p>
        </div>
        

        {/* Cancellation Section */}
        <div className="policy-section">
          <div className="icon-wrapper">
            <div className="icon">
              ✉️
            </div>
          </div>
          <h2 className="section-title">Cancellation</h2>
          <p className="section-content">
            If you not agree with E-ONESTEP Computer Education that you can write a email to {' '}
            <a href="mailto:eonestep.education@gmail.com" className="highlight-email">
              eonestep.education@gmail.com
            </a> {' '}
            for cancellation of your application.
          </p>
        </div>

        {/* Distance between Center Section */}
        {/* <div className="policy-section">
          <div className="icon-wrapper">
            <div className="icon">
              📍
            </div>
          </div>
          <h2 className="section-title">Distance between Center</h2>
          <p className="section-content">
            The Distance form One Institute to another will be 
            <span className="distance-highlight">3 Kilometer</span>
            inside the Village & 
            <span className="distance-highlight">1 Kilometer</span>
            in the Urban area. Confirm that there are no Other Study Center in your area before sending the registration form. If found, the 2nd Center franchise will be cancelled & No more amount will be refunded. If a Center wants to expand is Distance, It can call the given Number and get all Information.
          </p>
        </div> */}

        {/* Refund Section */}
        <div className="policy-section">
          <div className="icon-wrapper">
            <div className="icon">
              💰
            </div>
          </div>
          <h2 className="section-title">Refund</h2>
          <p className="section-content">
            {/* Add refund content here if provided */}
            For refund related queries and processes, please contact us through the provided communication channels. Our team will assist you with the refund process according to our terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;