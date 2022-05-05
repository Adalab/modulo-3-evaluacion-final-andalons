import { Link } from 'react-router-dom';

const SceneItem = (props) => {
  return (
    <Link to={`/scene/${props.item.id}`}>
      <img
        className=""
        src={props.item.poster}
        alt={props.item.movie}
        width="200px"
      />
      <h3>{`${props.item.movie}, ${props.item.year}`}</h3>
      <p>{props.item.quote}</p>
    </Link>
  );
};

export default SceneItem;
