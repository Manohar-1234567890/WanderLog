const RegionFilter = ({
  region,
  setRegion,
}) => {
  return (
    <select
      className="region-filter"
      value={region}
      onChange={(e) =>
        setRegion(e.target.value)
      }
    >
      <option value="">
        All Regions
      </option>

      <option value="Africa">
        Africa
      </option>

      <option value="Americas">
        Americas
      </option>

      <option value="Asia">
        Asia
      </option>

      <option value="Europe">
        Europe
      </option>

      <option value="Oceania">
        Oceania
      </option>
    </select>
  );
};

export default RegionFilter;