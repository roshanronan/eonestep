import React from 'react'

const RefundAndCanel = () => {
    const pointers =[
        {
            'title':'Refund/Cancellation Policy',
            'desc':'We have not charge any fee for application for franchise. Any Individuals, Firms Societies, Companies & Organization can apply for our franchise for study center. Before or after the application you can talk on provided phone number for any query about E-ONESTEP Computer Education working and services.'
        },
        {
            'title':'Cancellation',
            'desc':'if you not agree with E-ONESTEP Computer Education that you can write a email to eonestep.education@gmail.com for cancellation of your application.'
        },
        {
            'title':'Distance between Center',
            'desc':'The Distance form One Institute to another will be 3 Kilometer inside the Village & 1 Kilometer in the Urban area. Confirm that there are no Other Study Center in your area before sending the registration form. If found, the 2nd Center franchise will be cancelled & No more amount will be refunded. If a Center wants to expand is Distance, It can call the given Number and get all Information.'
        },
        {
            'title':'Refund',
            'desc':'Once you made payment for franchise activation its not refundable in any case. Payment made for student registration fee also not refundable.'
        }
    ]

  return (
    <div className='container d-flex flex-column my-5 py-5 justify-content-center align-items-center'>
        <h2 className='display-5 fw-normal text-warning mb-lg-5 mb-2'>Refund & Cancellation Policy</h2>
         
        {pointers.map((point,idx)=><div key={idx} className='d-flex flex-column align-items-center justify-content-center my-3 border border-2 border-dark' style={{borderRadius:8,width:'100%',backgroundColor:'#e4dbf1ff'}}>
            <h3 className='pt-3 border-bottom border-2 border-info m-0' >{point.title}</h3>
            <p className='m-0 py-2 px-3 text-center' style={{fontSize:18}}>{point.desc}</p>
        </div>)}
    </div>
  )
}

export default RefundAndCanel