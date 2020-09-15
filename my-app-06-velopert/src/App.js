import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Counter from "./components/Counter";
import InputSample from "./components/InputSample";
import UserListApp from "./components/UserListApp";

export default function App() {
  return (
    <Router>
      <h1>벨로퍼트 따라하는 모던 리액트</h1>
      <ul>
        <li>
          <Link
            to="/counter"
            style={{ textDecoration: "none", color: "black" }}
          >
            01 Counter
          </Link>
        </li>
        <li>
          <Link
            to="/inputsample"
            style={{ textDecoration: "none", color: "black" }}
          >
            02 InputSample
          </Link>
        </li>
        <li>
          <Link
            to="/userlistapp"
            style={{ textDecoration: "none", color: "black" }}
          >
            03 UserList
          </Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/counter">
          <Counter />
        </Route>
        <Route path="/inputsample">
          <InputSample />
        </Route>
        <Route path="/userlistapp">
          <UserListApp />
        </Route>
      </Switch>
    </Router>
  );
}
