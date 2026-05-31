import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCountryByCode }
from "../api/countriesApi";

import Navbar
from "../components/Layout/Navbar";

import CountryInfo
from "../components/CountryDetail/CountryInfo";

import ActionButtons
from "../components/CountryDetail/ActionButtons";

const CountryDetailPage = () => {
  const { code } = useParams();

  const [country, setCountry] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadCountry = async () => {
      try {
        const data =
          await getCountryByCode(code);

        setCountry(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadCountry();
  }, [code]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="country-page">
        <CountryInfo
          country={country}
        />

        <ActionButtons
          country={country}
        />
      </div>
    </>
  );
};

export default CountryDetailPage;
