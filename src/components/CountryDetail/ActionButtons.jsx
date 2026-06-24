import { useContext } from "react";

import { BucketListContext }
from "../../context/BucketListContext";

const ActionButtons = ({ country }) => {
  const {
    addToWishlist,
    addToVisited,
    visited,
    updateVisitedPhoto,
  } = useContext(BucketListContext);

  const isVisited = visited.some((item) => item.cca3 === country.cca3);

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      updateVisitedPhoto(country.cca3, reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="action-buttons">
      <button onClick={() => addToWishlist(country)}>
        Add To Wishlist
      </button>

      <button onClick={() => addToVisited(country)}>
        Mark As Visited
      </button>

      {isVisited && (
        <label className="upload-photo-btn">
          Upload Country Photo
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            style={{ display: "none" }}
          />
        </label>
      )}
    </div>
  );
};

export default ActionButtons;