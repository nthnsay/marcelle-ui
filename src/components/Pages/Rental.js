import React from 'react';
import './Rental.css';
import studioImage from '../../assets/images/features/feature-studio.png';

const Rental = () => {
  return (
    <div className="page-container rental-page">
      <section className="container rental-main" aria-label="Marcelle studio rental">
        <div className="rental-copy">
          <p className="rental-kicker">Marcelle Studio Rental</p>
          <h1 className="rental-heading">Transform Your Gathering</h1>
          <p className="rental-intro">
            Marcelle Studios is more than a place to move. It is a space designed for beauty, creativity and connection. Located in
            Collingwood&apos;s cultural heart, our light filled, gallery like studio offers an elegant backdrop for workshops,
            retreats, trainings, photography shoots and intimate events.
          </p>

          <h2 className="rental-subheading">A Boutique Setting</h2>
          <p className="rental-body">
            Every detail of Marcelle reflects design and intention. From sculptural reformers and warm natural light to a refined
            sound system and curated interiors, the studio provides an atmosphere that elevates any occasion.
          </p>

          <h2 className="rental-subheading">What&apos;s Included</h2>
          <ul className="rental-list">
            <li>Exclusive use of Marcelle Studio space</li>
            <li>Reformers (optional for movement based bookings)</li>
            <li>High quality sound system</li>
            <li>Yoga and Pilates props (upon request)</li>
            <li>Lighting equipment (upon request)</li>
            <li>Reception area for guest welcome and storage cubbies</li>
            <li>Cold towels and clean label toiletries for a refreshing touch</li>
          </ul>

          <h2 className="rental-subheading">Events We Host</h2>
          <ul className="rental-list">
            <li>Creative workshops and trainings</li>
            <li>Wellness retreats and masterclasses</li>
            <li>Photography and film shoots</li>
            <li>Brand activations and private gatherings</li>
          </ul>

          <h2 className="rental-subheading">Rates</h2>
          <p className="rental-body">
            Available for hire by the hour with a minimum 2 hour booking. Pricing is tailored to event type and requirements.
          </p>
        </div>

        <aside className="rental-media-card" aria-hidden="true">
          <img className="rental-media" src={studioImage} alt="Marcelle studio interior" />
        </aside>
      </section>
    </div>
  );
};

export default Rental;
