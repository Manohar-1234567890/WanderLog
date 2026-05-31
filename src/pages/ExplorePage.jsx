import { useState } from "react";

import Navbar from "../components/Layout/Navbar";

import SearchBar from "../components/Explore/SearchBar";

import RegionFilter from "../components/Explore/RegionFilter";

import CountryGrid from "../components/Explore/CountryGrid";

import useCountries from "../hooks/useCountries";

const ExplorePage = () => {
  const {
    countries,
    loading,
    error,
  } = useCountries();

  const [search, setSearch] =
    useState("");

  const [region, setRegion] =
    useState("");

  const filteredCountries =
    countries.filter((country) => {
      const matchesSearch =
        country.name.common
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesRegion =
        region === ""
          ? true
          : country.region === region;

      return (
        matchesSearch &&
        matchesRegion
      );
    });

  return (
    <>
      <Navbar />

      <div className="explore-container">
        <div className="filters">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <RegionFilter
            region={region}
            setRegion={setRegion}
          />
        </div>

        {loading && (
          <h2>Loading Countries...</h2>
        )}

        {error && (
          <h2>{error}</h2>
        )}

        {!loading && (
          <CountryGrid
            countries={
              filteredCountries
            }
          />
        )}
      </div>
    </>
  );
};

export default ExplorePage;