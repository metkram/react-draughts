import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.color == "w" ? "square-w" : "square-b"}></div>
    );
  };
}

export default Square;
