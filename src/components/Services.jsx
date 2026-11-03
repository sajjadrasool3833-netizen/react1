import React from 'react';
import { FaDesktop, FaMobileAlt, FaPenNib, FaPaintBrush } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    { icon: <FaPenNib className="icon" />, title: 'UI/UX', desc: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.' },
    { icon: <FaDesktop className="icon" />, title: 'Web Design', desc: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.' },
    { icon: <FaMobileAlt className="icon" />, title: 'App Design', desc: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.' },
    { icon: <FaPaintBrush className="icon" />, title: 'Graphic Design', desc: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.' },
  ];

  return (
    <section className="services-section" id="services" ref={ref}>
      <h2 className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>Services</h2>
      <p className={`center-desc animate-on-scroll delay-1 ${isVisible ? 'visible' : ''}`}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className={`service-card animate-on-scroll delay-${index + 1} ${isVisible ? 'visible' : ''}`}
            key={index}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;