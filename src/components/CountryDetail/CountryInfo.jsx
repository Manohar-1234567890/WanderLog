const CountryInfo = ({ country }) => {
  const getFlagUrl = () => {
    try {
      if (country.flags && country.flags.svg) {
        return country.flags.svg;
      } else if (country.flags && country.flags.png) {
        return `https://flagcdn.com/w600/${country.cca2?.toLowerCase()}.png`;
      }
      return null;
    } catch {
      return null;
    }
  };

  const flagUrl = getFlagUrl();

  return (
    <div className="country-info">
      {flagUrl && (
        <img
          src={flagUrl}
          alt={country.name?.common}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}

      <h1>{country.name?.common}</h1>

      <p>
        <strong>Capital:</strong>{" "}
        {country.capital?.[0] || "N/A"}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country.population?.toLocaleString()}
      </p>

      <p>
        <strong>Region:</strong>{" "}
        {country.region}
      </p>

      <p>
        <strong>Sub Region:</strong>{" "}
        {country.subregion}
      </p>

      <p>
        <strong>Area:</strong>{" "}
        {country.area?.toLocaleString()} km²
      </p>

      <p>
        <strong>Timezones:</strong>{" "}
        {country.timezones?.join(", ")}
      </p>

      <p>
        <strong>Languages:</strong>{" "}
        {country.languages
          ? Object.values(
              country.languages
            ).join(", ")
          : "N/A"}
      </p>

      <p>
        <strong>Currencies:</strong>{" "}
        {country.currencies
          ? Object.values(
              country.currencies
            )
              .map((c) => c.name)
              .join(", ")
          : "N/A"}
      </p>
    </div>
  );
};

export default CountryInfo;