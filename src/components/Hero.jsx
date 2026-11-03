import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  const heroImg = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop";

  return (
    <section className="hero-section" id="home">
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="floating-circle circle-3"></div>

      <div className="hero-text">
        <p className="greeting">
          <span className="wave">👋</span> Hi! I am
        </p>
        <h1 className="name">ALISHBA</h1>
        <h1 className="role">
          Web <br />
          <span className="gradient-text">Developer</span>
        </h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>
        <div className="hero-buttons">
          <button
            className="btn-primary shine-btn"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
          >
            <span>Hire Me</span>
          </button>
          <button
            className="btn-outline"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
          >
            View Portfolio
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div className="circle-bg">
          <div className="glow-ring"></div>
          <img src={heroImg} alt="Alishba" />
        </div>
        <div className="social-icons">
          <a href="#" className="social-link"><FaFacebookF /></a>
          <a href="#" className="social-link"><FaTwitter /></a>
          <a href="#" className="social-link"><FaInstagram /></a>
          <a href="#" className="social-link"><FaLinkedinIn /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;