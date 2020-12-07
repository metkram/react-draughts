import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>Here we have Board object <Square /></div>
    );
  }
}

export default Board;
