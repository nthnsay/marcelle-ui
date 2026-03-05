import React from 'react';
import './Pages.css';

const Services = () => {
  return (
    <div className="page-container">
      <div className="container">
        <section className="section">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to your needs
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Design & Development</h3>
              <p>
                Custom websites that are beautiful, fast, and optimized for all devices. 
                From concept to launch, we create digital experiences that engage and convert.
              </p>
              <ul>
                <li>Responsive Design</li>
                <li>E-commerce Solutions</li>
                <li>Content Management Systems</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Brand Identity</h3>
              <p>
                Distinctive visual identities that communicate your brand's essence 
                and connect with your target audience across all touchpoints.
              </p>
              <ul>
                <li>Logo Design</li>
                <li>Brand Guidelines</li>
                <li>Marketing Materials</li>
                <li>Brand Strategy</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Digital Strategy</h3>
              <p>
                Strategic planning and consultation to maximize your digital presence 
                and achieve your business objectives through thoughtful design.
              </p>
              <ul>
                <li>User Experience Design</li>
                <li>Digital Audits</li>
                <li>Growth Strategy</li>
                <li>Analytics & Insights</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
