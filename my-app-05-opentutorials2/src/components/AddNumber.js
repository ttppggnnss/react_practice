import React, { Component } from "react";

// redux 에 종속되지 않고 화면에 표시만 해주는
// presentaional component 가 됨
// 부품으로서의 가치가 있다

export default class AddNumber extends Component {
  state = { size: 1 };
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={function () {
            this.props.onClick(this.state.size);
          }.bind(this)}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onChange={function (e) {
            this.setState({ size: Number(e.target.value) });
          }.bind(this)}
          onKeyUp={function (e) {
            if (e.key === "Enter") {
              this.props.onClick(this.state.size);
            }
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
