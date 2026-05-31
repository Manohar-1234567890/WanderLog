import CountryCard from "./CountryCard";

const CountryGrid = ({
  countries,
}) => {
  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
        />
      ))}
    </div>
  );
};

export default CountryGrid;