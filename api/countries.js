export default async function handler(req, res) {
  try {
    const { code } = req.query;

    const targetUrl = code
      ? `https://restcountries.com/v3.1/alpha/${encodeURIComponent(code)}`
      : "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3";

    const response = await fetch(targetUrl);

    if (!response.ok) {
      return res.status(response.status).json({
        message: code ? "Country not found" : "Failed to fetch countries",
      });
    }

    const data = await response.json();
    const payload = code ? data[0] : data;

    return res.status(200).json(payload);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch countries" });
  }
}
