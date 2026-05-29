import { useEffect, useMemo, useState } from 'react';
import { fetchInternships } from '../services/api';
import { filterInternships, getUniqueValues, normalizeLocation } from '../utils/filters';

export function useInternships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    profile: 'all',
    location: 'all',
    duration: 'all',
    stipend: 'all',
  });

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        const list = await fetchInternships();
        if (!mounted) return;
        setInternships(list);
      } catch (err) {
        setError('Unable to fetch internships. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const profiles = useMemo(
    () => getUniqueValues(internships.map((item) => item.profile_name)).sort(),
    [internships]
  );

  const durations = useMemo(
    () => getUniqueValues(internships.map((item) => item.duration)).sort(),
    [internships]
  );

  const locations = useMemo(
    () =>
      getUniqueValues(internships.flatMap((item) => item.location_names ?? []).map(normalizeLocation)).sort(),
    [internships]
  );

  const filteredInternships = useMemo(
    () => filterInternships(internships, filters, searchQuery).sort((a, b) => b.postedOnDateTime - a.postedOnDateTime),
    [internships, filters, searchQuery]
  );

  const handleFilterChange = (key) => (event) => {
    const value = event.target.value;
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleReset = () => {
    setSearchQuery('');
    setFilters({
      profile: 'all',
      location: 'all',
      duration: 'all',
      stipend: 'all',
    });
  };

  return {
    internships,
    loading,
    error,
    searchQuery,
    filters,
    setFilters,
    setSearchQuery,
    profiles,
    durations,
    locations,
    filteredInternships,
    handleFilterChange,
    handleSearchChange,
    handleReset,
  };
}
