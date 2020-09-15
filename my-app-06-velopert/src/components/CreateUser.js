import React, { useRef } from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  const nameInput = useRef();

  const onFocus = () => {
    nameInput.current.focus();
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

export default CreateUser;
