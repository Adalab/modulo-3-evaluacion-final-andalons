import { Link } from 'react-router-dom';
import '../styles/layout/SceneDetail.scss';

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
        <Link className="go-back-link" to="/">
          Back to all scenes
        </Link>
        <article className="article">
          <img
            className="article__poster"
            src={props.scene.poster}
            alt={props.scene.movie}
            width="400px"
          />
          <div className="article__description">
            <h3 className="article__title">{props.scene.movie}</h3>
            <p className="article__quote">"{props.scene.quote}"</p>
            <p className="article__director">
              <strong>Director:</strong> {props.scene.director}
            </p>
            <a
              className="article__audio"
              href={props.scene.audio}
              target="_blank"
            >
              Original audio
            </a>
          </div>
        </article>
      </section>
    );
  }
  return <>{html}</>;
};

export default SceneDetail;
