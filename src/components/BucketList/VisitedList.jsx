import { useContext } from "react";

import { BucketListContext }
from "../../context/BucketListContext";

const handlePhotoUpload = (event, country, updateVisitedPhoto) => {
  const file = event.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    updateVisitedPhoto(country.cca3, reader.result);
  };

  reader.readAsDataURL(file);
};

const getFlagUrl = (country) => {
  try {
    const code = country?.cca2?.toLowerCase();

    if (country?.flags?.svg) {
      return country.flags.svg;
    }

    if (country?.flags?.png) {
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

const VisitedList = () => {
  const {
    visited,
    removeFromVisited,
    updateVisitedPhoto,
  } = useContext(
    BucketListContext
  );

  return (
    <div className="list-grid">
      {visited.map((country) => (
        <div
          className="bucket-card"
          key={country.cca3}
        >
          <img
            src={country.photo || getFlagUrl(country)}
            alt={country.name?.common || "Country flag"}
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />

          <h3>
            {country.name.common}
          </h3>

          <label className="upload-photo-btn">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              onChange={(event) =>
                handlePhotoUpload(event, country, updateVisitedPhoto)
              }
              style={{ display: "none" }}
            />
          </label>

          <button
            onClick={() =>
              removeFromVisited(
                country.cca3
              )
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default VisitedList;