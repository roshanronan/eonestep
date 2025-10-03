import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const navigate = useNavigate()
  const getBadgeStyle = (status) => {
    const baseStyle = {
      display: 'inline-block',
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    };

    switch (status) {
      case 'live':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #ff4444, #cc0000)',
          color: 'white',
          boxShadow: '0 4px 15px rgba(255, 68, 68, 0.4)',
        };
      case 'upcoming':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
          color: 'white',
          boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
        };
      case 'expired':
        return {
          ...baseStyle,
          background: '#9e9e9e',
          color: 'white',
        };
      default:
        return baseStyle;
    }
  };

  const getBadgeIcon = (status) => {
    switch (status) {
      case 'live':
        return '🔴';
      case 'upcoming':
        return '📅';
      case 'expired':
        return '⏰';
      default:
        return '';
    }
  };

  return (
    <div style={styles.card} onClick={()=>navigate(`/live-classes/${course.id}`)}>
      <div style={styles.imageContainer}>
        <img src={course.image} alt={course.title} style={styles.image} />
        <div style={styles.badgeContainer}>
          <span style={getBadgeStyle(course.status)}>
            {getBadgeIcon(course.status)} {course.status}
          </span>
        </div>
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{course.title}</h3>
        <p style={styles.description}>{course.description}</p>
        <div style={styles.footer}>
          <span style={styles.duration}>⏱️ {course.duration}</span>
          <span style={styles.level}>📊 {course.level}</span>
        </div>
      </div>
    </div>
  );
};

const CoursesGrid = () => {
  const courses = [
    {
      id: 1,
      title: 'React Masterclass 2025',
      description: 'Learn modern React development with hooks, context, and best practices. Build real-world applications from scratch.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
      status: 'live',
      duration: '8 weeks',
      level: 'Intermediate',
    },
    {
      id: 2,
      title: 'Advanced TypeScript',
      description: 'Master TypeScript from basics to advanced patterns. Type-safe development for enterprise applications.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&h=300&fit=crop',
      status: 'upcoming',
      duration: '6 weeks',
      level: 'Advanced',
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      description: 'Build scalable backend applications with Node.js, Express, and MongoDB. Learn REST APIs and authentication.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop',
      status: 'live',
      duration: '10 weeks',
      level: 'Intermediate',
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      description: 'Complete web development bootcamp covering frontend, backend, databases, and deployment strategies.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      status: 'expired',
      duration: '12 weeks',
      level: 'Beginner',
    },
    {
      id: 5,
      title: 'Next.js & Server Components',
      description: 'Build modern web applications with Next.js 14, React Server Components, and app router.',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&h=300&fit=crop',
      status: 'upcoming',
      duration: '5 weeks',
      level: 'Intermediate',
    },
    {
      id: 6,
      title: 'GraphQL & Apollo Client',
      description: 'Learn GraphQL fundamentals and build efficient data-driven applications with Apollo Client and Server.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop',
      status: 'live',
      duration: '4 weeks',
      level: 'Advanced',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Our Courses</h1>
        <p style={styles.subtitle}>Choose from our selection of expert-led courses</p>
      </div>
      <div style={styles.grid}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
      padding: '20px',
    // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  mainTitle: {
    fontSize: '48px',
    fontWeight: '800',
    color: 'white',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  subtitle: {
    fontSize: '20px',
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '400',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  badgeContainer: {
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
  content: {
    padding: '25px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '12px',
    lineHeight: '1.3',
  },
  description: {
    fontSize: '15px',
    color: '#7f8c8d',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '15px',
    borderTop: '1px solid #ecf0f1',
  },
  duration: {
    fontSize: '14px',
    color: '#34495e',
    fontWeight: '500',
  },
  level: {
    fontSize: '14px',
    color: '#34495e',
    fontWeight: '500',
  },
};

// Add hover effect
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  [style*="cursor: pointer"]:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3) !important;
  }
  [style*="cursor: pointer"]:hover img {
    transform: scale(1.1);
  }
`;
document.head.appendChild(styleSheet);

export default CoursesGrid;