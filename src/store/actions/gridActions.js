const addRow = () => {
  return { type: "ADD_ROW" };
};

const selectRow = ({ index }) => {
  return { type: "SELECT_ROW", payload: { currentSelectedIdx: index } };
};
