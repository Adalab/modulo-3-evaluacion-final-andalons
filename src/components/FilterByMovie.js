const FilterByMovie = (props) => {
  const handleFilter = (ev) => {
    props.handleMovieFilter(ev.target.value);
  };
  return (
    <>
      <label htmlFor="movieFilter">Movie:</label>
      <input
        type="text"
        name="movieFilter"
        id="movieFilter"
        onChange={handleFilter}
      />
    </>
  );
};
export default FilterByMovie;
