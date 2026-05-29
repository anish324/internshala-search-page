import React from 'react';
import Header from './components/Header';
import FiltersPanel from './components/FiltersPanel';
import ResultsPanel from './components/ResultsPanel';
import { useInternships } from './controllers/useInternships';

function App() {
  const {
    internships,
    loading,
    error,
    searchQuery,
    filters,
    profiles,
    durations,
    locations,
    filteredInternships,
    handleFilterChange,
    handleSearchChange,
    handleReset,
  } = useInternships();

  return (
    <div className="page-shell">
      <Header total={internships.length} visible={loading ? '...' : filteredInternships.length} />

      <main className="content-grid">
        <FiltersPanel
          profiles={profiles}
          locations={locations}
          durations={durations}
          filters={filters}
          onFilterChange={handleFilterChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onReset={handleReset}
        />

        <section className="results-panel">
          <ResultsPanel loading={loading} error={error} items={filteredInternships} />
        </section>
      </main>
    </div>
  );
}

export default App;
