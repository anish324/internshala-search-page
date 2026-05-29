export const stipendOptions = [
  { key: 'all', label: 'All stipends' },
  { key: 'under-10000', label: 'Up to ₹10,000' },
  { key: '10000-25000', label: '₹10,000 - ₹25,000' },
  { key: 'above-25000', label: 'Above ₹25,000' },
];

export function normalizeLocation(location) {
  return location?.trim();
}

export function getUniqueValues(items) {
  return [...new Set(items.filter(Boolean))];
}

export function getSalaryValue(internship) {
  return internship?.stipend?.salaryValue1 ?? null;
}

export function filterInternships(internships, filters, query) {
  const normalizedQuery = query?.trim().toLowerCase();

  return internships.filter((internship) => {
    if (filters.profile !== 'all' && internship.profile_name !== filters.profile) {
      return false;
    }

    if (filters.location !== 'all') {
      const locations = internship.location_names?.map(normalizeLocation) ?? [];
      if (!locations.includes(filters.location)) {
        return false;
      }
    }

    if (filters.duration !== 'all' && internship.duration !== filters.duration) {
      return false;
    }

    if (filters.stipend !== 'all') {
      const salary = getSalaryValue(internship);
      if (salary === null) {
        return false;
      }

      if (filters.stipend === 'under-10000' && salary > 10000) {
        return false;
      }
      if (filters.stipend === '10000-25000' && (salary < 10000 || salary > 25000)) {
        return false;
      }
      if (filters.stipend === 'above-25000' && salary <= 25000) {
        return false;
      }
    }

    if (normalizedQuery) {
      const haystack = [
        internship.title,
        internship.company_name,
        internship.profile_name,
        internship.duration,
        internship.location_names?.join(' '),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      if (!haystack.includes(normalizedQuery)) {
        return false;
      }
    }

    return true;
  });
}
