import { useContext, useState } from "react";
import { BucketListContext } from "../../context/BucketListContext";

const CountryInfo = ({ country }) => {
  const [imageError, setImageError] = useState(false);
  const { visited, removeVisitedPhoto } = useContext(BucketListContext);

  const getFlagUrl = () => {
    try {
      const code = country?.cca2?.toLowerCase();
      const code3 = country?.cca3?.toLowerCase();

      if (country?.flags?.svg) {
        return country.flags.svg;
      }

      if (country?.flags?.png) {
        return country.flags.png;
      }

      if (code) {
        return `https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/${code}.svg`;
      }

      if (code3) {
        return `https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/${code3}.svg`;
      }

      return null;
    } catch {
      return null;
    }
  };

  const flagUrl = imageError ? null : getFlagUrl();
  const visitedCountry = visited.find((item) => item.cca3 === country?.cca3);
  const photos = visitedCountry?.photos || [];

  return (
    <div className="country-info">
      {flagUrl ? (
        <img
          src={flagUrl}
          alt={country?.name?.common}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="country-flag-fallback">
          {country?.flag || "🌍"}
        </div>
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

      {photos.length > 0 && (
        <div className="photo-gallery">
          <h2>Travel Photos</h2>
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <div key={`${country.cca3}-${index}`} className="photo-card">
                <img src={photo} alt={`${country.name?.common} travel ${index + 1}`} />
                <button onClick={() => removeVisitedPhoto(country.cca3, photo)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;