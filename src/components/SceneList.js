import SceneItem from './SceneItem';

const SceneList = (props) => {
  const listItems = props.data.map((item, index) => {
    return (
      <li className="list__element" key={index}>
        <SceneItem item={item} />
      </li>
    );
  });
  return (
    <section className="list-section">
      <ul className="list">{listItems}</ul>
    </section>
  );
};

export default SceneList;
