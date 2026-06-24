export default async function handler(req, res) {
  try {
    const { code } = req.query;

    const response = await fetch(
      "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
    );

    if (!response.ok) {
      return res.status(response.status).json({
        message: code ? "Country not found" : "Failed to fetch countries",
      });
    }

    const data = await response.json();

    const normalized = data.map((country) => ({
      ...country,
      cca3: country.cca3 || country.cca2,
      name: country.name || {},
      flags: country.flags || {},
      capital: country.capital || [],
      population: country.population || 0,
      region: country.region || "Unknown",
      subregion: country.subregion || "Unknown",
      area: country.area || 0,
      timezones: country.timezones || [],
      languages: country.languages || {},
      currencies: country.currencies || {},
    }));

    if (code) {
      const country = normalized.find(
        (item) =>
          item.cca3 === code || item.cca2 === code || item.cioc === code
      );

      return res.status(country ? 200 : 404).json(country || null);
    }

    return res.status(200).json(
      normalized
        .filter((country) => country.name?.common)
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map((country) => ({
          ...country,
          capital: Array.isArray(country.capital) ? country.capital : [country.capital],
        }))
    );
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch countries" });
  }
}
