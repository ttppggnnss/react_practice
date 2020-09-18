import React, { useCallback, useContext, useRef } from "react";
import useInputs from "./useInputs";
import { UserDispatch } from "./UserListApp";

function CreateUser() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const nameInput = useRef();

  const onFocus = useCallback(() => {
    nameInput.current.focus();
  }, [nameInput]);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
        ref={nameInput}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onCreate();
            onFocus();
          }
        }}
      />
      <button
        onClick={() => {
          onCreate();
          onFocus();
        }}
      >
        등록
      </button>
    </div>
  );
}

export default React.memo(
  CreateUser
  // (prevProps, nextProps) => nextProps.users === prevProps.users
);
// React.memo 를 감싸주면 props 가 바뀌었을 때만 rerendering 해준다
