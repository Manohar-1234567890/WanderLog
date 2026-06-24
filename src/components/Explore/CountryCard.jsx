import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
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
        return `https://flagcdn.com/w320/${code}.png`;
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
          style={{ width: "100%", height: "140px", objectFit: "cover" }}
        />
      ) : (
        <div style={{
          width: "100%",
          height: "140px",
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
          <strong>Region:</strong>{" "}
          {country.region}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;