import React from 'react';
import './Beginners.css';
import landingHero from '../../assets/images/Landing/landing2.png';

const MeetYourReformer = () => (
  <section className="container beg-reformer-section">
    <div className="beg-reformer-media">
      <img src={landingHero} alt="Reformer equipment at Marcelle" />
    </div>
    <div className="beg-reformer-copy">
      <h2 className="beg-heading-2">Meet Your Reformer</h2>
      <p className="beg-reformer-intro">
        Your instructor will introduce you to the reformer before class begins. The reformer is made up of:
      </p>
      <ul className="beg-reformer-list">
        <li className="beg-reformer-row">
          <span className="reformer-part-name">Carriage</span>
          <span className="reformer-part-desc">The sliding platform you’ll move on</span>
        </li>
        <li className="beg-reformer-row">
          <span className="reformer-part-name">Springs</span>
          <span className="reformer-part-desc">coloured coils that adjust resistance levels</span>
        </li>
        <li className="beg-reformer-row">
          <span className="reformer-part-name"> Footbar</span>
          <span className="reformer-part-desc">your anchor point for feet, hands, and stability</span>
        </li>
        <li className="beg-reformer-row">
          <span className="reformer-part-name"> Shoulder Rests</span>
          <span className="reformer-part-desc">supports that keep your body aligned</span>
        </li>
        <li className="beg-reformer-row">
          <span className="reformer-part-name"> Straps</span>
          <span className="reformer-part-desc">for hands or feet to add range, strength, and flow</span>
        </li>
      </ul>
      <p className="beg-reformer-outro">
        Learning these parts will help you feel at ease and ready to move with confidence.
      </p>
    </div>
  </section>
);

const Beginners = () => {
  return (
    <div className="page-container beginners-page">
      <section className="container beginners-hero">
        <div className="beg-hero-copy">
          <h1 className="beg-heading">Your First Time at Marcelle</h1>
          <p className="beg-intro">
           We know stepping into something new can feel daunting - which is why we’ve designed the Marcelle experience to be seamless from the moment you arrive. Our reformer classes are open-level and intentionally curated, so whether it’s your very first Pilates session or your fiftieth, you’ll feel supported every step of the way.
          </p>
          <p className="beg-intro-secondary">
            Here are a few simple tips to help you feel confident, comfortable, and ready to move.
          </p>
        </div>
        <div className="beg-hero-media">
          <div className="hero-image hero-image-main">
            <img src={landingHero} alt="Marcelle Studios reformer class" />
          </div>
          <div className="hero-image hero-image-overlay">
            <img src={landingHero} alt="Marcelle Studios reformer detail" />
          </div>
        </div>
      </section>

      <section className="container beg-grid">
        <article className="beg-card">
          <div className="beg-card-media">
            <img src={landingHero} alt="Arrive early" />
          </div>
          <div className="beg-card-body">
            <h2 className="beg-title">Arrive Early</h2>
            <p>
              We recommend arriving 15 minutes before class. This gives you time to check in, meet your instructor, and familiarise
              yourself with the reformer.
            </p>
          </div>
        </article>

        <article className="beg-card">
          <div className="beg-card-media">
            <img src={landingHero} alt="What to wear" />
          </div>
          <div className="beg-card-body">
            <h2 className="beg-title">What to Wear</h2>
            <p>
              Choose fitted activewear that allows for ease of movement and helps your instructor see your alignment. Grip socks are
              required for safety and hygiene - you’re welcome to bring your own, or purchase a pair at the studio.
            </p>
          </div>
        </article>

        <article className="beg-card">
          <div className="beg-card-media">
            <img src={landingHero} alt="What to bring" />
          </div>
          <div className="beg-card-body">
            <h2 className="beg-title">What to Bring</h2>
            <p>
              Bring a water bottle to stay hydrated. We have a refill fountain available, and bottled water is also sold at
              reception. For your belongings, we provide cubbies where you can safely store shoes, phones, and keys so they are out
              of the way while you practice.
            </p>
          </div>
        </article>
      </section>

      <MeetYourReformer />

      <section className="container beg-grid">
        <article className="beg-card">
          <div className="beg-card-media">
            <img src={landingHero} alt="During class" />
          </div>
          <div className="beg-card-body">
            <h2 className="beg-title">During Class</h2>
            <p>
              Your instructor will guide you through each sequence and offer personalised adjustments. Every exercise can be
              modified - whether that means lighter springs, a smaller range of motion, or supportive props. Take breaks whenever
              you need to. Pilates is about consistency, not perfection.
            </p>
          </div>
        </article>

        <article className="beg-card">
          <div className="beg-card-media">
            <img src={landingHero} alt="Breath and mind-body connection" />
          </div>
          <div className="beg-card-body">
            <h2 className="beg-title">Breath & Mind–Body Connection</h2>
            <p>
              Breath is the foundation of Pilates. You will be guided to breathe intentionally throughout class - inhaling to
              prepare, exhaling to activate and release. This rhythm not only supports movement but also deepens the mind–body
              connection, reduces stress, and helps you move with greater awareness.
            </p>
          </div>
        </article>

        <article className="beg-card">
          <div className="beg-card-media">
            <img src={landingHero} alt="After class" />
          </div>
          <div className="beg-card-body">
            <h2 className="beg-title">After Class</h2>
            <p>
              We offer cool eucalyptus towels to refresh post-class. While there are no showers on-site, Pilates is strength-based
              with minimal cardio, so you will leave feeling energised rather than depleted.
            </p>
          </div>
        </article>

        <article className="beg-card">
          <div className="beg-card-media">
            <img src={landingHero} alt="Need extra support" />
          </div>
          <div className="beg-card-body">
            <h2 className="beg-title">Need Extra Support?</h2>
            <p>
              If it’s your very first time on the reformer, you may also wish to book a private session to get to know the equipment
              and build confidence.
            </p>
          </div>
        </article>

        <article className="beg-card">
          <div className="beg-card-media">
            <img src={landingHero} alt="Post-class care" />
          </div>
          <div className="beg-card-body">
            <h2 className="beg-title">Post-class care</h2>
            <p>
              After class, take a moment to cool down, hydrate, and notice how your body feels. Gentle stretching or a short walk
              can help you integrate the work you’ve just done.
            </p>
          </div>
        </article>

        <article className="beg-card">
          <div className="beg-card-media">
            <img src={landingHero} alt="Enjoy the experience" />
          </div>
          <div className="beg-card-body">
            <h2 className="beg-title">Enjoy the experience</h2>
            <p>
              Most importantly, enjoy your time in the studio. Each class is an opportunity to move with intention, build
              resilience, and leave feeling more connected to yourself.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Beginners;
