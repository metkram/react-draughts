import React from "react";

class Square extends React.Component {
  render() {
    return (
      <div className={this.props.color == "w" ? "square-w" : "square-b"} onClick={() => this.props.onClick(this.props.number)}>
        {/*this.props.number*/}
        {this.props.status ? this.props.status.color : ""}
      </div>
    );
  };
}

export default Square;
