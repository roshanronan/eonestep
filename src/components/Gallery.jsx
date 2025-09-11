import { Cross } from 'lucide-react';
import React, { useState } from 'react';


// List of image filenames in assets/album
const albumImages = [
  '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.JPG','28.JPG','29.jpg','30.jpg'
];

const getImageUrl = (img) => `album/${img}`;

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImgClick = (img) => {
    setSelectedImg(img);
  };

  const handleClose = () => {
    setSelectedImg(null);
  };

  return (
    <div className="p-md-5 =3p-3 position-relative overflow-hidden">

   <div className="position-absolute w-100 h-100" style={{top: 0, left: 0, zIndex: 1}}>
          <div className="position-absolute rounded-circle" style={{
            top: '50px',
            left: '20px',
            width: '300px',
            height: '300px',
            background: 'rgba(210, 247, 130, 0.9)',
            filter: 'blur(0px)',
            animation: 'floatPulse 6s ease-in-out infinite alternate'
          }}></div>
          <div className="position-absolute rounded-circle" style={{
            top: '10px',
            right: '0px',
            width: '120px',
            height: '120px',
            background: 'rgba(10, 10, 10, 0.6)',
            filter: 'blur(0px)',
            animation: 'floatPulse 6s ease-in-out infinite alternate'
          }}></div>
          <div className="position-absolute rounded-circle" style={{
            bottom: '50px',
            right: '100px',
            width: '180px',
            height: '180px',
            background: 'rgba(255, 128, 0, 0.5)',
            filter: 'blur(0px)',
            animation: 'floatPulse 6s ease-in-out infinite alternate'
          }}></div>
          <div className="position-absolute rounded-circle" style={{
            bottom: '0px',
            left: '0px',
            width: '400px',
            height: '400px',
            background: 'rgba(255, 0, 0, 0.4)',
            filter: 'blur(0px)',
            animation: 'floatPulse 6s ease-in-out infinite alternate'
          }}></div>
        </div>

      <h2 className="mb-4 fw-bold text-center text-white display-5">Gallery</h2>
      <div className="row g-3 justify-content-center">
        {albumImages.map((img, idx) => (
          <div className="col-6 col-sm-4 col-md-3" key={img}>
            <div className="gallery-thumb card  shadow-sm border-0" style={{cursor:'pointer',minHeight:200}} onClick={() => handleImgClick(img)}>
              <img
                src={getImageUrl(img)}
                alt={`Gallery ${idx+1}`}
                className="img-fluid rounded"
                style={{height:200,objectFit:'cover',width:'100%',zIndex:2}}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Modal for full image */}
      {selectedImg && (
        <div className="gallery-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{background:'rgba(0,0,0,0.7)',zIndex:9999}} onClick={handleClose}>
          <div className="gallery-modal-content p-3 rounded shadow-lg position-relative" style={{maxWidth:600,background:'rgba(0,0,0,1)'}} onClick={e => e.stopPropagation()}>
            <button className="btn btn-danger position-absolute top-0 end-0 m-2" onClick={handleClose}><Cross size={20}/></button>
            <img src={getImageUrl(selectedImg)} alt="Full" className="img-fluid rounded" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
