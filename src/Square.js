import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.color == "w" ? "square-w" : "square-b"}>
        {/*this.props.number*/}
        {this.props.status ? this.props.status.color : ""}
      </div>
    );
  };
}

export default Square;
