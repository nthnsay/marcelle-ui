import React from 'react';
import './Pages.css';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            We'd love to hear about your project. Send us a message and we'll get back to you soon.
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell us about your project..." required />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
