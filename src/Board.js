import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props)
  }
  addSquares() {
    let squares = [];
    for (let i = 0; i < 8; i++) {
      for (let u = 0; u < 8; u++) {
        if (i % 2 == 0) {
          if (u % 2 == 0) {
            squares.push(<Square number={i*u} color={"w"} />);
          } else {
            squares.push(<Square number={i*u} color={"b"} />);
          }
        } else {
          if (u % 2 != 0) {
            squares.push(<Square number={i*u} color={"w"} />);
          } else {
            squares.push(<Square number={i*u} color={"b"} />);
          }
        }
      }
    }
    return squares;
  }
  render() {
    return (
      <div className="board">
        {this.addSquares().map((square, index) => (<div key={index}>{square}</div>))}
      </div>
    );
  }
}

export default Board;
