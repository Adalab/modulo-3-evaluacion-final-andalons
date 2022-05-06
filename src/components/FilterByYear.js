import '../styles/layout/Filters.scss';

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
    <fieldset className="fieldset">
      <label className="label" htmlFor="yearFilter">
        Year:
      </label>
      <select
        className="yearSelect"
        name="yearFilter"
        id="yearFilter"
        onChange={handleFilter}
        value={props.yearFilterData}
      >
        <option value="All">All</option>
        {renderSelectOptions()}
      </select>
    </fieldset>
  );
};
export default FilterByYear;
