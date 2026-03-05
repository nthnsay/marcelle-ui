import React from 'react';
import './Classes.css';
import rowImage from '../../assets/images/Landing/landing1.png';
import heroPushup from '../../assets/images/gallery/pushup.png';

const classesData = [
  {
    title: 'Signature',
    blurb:
      'The essence of Marcelle. A full-body reformer class that blends strength, balance and mobility. Signature is timeless, versatile and designed to leave you feeling aligned, energised and complete.',
  },
  {
    title: 'Sculpt',
    blurb:
      'Strength refined. This class focuses on shaping and toning with purposeful sequences that target key muscle groups. Expect a challenge that builds definition and creates long, lean lines.',
  },
  {
    title: 'Flow',
    blurb:
      'Movement as poetry. Seamless transitions and elevated sequences bring energy and rhythm to your practice. Flow is dynamic and uplifting, designed to push you further while keeping you present and connected.',
  },
  {
    title: 'Mastery',
    blurb:
      'The pinnacle of reformer practice. Reserved for those ready to explore advanced variations and powerful progressions, Mastery is an exploration of strength, endurance and control at the highest level.',
  },
];

const ClassRow = ({ title, blurb }) => (
  <article className="class-row">
    <img className="class-media" src={rowImage} alt="Marcelle class" />
    <div className="class-content">
      <h3 className="class-title">
        <span className="class-title-main">{title}</span>
      </h3>
      <p className="class-blurb">{blurb}</p>
      <div className="class-actions">
        <button className="btn btn-secondary" type="button">Learn more</button>
      </div>
    </div>
  </article>
);

const Classes = () => {
  return (
    <div className="page-container classes-page">
      {/* Hero image only, matching brand styling */}
      <section className="classes-hero container" aria-label="Classes hero">
        <img className="classes-hero-media" src={heroPushup} alt="Marcelle Studios class hero" />
      </section>

      {/* Rows */}
      <section className="classes-list container">
        {classesData.map((c) => (
          <ClassRow key={c.title} {...c} />)
        )}
      </section>
    </div>
  );
};

export default Classes;
