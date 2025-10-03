import React from 'react';
import { Users, UserPlus, Building, BookOpen } from 'lucide-react';

const AchievementSection = () => {
  const achievements = [
    {
      icon: <Users className="text-warning" size={48} />,
      title: "Satisfied Students",
      count: "2500+"
    },
    {
      icon: <UserPlus className="text-success" size={48} />,
      title: "User Register",
      count: "3000+"
    },
    {
      icon: <Building className="text-info" size={48} />,
      title: "Study Centres",
      count: "50+"
    },
    {
      icon: <BookOpen className="text-primary" size={48} />,
      title: "Courses Published",
      count: "40+"
    }
  ];

  return (
    <section className="position-relative py-5" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container">
        {/* Section Title */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-6 fw-normal text-warning mb-0" >
              Our Achievement
            </h2>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="row g-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="text-center text-white h-100 p-4">
                {/* Icon */}
                <div className="mb-3 d-flex justify-content-center">
                  <div className="p-3 rounded-circle bg-white bg-opacity-10 backdrop-blur">
                    {achievement.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h5 className="text-white mb-3 fw-normal" style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.4'
                }}>
                  {achievement.title}
                </h5>
                
                {/* Count */}
                <h3 className="text-white fw-bold mb-0" style={{
                  fontSize: '2rem',
                  fontWeight: '700'
                }}>
                  {achievement.count}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Add some animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .col-lg-3:nth-child(1) { animation: fadeInUp 0.6s ease-out 0.1s both; }
        .col-lg-3:nth-child(2) { animation: fadeInUp 0.6s ease-out 0.2s both; }
        .col-lg-3:nth-child(3) { animation: fadeInUp 0.6s ease-out 0.3s both; }
        .col-lg-3:nth-child(4) { animation: fadeInUp 0.6s ease-out 0.4s both; }
        
        .backdrop-blur {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .col-lg-3:hover .p-3 {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
        
        .col-lg-3 .p-3 {
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default AchievementSection;