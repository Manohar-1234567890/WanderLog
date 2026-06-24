import { useContext } from "react";

import { Link } from "react-router-dom";

import { BucketListContext }
from "../../context/BucketListContext";

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

const WishList = () => {
  const {
    wishlist,
    removeFromWishlist,
  } = useContext(
    BucketListContext
  );

  return (
    <div className="list-grid">
      {wishlist.map((country) => (
        <div
          className="bucket-card"
          key={country.cca3}
        >
          <img
            src={getFlagUrl(country)}
            alt={country.name?.common || "Country flag"}
          />

          <h3>
            {country.name.common}
          </h3>

          <Link
            to={`/country/${country.cca3}`}
          >
            View
          </Link>

          <button
            onClick={() =>
              removeFromWishlist(
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

export default WishList;