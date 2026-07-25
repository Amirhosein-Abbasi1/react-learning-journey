const Item = (props) => {
  return <div onClick={props.deleteItem}>{props.children}</div>;
};

export default Item;
