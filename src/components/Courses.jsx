import React from 'react';

const CourseCards = ({courses}) => {


  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        {courses.map((course) => (
          <div key={course.id} className="col-lg-4 col-md-6">
            <div className="card h-100 shadow border-0">
              <div className="card-body d-flex flex-column">
                {/* Header with lessons, rating, and students */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-book text-primary me-2"></i>
                    <span className="text-primary fw-medium">{course.lessons} Lesson</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <span className="me-2">{course.rating}</span>
                    <i className="bi bi-people text-muted me-1"></i>
                    <span className="text-muted">{course.students}</span>
                  </div>
                </div>

                {/* Course Title */}
                <h5 className="card-title text-primary mb-2">{course.title}</h5>
                
                {/* Part */}
                <div className="text-muted mb-3 fw-medium">{course.part}</div>

                {/* Description */}
                <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {course.description}
                </p>

                {/* Duration */}
                <div className="mt-auto">
                  <span className="text-primary fw-medium">{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;