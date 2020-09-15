import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

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

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    if (username !== "" || email !== "") {
      const user = {
        id: nextId.current,
        // ...inputs 해도 된다
        username,
        email,
      };
      // setUsers([...users, user]);
      setUsers(users.concat(user)); // 대괄호 빼는 것 조심
      setInputs({
        username: "",
        email: "",
      });
      nextId.current += 1;
      // 배열에 변화줄 때 push, splice, sort 사용은 최대한 지양;
      // 불변성 때문에 update 되지 않는다
    }
  };

  const onRemove = (id) => {
    // filter 는 조건에 맞는 원소를 갖는 배열을 반환한다
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default UserListApp;
