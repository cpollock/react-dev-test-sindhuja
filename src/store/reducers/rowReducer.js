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
      //make prev item selected false
      const prevSelected = state.findIndex((item) => item.selected);
      const updatedState = [...state];
      if (prevSelected !== -1) updatedState[prevSelected].selected = false;
      //make the new item selected true
      updatedState[action.payload.currentSelectedIdx].selected = true;

      return (state = [...updatedState]);
    default:
      return state;
  }
};

export default rowReducer;
