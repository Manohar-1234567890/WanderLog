import { useContext } from "react";

import { BucketListContext }
from "../../context/BucketListContext";

const ActionButtons = ({
  country,
}) => {
  const {
    addToWishlist,
    addToVisited,
  } = useContext(
    BucketListContext
  );

  return (
    <div className="action-buttons">
      <button
        onClick={() =>
          addToWishlist(country)
        }
      >
        Add To Wishlist
      </button>

      <button
        onClick={() =>
          addToVisited(country)
        }
      >
        Mark As Visited
      </button>
    </div>
  );
};

export default ActionButtons;