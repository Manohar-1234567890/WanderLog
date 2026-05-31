import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const getFlagUrl = () => {
    try {
      if (country.flags && country.flags.svg) {
        return country.flags.svg;
      } else if (country.flags && country.flags.png) {
        // Use a CORS-friendly flag service
        return `https://flagcdn.com/w320/${country.cca2?.toLowerCase()}.png`;
      }
      return null;
    } catch {
      return null;
    }
  };

  const flagUrl = getFlagUrl();

  return (
    <Link
      className="country-card"
      to={`/country/${country.cca3}`}
    >
      {flagUrl ? (
        <img
          src={flagUrl}
          alt={country.name.common}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      ) : (
        <div style={{
          width: "100%",
          height: "200px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "60px"
        }}>
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
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString()}
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