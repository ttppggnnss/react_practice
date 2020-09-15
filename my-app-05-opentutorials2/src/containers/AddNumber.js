import AddNumber from "../components/AddNumber";

// import React, { Component } from "react";
// import store from "../store";

// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }.bind(this)}
//       ></AddNumber>
//     );
//   }
// }

// dispatch 부분 안했다

import { connect } from "react-redux";

export default connect(
  (state) => ({}),
  (dispatch) => ({
    onClick: function (size) {
      dispatch({ type: "INCREMENT", size: size });
    },
  })
)(AddNumber);

// connect.js
// mapStateToProps(store.getState(), this.props)
// mapDispatchToProps(store.dispatch, this.props)

// const ConnectedCounter = connect(
//   // Given Redux state, return props
//   // mapStateToProps
//   state => ({
//     value: state.counter,
//   }),

//   // mapDispatchToProps
//   // Given Redux dispatch, return callback props
//   dispatch => ({
//     onIncrement() {
//       dispatch({ type: 'INCREMENT' })
//     }
//   })
// )(Counter)
