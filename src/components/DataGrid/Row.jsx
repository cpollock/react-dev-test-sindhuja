import React from "react";

const Row = ({ rowIdx, item }) => {
  const { type, value, name, selected } = item;
  const rowStyle = { border: "solid 1px" };
  if (selected) rowStyle.backgroundColor = "lightblue";
  const handleSelect = (e) => {
    const payload = { index: rowIdx };
    //dispatch SELECT_ROW with rowIdx as payload {index:rowIdx}
  };
  const handleValueEdit = (e) => {
    const value = e.target.value;
    const payload = { index: rowIdx, value };

    //dispatch EDIT_VALUE with rowIdx, value as payload
  };

  return (
    <div style={rowStyle} onClick={handleSelect}>
      <span>Type: {type}</span>
      {selected ? (
        <input value={value} onChange={handleValueEdit} />
      ) : (
        <span>Value: {value}</span>
      )}
      {type === "bar" && <span>Name: {name}</span>}
    </div>
  );
};

export default Row;
