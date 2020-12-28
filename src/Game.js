import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNextWhite: true,
      matrix: [
        null,{color: 0, isRegular: true},null,{color: 0, isRegular: true},null,{color: 0, isRegular: true},null,{color: 0, isRegular: true},
        {color: 0, isRegular: true},null,{color: 0, isRegular: true},null,{color: 0, isRegular: true},null,{color: 0, isRegular: true},null,
        null,{color: 0, isRegular: true},null,{color: 0, isRegular: true},null,{color: 0, isRegular: true},null,{color: 0, isRegular: true},
        null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,
        {color: 1, isRegular: true},null,{color: 1, isRegular: true},null,{color: 1, isRegular: true},null,{color: 1, isRegular: true},null,
        null,{color: 1, isRegular: true},null,{color: 1, isRegular: true},null,{color: 1, isRegular: true},null,{color: 1, isRegular: true},
        {color: 1, isRegular: true},null,{color: 1, isRegular: true},null,{color: 1, isRegular: true},null,{color: 1, isRegular: true},null,
      ],
      move: [],
    };
  }
  componentDidMount() { //it looks like cheatcode in my situation, but now it helps to resolve my problem
    this.timerID = setInterval(
      () => this.changePosition(),
      500
    );
  }
  changePosition() {
    if (this.state.move.length > 1) {
      let matrix = this.state.matrix.slice();
      const first = this.state.matrix.slice()[this.state.move[0]];
      matrix[this.state.move[1]] = first;

      matrix[this.state.move[0]] = null;
      console.log(matrix[this.state.move[1]], matrix[this.state.move[0]]);
      this.setState({
        matrix: matrix,
      });
      console.log(this.state.matrix);

      this.setState({
        move: [],
      });
    }
  }
  step(i) {//this function will be improved to fit game's rule
    const move = this.state.move.slice();
    if (!this.state.matrix[i] && move.length == 0) return;
    this.setState({
      move: move.concat(i),
    });
    console.log(this.state.move.length);
  }
  render() {
    return (
      <div>
        <Board nextPlayer={this.state.isNextWhite} step={this.state.move} gameMatrix={this.state.matrix} onClick={(number) => this.step(number)}/>
      </div>
    );
  }
}

export default Game;
