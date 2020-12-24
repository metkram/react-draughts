import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props)
  }
  addSquares() {
    //I will have to make a refactorig of this function
    let squares = [];
    for (let i = 0; i < 8; i++) {
      for (let u = 0; u < 8; u++) {
        if (i % 2 == 0) {
          if (u % 2 == 0) {
            squares.push(<Square number={i * 8 + u} color={"w"} status={this.props.gameMatrix[i * 8 + u] ? this.props.gameMatrix[i * 8 + u] : null} />);
          } else {
            squares.push(<Square number={i * 8 + u} color={"b"} status={this.props.gameMatrix[i * 8 + u] ? this.props.gameMatrix[i * 8 + u] : null} />);
          }
        } else {
          if (u % 2 != 0) {
            squares.push(<Square number={i * 8 + u} color={"w"} status={this.props.gameMatrix[i * 8 + u] ? this.props.gameMatrix[i * 8 + u] : null} />);
          } else {
            squares.push(<Square number={i * 8 + u} color={"b"} status={this.props.gameMatrix[i * 8 + u] ? this.props.gameMatrix[i * 8 + u] : null} />);
          }
        }
      }
    }
    return squares;
  }
  render() {
    return (
      <div>
        {this.props.nextPlayer ? "Nxt is white" : "nxt is black"}
        <div className="board">
          {this.addSquares().map((square, index) => (<div key={index}>{square}</div>))}
        </div>
      </div>
    );
  }
}

export default Board;
