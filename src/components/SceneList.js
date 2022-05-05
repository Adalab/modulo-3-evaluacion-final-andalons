import SceneItem from './SceneItem';
import '../styles/layout/SceneList.scss';

const SceneList = (props) => {
  const renderHTML = () => {
    let html = '';
    if (props.data.length === 0) {
      html = (
        <p>
          Oops! We couldn't find a movie that matches your search! Please, try
          again.
        </p>
      );
    } else {
      html = props.data.map((item, index) => {
        return (
          <li className="list__element" key={index}>
            <SceneItem item={item} />
          </li>
        );
      });
    }
    return html;
  };

  return (
    <section className="list-section">
      <ul className="list">{renderHTML()}</ul>
    </section>
  );
};

export default SceneList;
