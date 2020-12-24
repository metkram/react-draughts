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
    };
  }
  render() {
    return (
      <div><Board nextPlayer={this.state.isNextWhite} gameMatrix={this.state.matrix}/></div>

    );
  }
}

export default Game;
