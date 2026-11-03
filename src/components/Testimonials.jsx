import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const user1 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop";

  return (
    <section className="testimonials-section" id="testimonials" ref={ref}>
      <h2 className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>Testimonials</h2>
      <p className={`center-desc animate-on-scroll delay-1 ${isVisible ? 'visible' : ''}`}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      </p>
      <div className={`testimonial-container animate-zoom delay-2 ${isVisible ? 'visible' : ''}`}>
        <div className="testimonial-card">
          <div className="t-user">
            <img src={user1} alt="User" />
          </div>
          <div className="t-text">
            <p>"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissimos malesuada commodo ultrices."</p>
            <h4>Name</h4>
            <span>CEO</span>
          </div>
        </div>
      </div>
      <div className={`slider-dots animate-on-scroll delay-3 ${isVisible ? 'visible' : ''}`}>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Testimonials;