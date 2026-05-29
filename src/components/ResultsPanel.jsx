import React from 'react';

export default function ResultsPanel({ loading, error, items }) {
  if (loading) return <div className="status-message">Loading internships...</div>;
  if (error) return <div className="status-message error">{error}</div>;
  if (items.length === 0) return <div className="status-message">No internships match the selected filters.</div>;

  return (
    <div className="cards-grid">
      {items.map((item) => (
        <article key={item.id} className="internship-card">
          <div className="card-header">
            <div>
              <p className="badge">{item.profile_name ?? 'Internship'}</p>
              <h3>{item.title}</h3>
            </div>
            <div className="pill-row">
              {item.is_premium && <span className="pill premium">Premium</span>}
              {item.work_from_home && <span className="pill remote">Remote</span>}
              {item.is_international_job && <span className="pill international">International</span>}
            </div>
          </div>

          <div className="card-meta">
            <div className="meta-line">
              <span className="meta-key">Company</span>
              <strong>{item.company_name}</strong>
            </div>
            <div className="meta-line">
              <span className="meta-key">Posted</span>
              <strong>{item.posted_on}</strong>
            </div>
            <div className="info-row">
              <span>{item.duration}</span>
              <span>{item.location_names?.slice(0, 3).join(', ') || 'Remote'}</span>
              <span>{item.stipend?.salary || 'Stipend not disclosed'}</span>
            </div>
          </div>

          <div className="card-footer">
            <a href={`https://internshala.com/hiring/${item.url}`} target="_blank" rel="noreferrer" className="apply-button">
              View Internship
            </a>
            <span className="application-status">{item.application_status_message?.message || 'No applicants yet'}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
