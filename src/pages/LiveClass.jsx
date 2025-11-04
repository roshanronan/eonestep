import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { validate } from '../utils/formValidation';
import { useLocation } from 'react-router-dom';
import apiService from '../utils/apiService';
import { toast } from 'react-toastify';

export function formatDateToReadable(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export function formatTimeToReadable(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true,
  });
}

export function getHourMinuteDifference(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diffMs = end - start;

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours} Hours ${minutes} Mins`;
}

const LiveClassRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    level: 'beginner'
  });

  const [showPayment, setShowPayment] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState({})
  const registrationValidationRule = {
    fullName: { required: true, minLength: 3, message: 'Full Name is required' },
    phoneNumber: { required: true, pattern: /^\d{10}$/, message: 'Phone must be 10 digits' },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email is invalid' }
  };
  const {state} = useLocation()
  const {courseDetail} = state
  const [intructor,setInstructor] = useState({})
  const [loading,setLoading] = useState(false)

  const getInstructor = () => {
        apiService.get(`/instructors/${courseDetail.instructorId}`).then(response => {
            setInstructor(response.data);
        }).catch(error => {
            console.error('Error fetching instructors data:', error);
        });
    }

    useEffect(()=>{
        getInstructor()
    },[])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name] : ''
    })
  };

  const handleRegistration = () => {
     const newErrors = validate(formData, registrationValidationRule);
     setErrors(newErrors);
     if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
let payload = {...formData,liveCourseId:courseDetail.id}

 apiService.post(`/livestudents`,  payload)
          .then(response => {
            toast.success(response?.message || 'Registration successfull!');
            setLoading(false);
            setShowPayment(true);
          })
          .catch(error => {
            setLoading(false);
            console.error('Error submitting form:', error);
            toast.error(error?.message || 'Failed to Registration application. Please try again.');
          });
      
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }else{
      toast.error("Please fill the required field(s)")
    }

    // if (formData.name && formData.email && formData.phonenumber) {
    //   // setShowPayment(true);
    // }
  };

  const handlePayment = () => {
    const upiId = 'instructor@paytm';
    const amount = courseDetail.price;
    const name = courseDetail.title;
    const upiUrl = `upi://pay?pa=${upiId}&am=${amount}&cu=INR&tn=${encodeURIComponent(name)}`;

    // Try to open UPI app
    window.location.href = upiUrl;

    // Show success message after a delay (simulate payment)
    setTimeout(() => {
      setIsRegistered(true);
      setShowPayment(false);
    }, 3000);
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    hero: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px',
      padding: '30px 30px',
      borderRadius: '15px',
      // textAlign: 'center',
      marginBottom: '30px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }, heroContent: {
      flex: 1,
    },
    heroThumbnail: {
      flex: 1,
      maxWidth: '500px',
    },
    thumbnailWrapper: {
      position: 'relative',
      cursor: 'pointer',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
      transition: 'transform 0.3s ease',
    },
    thumbnail: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      transition: 'transform 0.3s ease',
    },
    videoModal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    videoContainer: {
      position: 'relative',
      width: '90%',
      maxWidth: '1200px',
      aspectRatio: '16/9',
    },
    closeButton: {
      position: 'absolute',
      top: '40px',
      right: '0',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '30px',
      cursor: 'pointer',
      padding: '10px',
    },
    iframe: {
      borderRadius: '8px',
    },

    heroTitle: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 'bold',
      marginBottom: '20px',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
      opacity: '0.9',
      marginBottom: '30px'
    },
    badge: {
      background: 'rgba(255,255,255,0.2)',
      padding: '8px 20px',
      borderRadius: '25px',
      display: 'inline-block',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '30px'
    },
    card: {
      background: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
      border: '1px solid #e9ecef'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '15px'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      background: '#f8f9fa',
      borderRadius: '10px',
      fontSize: '0.95rem'
    },
    icon: {
      marginRight: '12px',
      fontSize: '1.2rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    input: {
      padding: '12px 15px',
      border: '2px solid #e9ecef',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      outline: 'none'
    },
    select: {
      padding: '12px 15px',
      border: '2px solid #e9ecef',
      borderRadius: '8px',
      fontSize: '1rem',
      backgroundColor: 'white',
      outline: 'none'
    },
    button: {
      padding: '15px 30px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    },
    paymentCard: {
      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      color: 'white',
      textAlign: 'center'
    },
    paymentTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    price: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    originalPrice: {
      fontSize: '1.2rem',
      textDecoration: 'line-through',
      opacity: '0.7',
      marginBottom: '20px'
    },
    paymentButton: {
      background: 'white',
      color: '#11998e',
      padding: '15px 40px',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      transition: 'transform 0.2s ease'
    },
    successCard: {
      background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '40px'
    },
    successIcon: {
      fontSize: '4rem',
      marginBottom: '20px'
    },
    features: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    featureItem: {
      padding: '10px 0',
      borderBottom: '1px solid #e9ecef',
      display: 'flex',
      alignItems: 'center'
    },
    checkIcon: {
      color: '#28a745',
      marginRight: '10px',
      fontSize: '1.1rem'
    }
  };

  if (isRegistered) {
    return (
      <div style={styles.container}>
        <div style={{ ...styles.card, ...styles.successCard }}>
          <div style={styles.successIcon}>🎉</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Registration Successful!</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Welcome to the Live React Masterclass! You'll receive a confirmation email shortly.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '10px' }}>
            <p><strong>Class Details:</strong></p>
            <p>📅 Date: {formatDateToReadable(courseDetail.startTime)}</p>
            <p>🕒 Time: {formatTimeToReadable(courseDetail.startTime)} - {formatTimeToReadable(courseDetail.endTime)} IST</p>
            <p>💻 Platform: Zoom/Google (Link will be emailed)</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      {/* <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Live React Masterclass</h1>
        <p style={styles.heroSubtitle}>Master Modern React Development in 2 Hours</p>
        <div style={styles.badge}>🔴 LIVE SESSION</div>
      </div> */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>{courseDetail.title}</h1>
          <p style={styles.heroSubtitle}>{courseDetail.subtitle}</p>
          <div style={styles.badge}>🔴 LIVE SESSION</div>
        </div>
        <div style={styles.heroThumbnail}>
          <div style={styles.thumbnailWrapper} onClick={() => window.open('https://www.youtube.com/watch?v=sFBsdKYE3FY', '_blank')}>
            <img
              src={courseDetail.thumbnail}
              alt="Masterclass Preview"
              style={styles.thumbnail}
            />
            <div style={styles.playButton}>
              <svg width="68" height="48" viewBox="0 0 68 48" fill="none">
                <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" />
                <path d="M 45,24 27,14 27,34" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.grid}>
        {/* Class Information */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>📚 Class Information</h3>
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <span style={styles.icon}>📅</span>
              <div>
                <strong>Date:</strong><br />
                {formatDateToReadable(courseDetail.startTime)}
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.icon}>🕒</span>
              <div>
                <strong>Time:</strong><br />
                {formatTimeToReadable(courseDetail.startTime)} - {formatTimeToReadable(courseDetail.endTime)} IST
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.icon}>💻</span>
              <div>
                <strong>Platform:</strong><br />
                Zoom Meeting / Google Meeting
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.icon}>👥</span>
              <div>
                <strong>Seats:</strong><br />
                Limited to {courseDetail.seats} students
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.icon}>🎯</span>
              <div>
                <strong>Level:</strong><br />
                Beginner to Intermediate
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.icon}>⏱️</span>
              <div>
                <strong>Duration:</strong><br />
                {getHourMinuteDifference(courseDetail.startTime,courseDetail.endTime)} Interactive Session
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🎯 What You'll Learn</h3>
          <ul style={styles.features}>
            {courseDetail.topicToLearn.split(',').map((item,idx)=>
            <li style={styles.featureItem} key={idx}>
              <span style={styles.checkIcon}>✅</span>
              {item}
            </li>)}
          </ul>
        </div>
      </div>

      <div style={styles.grid}>
        {/* Registration Form */}
        {!showPayment && (
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📝 Register Now</h3>
            <div style={styles.form}>
              <Row>
                <Col >
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                      isInvalid={!!errors.fullName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.fullName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
               <Row>
                <Col >
                  <Form.Group>
                    <Form.Control
                      type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
               <Row>
                <Col >
                  <Form.Group>
                    <Form.Control
                      type="tel"
                name="phoneNumber"
                placeholder="Phone Number *"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                style={styles.input}
                      isInvalid={!!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              
               <Row>
                <Col >
                  <Form.Group>
               <Form.Select  
                name="level"
                value={formData.level}
                onChange={handleInputChange}
               style={styles.input} 
               >
              <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
    </Form.Select>
    </Form.Group>
                </Col>
              </Row>
              
              <button
                onClick={handleRegistration}
                style={styles.button}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Proceed to Payment  {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
              </button>
            </div>
          </div>
        )}

        {/* Payment Section */}
        {showPayment && (
          <div style={{ ...styles.card, ...styles.paymentCard }}>
            <h3 style={styles.paymentTitle}>💳 Complete Payment</h3>
            <div style={styles.price}>{courseDetail.price}</div>
            <div style={styles.originalPrice}>₹{courseDetail.price + courseDetail.price}</div>
            <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
              🎁 Early Bird Discount - 50% OFF!
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Student:</strong> {formData.fullName}
            </p>
            <button
              onClick={handlePayment}
              style={styles.paymentButton}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              💸 Pay with UPI
            </button>
            <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: '0.8' }}>
              Secure payment via UPI apps like PhonePe, Paytm, Google Pay
            </p>
          </div>
        )}

        {/* Instructor Info */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>👨‍💻 Your Instructor</h3>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto 15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: 'white'
            }}>
              👨‍💻
            </div>
            <h4 style={{ marginBottom: '10px' }}>{intructor?.fullName}</h4>
            <p style={{ color: '#666', marginBottom: '20px' }}>Senior React Developer</p>
          </div>
          <ul style={styles.features}>
            <li style={styles.featureItem}>
              <span style={styles.checkIcon}>⭐</span>
             {intructor?.experience}+ years React experience
            </li>
            <li style={styles.featureItem}>
              <span style={styles.checkIcon}>⭐</span>
              {intructor?.studentsTaught}+ students taught
            </li>
            <li style={styles.featureItem}>
              <span style={styles.checkIcon}>⭐</span>
              {intructor?.rating}/5 rating
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '10px'
      }}>
        {/* <p style={{ margin: '0', color: '#666' }}>
          🔒 Secure Payment | 📧 Email Support | 📱 Mobile Friendly
        </p> */}
      </div>
    </div>
  );
};

export default LiveClassRegistration;