const FilterByYear = (props) => {
  const handleFilter = (ev) => {
    props.handleYearFilter(ev.target.value);
  };
  const renderSelectOptions = () => {
    return props.years.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };
  return (
    <>
      <label htmlFor="yearFilter">Year:</label>
      <select name="yearFilter" id="yearFilter" onChange={handleFilter}>
        <option value="All">All</option>
        {renderSelectOptions()}
      </select>
    </>
  );
};
export default FilterByYear;
