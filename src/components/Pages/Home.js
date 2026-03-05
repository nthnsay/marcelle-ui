import React from 'react';
import './Pages.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="container">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Marcelle Studios</h1>
            <p className="hero-subtitle">
              Creative digital solutions that bring your vision to life
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            We specialize in creating beautiful, functional digital experiences
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Web Design</h3>
              <p>Modern, responsive websites that engage your audience</p>
            </div>
            <div className="feature-card">
              <h3>Brand Identity</h3>
              <p>Distinctive visual identities that tell your story</p>
            </div>
            <div className="feature-card">
              <h3>Digital Strategy</h3>
              <p>Strategic planning for your digital presence</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
