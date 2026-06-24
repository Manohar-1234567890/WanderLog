const BASE_URL = "/api/countries";

export const getAllCountries = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
};

export const getCountryByCode = async (code) => {
  const response = await fetch(`${BASE_URL}?code=${encodeURIComponent(code)}`);

  if (!response.ok) {
    throw new Error("Country not found");
  }

  return response.json();
};