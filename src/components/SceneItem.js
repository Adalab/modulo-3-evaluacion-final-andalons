import { Link } from 'react-router-dom';
import '../styles/layout/SceneItem.scss';

const SceneItem = (props) => {
  return (
    <Link className="card" to={`/scene/${props.item.id}`}>
      <img
        className="card__poster"
        src={props.item.poster}
        alt={props.item.movie}
        /* width="200px" */
      />
      <h3 className="card__movie">{`${props.item.movie} (${props.item.year})`}</h3>
      <p className="card__quote">{props.item.quote}</p>
    </Link>
  );
};

export default SceneItem;
