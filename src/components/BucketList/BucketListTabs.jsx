const BucketListTabs = ({
  active,
  setActive,
}) => {
  return (
    <div className="tabs">
      <button
        className={
          active === "wishlist"
            ? "active"
            : ""
        }
        onClick={() =>
          setActive("wishlist")
        }
      >
        Wishlist
      </button>

      <button
        className={
          active === "visited"
            ? "active"
            : ""
        }
        onClick={() =>
          setActive("visited")
        }
      >
        Visited
      </button>
    </div>
  );
};

export default BucketListTabs;