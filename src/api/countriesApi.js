const COUNTRIES_URL =
  "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";

const normalizeCountry = (country) => ({
  ...country,
  cca3: country.cca3 || country.cca2,
  name: country.name || {},
  flags: country.flags || {},
  capital: Array.isArray(country.capital) ? country.capital : [country.capital],
  population: country.population || 0,
  region: country.region || "Unknown",
  subregion: country.subregion || "Unknown",
  area: country.area || 0,
  timezones: country.timezones || [],
  languages: country.languages || {},
  currencies: country.currencies || {},
});

export const getAllCountries = async () => {
  const response = await fetch(COUNTRIES_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  const data = await response.json();

  return data
    .filter((country) => country.name?.common)
    .map(normalizeCountry)
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
};

export const getCountryByCode = async (code) => {
  const countries = await getAllCountries();
  const normalizedCode = String(code).toUpperCase();

  const country = countries.find(
    (item) =>
      item.cca3 === normalizedCode ||
      item.cca2 === normalizedCode ||
      item.cioc === normalizedCode
  );

  if (!country) {
    throw new Error("Country not found");
  }

  return country;
};