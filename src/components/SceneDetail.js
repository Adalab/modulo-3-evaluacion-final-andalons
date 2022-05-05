import { Link } from 'react-router-dom';

const SceneDetail = (props) => {
  let html = '';
  const isEmpty = Object.keys(props.scene).length === 0;
  if (isEmpty) {
    html = (
      <section className="error-section">
        <p>Oops! This URL does not match any existing scene.</p>
        <Link to="/">Go back to our main website</Link>
      </section>
    );
  } else {
    html = (
      <section className="detail-section">
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
  }
  return <>{html}</>;
};

export default SceneDetail;
