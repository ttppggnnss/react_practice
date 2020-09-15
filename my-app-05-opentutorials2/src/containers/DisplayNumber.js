import DisplayNumber from "../components/DisplayNumber";

// import React, { Component } from "react";
// import store from "../store";

// export default class extends Component {
//   state = { number: store.getState().number };
//   constructor(props) {
//     super(props);
//     store.subscribe(
//       function () {
//         this.setState({ number: store.getState().number });
//       }.bind(this)
//     );
//   }
//   render() {
//     return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>;
//   }
// }

// number 에 props 전달받는 작업 안했다
import { connect } from "react-redux";

// redux state 값 바뀔 때마다 호출
function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
    /*
    state = { number: store.getState().number };
    store.subscribe(
      function () {
        this.setState({ number: store.getState().number });
      }.bind(this)
    );
    number={this.state.number}
    이거를 한방에 해결해준다
    */
  };
}

// Displaynumber 에서는 dispatch 없으므로 필요없다
function mapReduxDispatchToReactProps() {
  return {};
}

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DisplayNumber);
