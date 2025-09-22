import React from 'react';
import { motion } from "motion/react"

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "👨‍🏫",
      title: "Experienced Staff",
      description: "Our Students gain from the best scholastic staff with a certifiable enthusiasm for their subject. Our courses are at the bleeding edge of current learning.",
      bgColor: "bg-light"
    },
    {
      id: 2,
      icon: "🎓",
      title: "Online Verification",
      description: "We provide Online Verification to the enrollment status of every student, which helps to validate their admission without any Pen & Paper process.",
      bgColor: "bg-light"
    },
    {
      id: 3,
      icon: "🏢",
      title: "Our Franchise",
      description: "Today, we are moving forward to become No-1 institution with daily increase in the number of study centres, reason being: reasonable franchise fee and royalty, best service and satisfied reffering clients.",
      bgColor: "bg-light"
    },
    {
      id: 4,
      icon: "📜",
      title: "Govt. Certificate",
      description: "We are well recognised and approved by the Government such that our students secure a good position in various companies and prosper in their carrier.",
      bgColor: "bg-light"
    },
    {
      id: 5,
      icon: "💻",
      title: "Online Course",
      description: "We are providing lot of course where you can easily gain the knowledge.",
      bgColor: "bg-light",
      hasButton: true
    }
  ];

  return (
    <div className=" d-flex align-items-center justify-content-center mt-5">
      <div className="mb-5 pb-5">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-normal text-warning mb-4">Our Best Services For You</h2>
          </div>
        </div>

        {/* Services Grid */}
        <div  

  viewport={{ once: true, margin: "-50px" }}
            className="row g-4 justify-content-center mx-2 mx-md-5 px-md-5">
          {services.map((service) => (
            <div key={service.id} className="col-md-4 col-sm-6">
            <motion.div initial={{ opacity: 0, y: 100, scale: 0.8 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94],
  }}
   viewport={{ once: true }} 
   className={`card h-100 border-0 shadow-sm ${service.bgColor}`} style={{backgroundImage:'linear-gradient(180deg, #F6A91D 0%, #FFFFFF 100%)'}}>
              <div 
                
              className="card-body text-center p-4" style={{border:'1px solid gray',borderRadius:8}}>
                {/* Icon Circle */}
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: '80px',
                    height: '80px',
                    fontSize: '2rem',
                    backgroundColor:'#E0CFFC'
                  }}
                >
                  <span className="text-white">{service.icon}</span>
                </div>
                
                {/* Title */}
                <h5 className="card-title fw-bold text-dark mb-3">
                  {service.title}
                </h5>
                
                {/* Description */}
                <p className="card-text big lh-base">
                  {service.description}
                </p>

                {/* Button for Online Course */}
                {service.hasButton && (
                  <div className="mt-3">
                    <span className="badge text-dark mb-2">⭐⭐⭐</span>
                    <br />
                    <button className="btn btn-info btn-sm text-dark font-weight-bold px-3">
                      Team Siksha
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ServicesSection;