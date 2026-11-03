import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <h2 className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>Lets Design Together</h2>
      <p className={`center-desc animate-on-scroll delay-1 ${isVisible ? 'visible' : ''}`}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      </p>
      <form
        className={`contact-form animate-on-scroll delay-2 ${isVisible ? 'visible' : ''}`}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">
          {submitted ? '✓ Sent!' : 'Contact Me'}
        </button>
      </form>
    </section>
  );
};

export default Contact;