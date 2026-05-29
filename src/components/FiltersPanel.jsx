import React from 'react';
import { stipendOptions } from '../utils/filters';

export default function FiltersPanel({
  profiles,
  locations,
  durations,
  filters,
  onFilterChange,
  searchQuery,
  onSearchChange,
  onReset,
}) {
  return (
    <aside className="filters-panel">
      <div className="panel-head">
        <h2>Search & Filter</h2>
        <button type="button" className="reset-button" onClick={onReset}>
          Reset all
        </button>
      </div>

      <div className="filter-group">
        <label htmlFor="search">Search</label>
        <input id="search" type="search" placeholder="Search by title, company, or profile" value={searchQuery} onChange={onSearchChange} />
      </div>

      <div className="filter-group">
        <label htmlFor="profile">Profile</label>
        <select id="profile" value={filters.profile} onChange={onFilterChange('profile')}>
          <option value="all">All profiles</option>
          {profiles.map((profile) => (
            <option key={profile} value={profile}>
              {profile}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="location">Location</label>
        <select id="location" value={filters.location} onChange={onFilterChange('location')}>
          <option value="all">All locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="duration">Duration</label>
        <select id="duration" value={filters.duration} onChange={onFilterChange('duration')}>
          <option value="all">All durations</option>
          {durations.map((duration) => (
            <option key={duration} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="stipend">Stipend</label>
        <select id="stipend" value={filters.stipend} onChange={onFilterChange('stipend')}>
          {stipendOptions.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="hint-box">
        <strong>Note</strong>
        <p>Filtering is performed in the browser for a fast experience.</p>
      </div>
    </aside>
  );
}
