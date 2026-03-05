import React from 'react';
import './Events.css';

const EventItem = ({ title, description, cta }) => (
  <article className="event-item">
    <div className="event-media placeholder" aria-hidden="true" />
    <div className="event-content">
      <h3 className="event-title">{title}</h3>
      <p className="event-description">{description}</p>
      {cta && (
        <div className="event-actions">
          <button className="btn btn-secondary" type="button">{cta}</button>
        </div>
      )}
    </div>
  </article>
);

const Events = () => {
  return (
    <div className="page-container events-page">
      {/* Intro removed per request */}

      {/* Events list based on provided copy (image placeholders) */}
      <section className="events-list container">
        <EventItem
          title="Run Club"
          description="Move beyond the reformer. Our Run Club is a gentle invitation to take your practice outdoors, where rhythm meets breath and movement feels effortless in the open air. Designed for all paces, it is less about distance and more about connection, community and the joy of moving together."
          cta="Learn more"
        />
        <EventItem
          title="Mum & Bub (fortnightly)"
          description="Our Mum & Bub classes honour both strength and gentleness, guiding you through supportive reformer sequences while your little one rests close by. It is a moment of presence, community and care, tailored for new mothers returning to movement."
          cta="Learn more"
        />
        <EventItem
          title="Open House (for Instructors)"
          description="Our studio opens its doors to instructors seeking space for creativity and flow. The Marcelle Open House offers the rare chance to step onto the reformer, experiment with class plans and refine your craft in a serene, design-led environment. A sanctuary for teachers to explore, learn and elevate."
          cta="Learn more"
        />
        <EventItem
          title="Marcelle Challenges"
          description="Transformation thrives in ritual. Throughout the year we curate challenges to inspire commitment and consistency, whether it is a New Year reset, a winter boost, or the iconic 28 Classes in 28 Days. Each challenge is designed not for pressure, but for possibility: to deepen your practice, discover your strength and celebrate your progress."
          cta="Learn more"
        />
      </section>

      {/* Marcelle Moves (Class Styles) */}
      <section className="moves-section container">
        <h2 className="moves-heading">Marcelle Moves (Class Styles)</h2>
        <div className="moves-grid">
          <div className="move-style">
            <h3 className="move-title">Signature</h3>
            <p className="move-text">The essence of Marcelle. A full-body reformer class that blends strength, balance and mobility. Signature is timeless, versatile and designed to leave you feeling aligned, energised and complete.</p>
          </div>
          <div className="move-style">
            <h3 className="move-title">Sculpt</h3>
            <p className="move-text">Strength refined. This class focuses on shaping and toning with purposeful sequences that target key muscle groups. Expect a challenge that builds definition and creates long, lean lines.</p>
          </div>
          <div className="move-style">
            <h3 className="move-title">Flow</h3>
            <p className="move-text">Movement as poetry. Seamless transitions and elevated sequences bring energy and rhythm to your practice. Flow is dynamic and uplifting, designed to push you further while keeping you present and connected.</p>
          </div>
          <div className="move-style">
            <h3 className="move-title">Mastery</h3>
            <p className="move-text">The pinnacle of reformer practice. Reserved for those ready to explore advanced variations and powerful progressions, Mastery is an exploration of strength, endurance and control at the highest level.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
