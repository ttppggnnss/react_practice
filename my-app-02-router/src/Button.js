import React from "react";
import "./Button.css"; // Tell webpack that Button.js uses these styles

class Button extends React.Component {
  render() {
    // You can use them as regular CSS styles
    return (
      <button className="Button">
        {process.env.REACT_APP_NOT_SECRET_CODE}
      </button>
    );
  }
}

export default Button;
