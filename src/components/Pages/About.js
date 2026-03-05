import React from 'react';
import './Pages.css';
import heroImg from '../../assets/images/about/about1.png';
import aboutImg from '../../assets/images/about/about2.png';

const About = () => {
  return (
    <div className="page-container about-page">
      {/* Hero */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content container">
          {/* <h1 className="about-hero-title">About Us </h1> */}
          <p className="about-hero-subtitle">
          From art on the walls to art in motion — Marcelle continues the legacy of form.
          </p>
          <p className="about-hero-subtitle">Where movement becomes design, and every class a curated experience.</p>
        </div>
      </section>

      {/* Our Story section */}
      <section className="about-section container">
        <div className="about-grid">
          <div className="about-image-wrap">
            <img src={aboutImg} alt="Marcelle Studios reformer Pilates" className="about-image" />
          </div>
          <div className="about-text">
            <h2 className="section-title">About Marcelle Studios</h2>
            <p>
              Housed in the former home of Fox Galleries, our studio inherits a spirit of curation and
              creativity. Every detail — from the sculptural reformers to the gallery-like interiors — has
              been designed with intention, offering an experience that feels as considered as it is
              transformative.
            </p>
            <p>
              Our classes blend contemporary reformer Pilates with purposeful sequencing that challenges and
              refines. Strength, precision and flow are balanced with the kind of aesthetic detail that
              elevates Pilates into a lifestyle.
            </p>
            <p>
              In Collingwood’s creative heart, Marcelle is more than a studio. It is a sanctuary of movement
              and design, where consistency becomes transformation and self-care feels like quiet luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Why Marcelle */}
      <section className="about-section container">
        <div className="about-copy">
          <h2 className="section-title">Why Marcelle?</h2>
          <p>
            Marcelle Studios is more than a place to move — it is a sanctuary of ritual and design. Our
            boutique Collingwood studio offers intimate classes where every detail has been curated with
            intention, from the flow of movement to the calm, gallery-like setting.
          </p>
          <p>
            Here, Pilates is not just exercise. It is a lifestyle that cultivates strength, clarity and
            presence. With expert instructors, thoughtful sequencing and a supportive community, Marcelle
            invites you to elevate your practice and embrace movement as quiet luxury.
          </p>
          <blockquote className="about-quote">
            “From Collingwood’s creative heart, Marcelle invites you to embrace Pilates as art, ritual and
            lifestyle.”
          </blockquote>
          <blockquote className="about-quote">
            “Marcelle Studios is a boutique reformer Pilates space in Collingwood, where movement becomes
            ritual and design shapes every detail.”
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default About;
