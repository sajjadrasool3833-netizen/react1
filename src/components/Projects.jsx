import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    { img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=500&fit=crop", cat: 'Web Design', title: 'AirCalling Landing Page Design' },
    { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop", cat: 'Web Design', title: 'Business Landing Page Design' },
    { img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=500&fit=crop", cat: 'Web Design', title: 'Ecom Web Page Design' },
  ];

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <h2 className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>My Projects</h2>
      <p className={`center-desc animate-on-scroll delay-1 ${isVisible ? 'visible' : ''}`}>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.
      </p>

      <div className={`filter-tabs animate-on-scroll delay-2 ${isVisible ? 'visible' : ''}`}>
        {['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className={`project-card animate-on-scroll delay-${index + 1} ${isVisible ? 'visible' : ''}`}
            key={index}
          >
            <img src={project.img} alt={project.title} />
            <p className="cat">{project.cat}</p>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;