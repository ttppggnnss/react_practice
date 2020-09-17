import React, { useCallback, useRef } from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  const nameInput = useRef();

  const onFocus = useCallback(() => {
    nameInput.current.focus();
  }, [nameInput]);

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
