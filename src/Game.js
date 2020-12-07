import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>This is Game object <Board /></div>

    );
  }
}

export default Game;
