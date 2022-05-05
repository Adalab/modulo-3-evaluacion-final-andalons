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
        onKeyPress={(e) => {
          e.key === 'Enter' && e.preventDefault();
        }}
      />
    </>
  );
};
export default FilterByMovie;
