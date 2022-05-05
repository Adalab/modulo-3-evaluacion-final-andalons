import { Link } from 'react-router-dom';
const SceneDetail = (props) => {
  return (
    <section className="detail-section">
      {' '}
      <img
        className=""
        src={props.scene.poster}
        alt={props.scene.movie}
        width="400px"
      />
      <h3>{props.scene.movie}</h3>
      <p>{props.scene.quote}</p>
      <p>{props.scene.director}</p>
      <a href={props.scene.audio} target="_blank">
        Listen audio
      </a>{' '}
      <Link to="/">Go back to all scenes</Link>
    </section>
  );
};

export default SceneDetail;
