import { useState } from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const [imageError, setImageError] = useState(false);

  const getFlagUrl = () => {
    try {
      const code = country.cca2?.toLowerCase();

      if (country.flags?.svg) {
        return country.flags.svg;
      }

      if (country.flags?.png) {
        return country.flags.png;
      }

      if (code) {
        return `https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/${code}.svg`;
      }

      return null;
    } catch {
      return null;
    }
  };

  const flagUrl = imageError ? null : getFlagUrl();

  return (
    <Link
      className="country-card"
      to={`/country/${country.cca3}`}
    >
      {flagUrl ? (
        <img
          src={flagUrl}
          alt={country.name.common}
          onError={() => setImageError(true)}
          loading="lazy"
          style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div className="country-card-fallback">
          {country.flag || "🌍"}
        </div>
      )}

      <div className="card-content">
        <h3>
          {country.name.common}
        </h3>

        <p>
          <strong>Capital:</strong>{" "}
          {country.capital?.[0] || "N/A"}
        </p>

        <p>
          <strong>Region:</strong>{" "}
          {country.region}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;