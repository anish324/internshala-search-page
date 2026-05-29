import React from 'react';

export default function Header({ total, visible }) {
  return (
    <header className="header">
      <div className="intro-copy">
        <p className="eyebrow">Internshala</p>
        <h1>Internshala</h1>
        <p className="subtitle">Find internships, filter smartly, and apply with confidence.</p>
      </div>

      <div className="header-stats">
        <div className="stat-card">
          <span className="stat-label">Total internships</span>
          <strong>{total}</strong>
        </div>
        <div className="stat-card accent">
          <span className="stat-label">Visible results</span>
          <strong>{visible}</strong>
        </div>
      </div>
    </header>
  );
}
