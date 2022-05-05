import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

const Form = (props) => {
  return (
    <section className="form-section">
      <form className="form">
        <FilterByMovie
          handleMovieFilter={props.handleMovieFilter}
          movieFilterData={props.movieFilterData}
        />
        <FilterByYear
          handleYearFilter={props.handleYearFilter}
          years={props.years}
        />
      </form>
    </section>
  );
};

export default Form;
