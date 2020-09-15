import React, { useRef, useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    // e.target.name, e.target.value
    const { name, value } = e.target;

    setInputs({
      // 객체 상태를 바꿀 때는
      // ... 으로 객체 복사하고
      // 특정 값을 덮어씌워서 상태를 업데이트 해야한다
      // 불변성을 지키기 위해서
      // 불변성을 지켜야 나중에 컴포넌트 업데이트 성능을 최적화시킬 수 있다
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };
  return (
    <>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </>
  );
}

export default InputSample;
