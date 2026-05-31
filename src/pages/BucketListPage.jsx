import { useState } from "react";

import Navbar
from "../components/Layout/Navbar";

import WishList
from "../components/BucketList/WishList";

import VisitedList
from "../components/BucketList/VisitedList";

import BucketListTabs
from "../components/BucketList/BucketListTabs";

const BucketListPage = () => {
  const [active, setActive] =
    useState("wishlist");

  return (
    <>
      <Navbar />

      <div className="bucket-page">
        <h1>
          My Travel Bucket List
        </h1>

        <BucketListTabs
          active={active}
          setActive={setActive}
        />

        {active === "wishlist" ? (
          <WishList />
        ) : (
          <VisitedList />
        )}
      </div>
    </>
  );
};

export default BucketListPage;
