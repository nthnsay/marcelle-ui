import React from 'react';
import './LandingPage.css';
import featureBeds from '../../assets/images/features/feature-beds.png';
import featureStudio from '../../assets/images/features/feature-studio.png';
import featureTwoBeds from '../../assets/images/features/feature-two-beds.png';
import featureWomanInAction from '../../assets/images/features/feature-womanInAction.png';
import featureWomanLaughing from '../../assets/images/features/feature-womanLaughing.png';

const FeaturePanel = ({ title, blurb, image, alt, index }) => (
  <section className="feature-panel media-right">
    <div className="feature-panel-media">
      <img className="feature-media" src={image} alt={alt || ''} />
    </div>
    <div className="feature-panel-text">
      <span className="feature-index">0{index + 1}</span>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-blurb">{blurb}</p>
      <button className="link-btn" type="button">View More</button>
    </div>
  </section>
);

const features = [
  {
    title: 'Studio Schedule',
    blurb: 'Step into the rhythm of ritual. Our carefully curated timetable offers reformer Pilates for every body and every mood — from energising flows that challenge your strength, to restorative sequences designed to ground and reset.',
    image: featureWomanInAction,
    alt: 'Member on reformer during class at Marcelle Studios',
  },
  {
    title: 'Events & Gatherings',
    blurb: 'Beyond the reformer, we host intimate community events and lifestyle workshops designed to enrich your practice and expand your wellness journey. Think artful evenings, wellness talks, and curated experiences.',
    image: featureWomanLaughing,
    alt: 'Community event with members laughing and connecting',
  },
  {
    title: 'Private Studio Hire',
    blurb: 'Marcelle Studios is a space of understated elegance. With sculptural reformers, soft natural light, and a serene aesthetic, our studio transforms seamlessly for workshops, creative shoots, and boutique retreats.',
    image: featureStudio,
    alt: 'Minimal studio interior with soft natural light',
  },
  {
    title: 'Marcelle Membership',
    blurb: 'Your lifestyle, redefined. Marcelle Members enjoy the transformative benefits of consistent practice — supported by a holistic approach that nurtures both body and mind. A commitment to living beautifully.',
    image: featureBeds,
    alt: 'Row of reformer beds ready for members',
  },
  {
    title: 'Marcelle Moves',
    blurb: 'Every body moves differently. That\'s why our class styles are designed with intention — to meet you where you are, and take you further.',
    image: featureTwoBeds,
    alt: 'Two reformer beds prepared for a class',
  },
];

const LandingPage = () => {
  return (
    <div className="landing">

      {/* Feature panels — one per viewport */}
      {features.map((f, i) => (
        <FeaturePanel key={f.title} {...f} index={i} />
      ))}
      {/* Gallery + CTA — full-viewport split */}
      <section className="gallery-cta">
        <div className="gallery">
          <div className="tile tall placeholder" />
          <div className="tile tall placeholder" />
        </div>
        <div className="cta">
          <h2 className="cta-heading">Move your body</h2>
          <p className="cta-blurb">Mindful movement, strength, and flow. Discover classes and programs designed for every body.</p>
          <div className="cta-actions">
            <button className="btn btn-primary" type="button">View schedule</button>
            <button className="btn btn-secondary" type="button">Become a member</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
