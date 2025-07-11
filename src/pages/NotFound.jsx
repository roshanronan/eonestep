import React from 'react';
import notFound from '../assets/notfound.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center mb-4'>
        <img className='not-found' src={notFound} alt="not found" />
        <h4>Page not Found</h4>
        <Link to='/eonestep/' className=' border border-success px-4 py-2 rounded-4' style={{margin:20,fontSize:30,fontWeight:500}}> Back </Link>
    </div>
  )
}

export default NotFound