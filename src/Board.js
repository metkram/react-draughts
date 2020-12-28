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
        let sts = this.props.gameMatrix[i * 8 + u] ? this.props.gameMatrix[i * 8 + u] : null;
        let nbr = i * 8 + u;
        let clr = (u % 2 == 0) ? (i % 2 == 0) ? "w" : "b" : (i % 2 != 0) ? "w" : "b";
        squares.push(<Square number={nbr} status={sts} color={clr} />);
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
