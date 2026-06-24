import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BucketListContext = createContext();

const BucketListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  const [visited, setVisited] = useLocalStorage("visited", []);

  const addToWishlist = (country) => {
    const exists = wishlist.some(
      (item) => item.cca3 === country.cca3
    );

    if (!exists) {
      setWishlist([...wishlist, country]);
    }
  };

  const addToVisited = (country) => {
    const exists = visited.some(
      (item) => item.cca3 === country.cca3
    );

    if (!exists) {
      setVisited([
        ...visited,
        {
          ...country,
          photo: country.photo || null,
          photos: country.photos || [],
        },
      ]);
    }

    setWishlist(
      wishlist.filter(
        (item) => item.cca3 !== country.cca3
      )
    );
  };

  const updateVisitedPhoto = (code, photo) => {
    setVisited(
      visited.map((item) =>
        item.cca3 === code ? { ...item, photos: [...(item.photos || []), photo] } : item
      )
    );
  };

  const removeVisitedPhoto = (code, photoToRemove) => {
    setVisited(
      visited.map((item) =>
        item.cca3 === code
          ? { ...item, photos: (item.photos || []).filter((photo) => photo !== photoToRemove) }
          : item
      )
    );
  };

  const removeFromWishlist = (code) => {
    setWishlist(
      wishlist.filter((item) => item.cca3 !== code)
    );
  };

  const removeFromVisited = (code) => {
    setVisited(
      visited.filter((item) => item.cca3 !== code)
    );
  };

  return (
    <BucketListContext.Provider
      value={{
        wishlist,
        visited,
        addToWishlist,
        addToVisited,
        updateVisitedPhoto,
        removeVisitedPhoto,
        removeFromWishlist,
        removeFromVisited,
      }}
    >
      {children}
    </BucketListContext.Provider>
  );
};

export default BucketListProvider;