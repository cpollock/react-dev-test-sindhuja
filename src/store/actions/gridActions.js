const addRow = () => {
  return { type: "ADD_ROW" };
};

const selectRow = ({ index }) => {
  return { type: "SELECT_ROW", payload: { currentSelectedIdx: index } };
};

const editValue = ({ index, value }) => {
  return { type: "EDIT_VALUE", payload: { currentSelectedIdx: index, value } };
};
