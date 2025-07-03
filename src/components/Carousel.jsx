import React from 'react';
import bannerImg1 from './../assets/BANNER.jpg'
import bannerImg2 from './../assets/banner2.jpg'
import bannerImg3 from './../assets/banner3.jpg'
import bannerImg4 from './../assets/banner4.jpg'

const Carousel = ({ 
  items = [], 
  id = "carouselExample",
  showIndicators = true,
  showControls = true,
  autoSlide = true,
  interval = 2000
}) => {
  // Default carousel items if none provided
  const defaultItems = [
    {
      id: 1,
      image: bannerImg1,
      title: "",
      description: "",
      active: true
    },
    {
      id: 2,
      image: bannerImg2,
      title: "",
      description: "",
      active: false
    },
    {
      id: 3,
      image: bannerImg3,
      title: "Third Slide",
      description: "",
      active: false
    },
    {
      id: 4,
      image: bannerImg4,
      title: "",
      description: "",
      active: false
    }
  ];

  const carouselItems = items.length > 0 ? items : defaultItems;

  return (
    <div className=" mt-4">
      <div 
        id={id} 
        className="carousel slide" 
        data-bs-ride={autoSlide ? "carousel" : "false"}
        data-bs-interval={interval}
      >
        {/* Carousel Indicators */}
        {showIndicators && (
          <div className="carousel-indicators">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        )}

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div 
              key={item.id || index} 
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={item.image}
                className="img-fluid d-block w-90"
                alt={item.title || `Slide ${index + 1}`}
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
              {(item.title || item.description) && (
                <div className="carousel-caption d-none d-md-block">
                  {item.title && <h5>{item.title}</h5>}
                  {item.description && <p>{item.description}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        {showControls && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>

      {/* Usage Example */}
      <div className="mt-5">
        {/* <h3>Carousel Variations</h3> */}
        
        {/* Simple Carousel without indicators */}
        {/* <div className="mt-4">
          <h5>Without Indicators</h5>
          <div 
            id="carousel2" 
            className="carousel slide mb-4" 
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://picsum.photos/800/300?random=4"
                  className="d-block w-100"
                  alt="Slide 1"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://picsum.photos/800/300?random=5"
                  className="d-block w-100"
                  alt="Slide 2"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel2"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel2"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}

        {/* Fade Transition Carousel */}
        {/* <div className="mt-4">
          <h5>With Fade Transition</h5>
          <div 
            id="carousel3" 
            className="carousel slide carousel-fade" 
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://picsum.photos/800/300?random=6"
                  className="d-block w-100"
                  alt="Slide 1"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Fade Effect</h5>
                  <p>This carousel uses fade transition instead of slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://picsum.photos/800/300?random=7"
                  className="d-block w-100"
                  alt="Slide 2"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Smooth Transition</h5>
                  <p>Beautiful fade animation between slides.</p>
                </div>
              </div>
            </div>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carousel3"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel3"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel3"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel3"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;