import React from 'react'

const AffiliationProcess = () => {

    const requirments = [
        '3 Computers.',
        'Internet Connection.',
        'Printer & Scanner.',
        'Well Educated Faculty.',
        'White Board & Notice Board.',
        'Fist Aid Kit.',
        'Drinking Water.',
        'Washroom.'
    ]
    const whoCanApply = [
        'Any individual with IT background.',
        'Any One who is the resident of India.',
        'Exiting Computer Center.',
        'Regd. Societies & Trusts.',
        'Religious / Charitable Organization',
        'Who has passion to teach computer courses.',
        'Should be willing to invest required amount of money in setting up a center with proper infrastructure and man power.',
        'Should have commitment for providing quality training to students.'
    ]

  return (
    <div className='container d-flex flex-column my-5 py-5 justify-content-center align-items-center'>
        <h2 className='display-5 fw-normal text-primary m-0 '>Affiliation Process For Registration</h2>
        <hr />
        <p className='py-3' style={{fontSize:20}}>Computer Education Franchise, Computer Training Institute Affiliation For the first time E-ONESTEP Education launching offer to provide franchise all over India without taking any franchise fees. E-ONESTEP Education is the One of the best institution to provide computer education in India.</p>
        <p className='py-3' style={{fontSize:20}}>How to open computer education center? Computer education center provides self-employment opportunity. But Mostly People do Not know about How to open computer education Center? They have no proper information to affiliation & franchisee for new computer education center. Here, we will discuss requirements for starting up new computer education center.</p>
        <p className="py-3" style={{fontSize:20}}>Start your own IT Education & Training Franchise with E-ONESTEP Computer Center If you are looking for business opportunity in the education sector then E-ONESTEP franchise will be the perfect platform to achieve your business goals. E-ONESTEP has been one of the fast growing computer education providers in the India. E-ONESTEP Computer Center is Govt. Registered organization. You can start E-ONESTEP franchisee if you meet minimum requirements mentioned below.</p>
    
     <div className='w-100'>
     <h2 className='text-left'>Minimum requirement</h2>
        {requirments.map(point=><div className='d-flex align-items-center' style={{width:'100%'}}>
            <p className='m-0 py-2 ps-3' style={{fontSize:20}}> 🧱 &nbsp;{point}</p>
        </div>)}
     </div>
     <div className='w-100 mt-5'>
     <h2 className='text-left'>Who can Apply?</h2>
        {whoCanApply.map(point=><div className='d-flex align-items-center' style={{width:'100%'}}>
            <p className='m-0 py-2 ps-3' style={{fontSize:20}}>🎷&nbsp; {point}</p>
        </div>)}
     </div>
    </div>
  )
}

export default AffiliationProcess