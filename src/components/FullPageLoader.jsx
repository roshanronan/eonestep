import React from 'react';

const FullPageLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ 
      // position: 'fixed', 
      
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '50vh', 
      // backgroundColor: 'rgba(87, 87, 87, 0.42)', 
      zIndex: 9999 
    }}>
      <div className="spinner-border border-5 text-warning" role="status" style={{ width: '4rem', height: '4rem' }}>
         <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default FullPageLoader;