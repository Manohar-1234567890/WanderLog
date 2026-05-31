import { useContext } from "react";

import { BucketListContext }
from "../../context/BucketListContext";

const VisitedList = () => {
  const {
    visited,
    removeFromVisited,
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
            src={country.flags.png}
            alt=""
          />

          <h3>
            {country.name.common}
          </h3>

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