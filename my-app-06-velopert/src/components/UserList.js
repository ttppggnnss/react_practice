import React from "react";

function User({ user, onRemove }) {
  const { username, email, id, active } = user;
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      {/* <button onClick={onRemove(id)}>삭제</button> */}
      {/* 이렇게 작성하면 렌더링 되는 순간 onRemove 가 호출되어버린다 */}
      {/* 함수를 넣어주는게 아니라 함수를 호출하는 함수를 만들어서 넣어줘야 한다 !! */}
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <>
      {users.map((user, index) => (
        <User user={user} key={user.id} onRemove={onRemove} /> //key 넣을 것 없다면 index 넣는다
      ))}
    </> // key 가 없다면 삽입 삭제가 매우 비효율적으로 작동한다
  );
}

export default UserList;
