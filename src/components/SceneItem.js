const SceneItem = (props) => {
  return (
    <>
      <img
        className=""
        src={props.item.poster}
        alt={props.item.movie}
        width="200px"
      />
      <h3>{`${props.item.movie}, ${props.item.year}`}</h3>
      <p>{props.item.quote}</p>
    </>
  );
};

export default SceneItem;
