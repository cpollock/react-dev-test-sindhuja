import React from "react";
import Row from "./Row";

const Grid = ({ data }) => {
  return (
    <div>
      {data.map((item, i) => (
        <Row key={i} item={item} />
      ))}
    </div>
  );
};

export default Grid;
