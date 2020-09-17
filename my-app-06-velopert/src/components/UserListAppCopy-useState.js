import React, { useCallback, useMemo, useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  // console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

// UserListApp 컴포넌트 에서 사용할 초기 상태를 컴포넌트 밖에 선언해 줘야 한다
function UserListApp() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  // ref 를 이런 용도로 사용할 수도 있다
  const nextId = useRef(4);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs] // inputs 바뀔 때만 다시 만들고 아니면 재사용한다
  );

  const onCreate = useCallback(() => {
    if (username !== "" || email !== "") {
      const user = {
        id: nextId.current,
        // ...inputs 해도 된다
        username,
        email,
        active: false,
      };
      // setUsers([...users, user]);

      // 함수형 업데이트? 사용하면 deps에 users 안써도 된다??
      setUsers((users) => users.concat(user)); // 대괄호 빼는 것 조심
      setInputs({
        username: "",
        email: "",
      });
      nextId.current += 1;
      // 배열에 변화줄 때 push, splice, sort 사용은 최대한 지양;
      // 불변성 때문에 update 되지 않는다
    }
  }, [username, email]); // 빼먹으면 최신 상태를 참조하지 않고 이전 상태를 참조할 수 있다
  // 만약 props 같은것을 받아서 사용한다면 props 또한 넣어줘야 한다

  const onRemove = useCallback((id) => {
    // filter 는 조건에 맞는 원소를 갖는 배열을 반환한다
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default UserListApp;
