import React from 'react';
import './Schedule.css';
import scheduleImg from '../../assets/images/schedule/scheduleImg.jpg';

const mockSchedule = {
  Monday: [
    { time: '06:15', name: 'Mat Pilates' },
    { time: '07:30', name: 'Reformer Signature' },
    { time: '09:00', name: 'Reformer Sculpt' },
    { time: '12:15', name: 'Reformer Flow' },
  ],
  Tuesday: [
    { time: '06:15', name: 'Mat Pilates' },
    { time: '07:30', name: 'Reformer Flow' },
    { time: '17:30', name: 'Reformer Signature' },
    { time: '18:30', name: 'Reformer Sculpt' },
  ],
  Wednesday: [
    { time: '06:15', name: 'Mat Pilates' },
    { time: '07:30', name: 'Reformer Sculpt' },
    { time: '12:15', name: 'Reformer Signature' },
    { time: '18:15', name: 'Reformer Flow' },
  ],
  Thursday: [
    { time: '06:15', name: 'Mat Pilates' },
    { time: '07:30', name: 'Reformer Signature' },
    { time: '12:15', name: 'Reformer Flow' },
    { time: '19:00', name: 'Run Club (Community)' },
  ],
  Friday: [
    { time: '06:15', name: 'Mat Pilates' },
    { time: '07:30', name: 'Reformer Flow' },
    { time: '12:15', name: 'Reformer Sculpt' },
  ],
  Saturday: [
    { time: '08:00', name: 'Reformer Signature' },
    { time: '09:15', name: 'Reformer Flow' },
    { time: '10:30', name: 'Mat Pilates' },
  ],
  Sunday: [
    { time: '08:30', name: 'Reformer Signature' },
    { time: '09:45', name: 'Reformer Flow' },
  ],
};

const DayColumn = ({ day, items }) => (
  <div className="day-col">
    <h3 className="day-heading">{day}</h3>
    <ul className="day-list">
      {items.map((it, idx) => (
        <li key={`${day}-${idx}`} className="day-item">
          <span className="slot-time">{it.time}</span>
          <span className="slot-name">{it.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Schedule = () => {
  const entries = Object.entries(mockSchedule);
  return (
    <div className="page-container schedule-page">
      <section className="schedule-main container">
        <div className="schedule-left">
          <span className="hero-kicker">Studio</span>
          <h1 className="hero-title">Schedule</h1>
          <div className="week-grid">
            {entries.map(([day, items]) => (
              <DayColumn key={day} day={day} items={items} />
            ))}
          </div>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button">View full schedule</button>
          </div>
        </div>
        <img className="schedule-media" src={scheduleImg} alt="Studio class at Marcelle" />
      </section>

      <section className="cta-banner">
        <div className="cta-overlay">
          <div className="cta-inner container">
            <div className="cta-logo" aria-hidden="true">MS</div>
            <p className="cta-eyebrow">Make your future bookings</p>
            <h2 className="cta-heading">easier</h2>
            <div className="cta-links">
              <button className="store-link" aria-label="App Store link (mock)">App Store</button>
              <button className="store-link" aria-label="Google Play link (mock)">Google Play</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
