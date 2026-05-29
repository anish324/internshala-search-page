export async function fetchInternships() {
  const API_URL = import.meta.env.VITE_API_URL || 'https://internshala.com/hiring/search';

  const response = await fetch(API_URL, {
    headers: { Accept: 'application/json' },
  });

  const data = await response.json();
  const internshipsMeta = data?.internships_meta ?? {};
  return Object.values(internshipsMeta);
}
