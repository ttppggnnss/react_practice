import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// createStore 안에 reducer
// 기본적으로 state 와 action 을 받는다
export default createStore(function (state, action) {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + action.size };
  }
  return state;
}, composeWithDevTools());
