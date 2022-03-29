import genRandomNum from "../../util/genRandomNum";
import genRandomStr from "../../util/genRandomStr";

const rowReducer = (
  state = [{ type: "foo", value: 5, selected: false }],
  action
) => {
  switch (action.type) {
    case "ADD_ROW":
      const newObj = { selected: false };
      newObj.type =
        state.length && state[state.length - 1].type === "foo" ? "bar" : "foo";
      newObj.value = genRandomNum();

      if (newObj.type === "bar") newObj.name = genRandomStr();

      return (state = [{ ...state, newObj }]);
    case "SELECT_ROW":
      const selectedItem = state.filter((item) => item.selected);
    //make that item selected false
    //make the new item selected true
    default:
      return state;
  }
};

export default rowReducer;
