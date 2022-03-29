import React from "react";

const Row = ({ type, value, name, selected }) => {
  const rowStyle = { border: "solid 1px" };
  if (selected) rowStyle.backgroundColor = "lightblue";

  //onclick dispatch SELECT_ROW

  return (
    <div style={rowStyle}>
      <span>Type: {type}</span>
      <span>Value: {value}</span>
      {type === "bar" && <span>Name: {name}</span>}
    </div>
  );
};

export default Row;
