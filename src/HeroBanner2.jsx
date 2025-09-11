import React from "react";
import "./App.css"; // make sure App.css is imported

const Hero2 = () => {
  return (
    <section className="hero-banner">
      {/* Animated background circles */}
      <div className="blur-circle circle1"></div>
      <div className="blur-circle circle2"></div>
      <div className="blur-circle circle3"></div>

      {/* Main content */}
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Building beautiful UI with smooth animations</p>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero2;
