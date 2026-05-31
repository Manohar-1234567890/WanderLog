import { useContext } from "react";

import { Link } from "react-router-dom";

import { BucketListContext }
from "../../context/BucketListContext";

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
            src={country.flags.png}
            alt=""
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