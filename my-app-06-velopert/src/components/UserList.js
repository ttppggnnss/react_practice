import React, { useContext } from "react";
import { UserDispatch } from "./UserListApp";

// 컴포넌트 같은 경우 함수 자체를 감싸주면 최적화가 어느정도 된다.
const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  // useEffect(() => {
  //   console.log("user 값이 설정됨");
  //   console.log(user);
  //   // console.log("컴포넌트가 화면에 나타남");
  //   // props -> state
  //   // REST API
  //   // D3 Video.js
  //   // setInterval, setTimeout
  //   return () => {
  //     console.log("uwer 값이 바뀌기 전");
  //     console.log(user);
  //     // console.log("컴포넌트가 화면에서 사라짐");
  //     // clearInterval, clearTimeout
  //     // 라이브러리 인스턴스 제거
  //   };
  // }, [user]); // dpes 라는 dependencies 배열
  // // user 가 설정되거나 바뀔때마다 표출된다
  // // 배열에 넣어줘야만 최신의 값을 유지한다

  // useEffect(() => {
  //   console.log(user);
  // });
  // 부모 컴포넌트가 리렌더링 되면
  // 자식 컴포넌트도 리렌더링 된다

  // 컴포넌트 리렌더링 성능 최적화

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id })}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id })}>
        삭제
      </button>
      {/* <button onClick={onRemove(id)}>삭제</button> */}
      {/* 이렇게 작성하면 렌더링 되는 순간 onRemove 가 호출되어버린다 */}
      {/* 함수를 넣어주는게 아니라 함수를 호출하는 함수를 만들어서 넣어줘야 한다 !! */}
    </div>
  );
});

function UserList({ users }) {
  return (
    <>
      {users.map((user, index) => (
        <User user={user} key={user.id} /> //key 넣을 것 없다면 index 넣는다
      ))}
    </> // key 가 없다면 삽입 삭제가 매우 비효율적으로 작동한다
  );
}

export default React.memo(UserList);
