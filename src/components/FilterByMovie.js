import '../styles/layout/Filters.scss';

const FilterByMovie = (props) => {
  const handleFilter = (ev) => {
    props.handleMovieFilter(ev.target.value);
  };
  return (
    <fieldset className="fieldset">
      <label className="label" htmlFor="movieFilter">
        Movie:
      </label>
      <input
        className="movieInput"
        type="text"
        name="movieFilter"
        id="movieFilter"
        value={props.movieFilterData}
        onChange={handleFilter}
        onKeyPress={(e) => {
          e.key === 'Enter' && e.preventDefault();
        }}
      />
    </fieldset>
  );
};
export default FilterByMovie;
