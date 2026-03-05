import React from 'react';
import './Membership.css';
import rowImage from '../../assets/images/Landing/landing1.png';
import heroPushup from '../../assets/images/gallery/pushup.png';

const memberships = [
  {
    name: 'Casual Pass',
    tag: 'The Visit',
    blurb: 'Casual pass. A single class to drop in and experience Marcelle.',
  },
  {
    name: 'Intro Offer',
    tag: 'The Welcome',
    blurb: 'Introductory offer. Begin your journey with a taste of what consistent practice can bring.',
  },
  {
    name: '10 Pack',
    tag: 'The Beginning Ten',
    blurb: '10 class pack. A starting point to build rhythm and establish your foundation.',
  },
  {
    name: '15 Pack',
    tag: 'The Journey Fifteen',
    blurb: '15 class pack. A steady pathway for those ready to go deeper into practice.',
  },
  {
    name: '20 Pack',
    tag: 'The Destination Twenty',
    blurb: '20 class pack. A commitment to consistent movement and the transformative lifestyle of Marcelle.',
  },
];

const MembershipRow = ({ name, tag, blurb }) => (
  <article className="membership-row">
    <img className="membership-media" src={rowImage} alt="Marcelle membership" />
    <div className="membership-content">
      <h3 className="membership-title">
        <span className="membership-title-main">{name}</span>
        <span className="membership-title-tag">
        {tag}
        </span>
      </h3>
      <p className="membership-blurb">{blurb}</p>
    </div>
  </article>
);

const Membership = () => {
  return (
    <div className="page-container membership-page">

      <section className="membership-list container">
        {memberships.map((m) => (
          <MembershipRow key={m.name} {...m} />
        ))}
      </section>
    </div>
  );
};

export default Membership;
