import Item from "./item";

const TimeList = (props) => {
  return (
    <div
      className="time-list-part"
      style={{ color: props.isLight ? "black" : "white" }}
    >
      {props.children.map((c) => {
        return <Item key={Math.random}>{c}</Item>;
      })}
    </div>
  );
};

export default TimeList;
