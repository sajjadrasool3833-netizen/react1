import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [animate, setAnimate] = useState(false);
  const [counts, setCounts] = useState({});
  const sectionRef = useRef(null);

  const skills = [
    { name: 'UX', percentage: 90, delay: 0 },
    { name: 'Website Design', percentage: 85, delay: 200 },
    { name: 'App Design', percentage: 80, delay: 400 },
    { name: 'Graphic Design', percentage: 95, delay: 600 },
  ];

  const DURATION = 3000;
  const STEP_TIME = 16;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animate]);

  useEffect(() => {
    if (!animate) return;

    const timers = [];

    skills.forEach((skill) => {
      const startTimer = setTimeout(() => {
        let current = 0;
        const end = skill.percentage;
        const totalSteps = DURATION / STEP_TIME;
        const increment = end / totalSteps;

        const counter = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(counter);
          }
          setCounts((prev) => ({
            ...prev,
            [skill.name]: Math.round(current),
          }));
        }, STEP_TIME);

        timers.push(counter);
      }, skill.delay);

      timers.push(startTimer);
    });

    return () => {
      timers.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
    };
  }, [animate]);

  const aboutImg = "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop";

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-image">
        <img src={aboutImg} alt="About Alishba" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>
        <div className="skills">
          {skills.map((skill) => (
            <div className="skill-bar" key={skill.name}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{counts[skill.name] || 0}%</span>
              </div>
              <div className="progress-line">
                <span
                  style={{
                    width: animate ? `${skill.percentage}%` : '0%',
                    transition: `width ${DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${skill.delay}ms`,
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;