import React from "react";
import Row from "./Row";

const Grid = ({ data }) => {
  // data should ideally be retrieved from redux store, not passed are prop.
  return (
    <div>
      {data.map((item, i) => (
        <Row key={i} item={item} rowIdx={i} />
      ))}
    </div>
  );
};

export default Grid;
