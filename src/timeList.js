import { useContext } from "react";
import Item from "./item";
import context from "./context";

const TimeList = (props) => {
  const usingContext = useContext(context);
  return (
    <div
      className="time-list-part"
      style={{ color: usingContext.isLight ? "black" : "white" }}
    >
      {usingContext.timeArr.map((c, index) => {
        return (
          <Item
            key={index}
            deleteItem={() => {
              usingContext.setTimeArr(
                usingContext.timeArr.filter((item, i) => i !== index),
              );
            }}
          >
            {c}
          </Item>
        );
      })}
    </div>
  );
};

export default TimeList;
