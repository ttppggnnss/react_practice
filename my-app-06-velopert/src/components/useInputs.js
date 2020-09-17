import { useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET":
      return {
        ...action.initialForm,
      };
    default:
      throw new Error("Unhandled action");
  }
}
// custom hook 만들 때는
// use 라는 키워드로 시작해서 기능에 대한 단어를 넣어서 함수를 만든다
function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE",
      name,
      value,
    });
  }, []);
  const reset = useCallback(
    () =>
      dispatch({
        type: "RESET",
        initialForm,
      }),
    [initialForm]
  );

  return [form, onChange, reset];
}

export default useInputs;
