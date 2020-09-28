import React from "react";
import Game from "./GameBoard/Game";
import "./App.css";

export default function App(props) {
  return (
    <div>
      <h1 className="Header">The Game of Life!</h1>
      <div className="Main-Container">
        {" "}
        <div className="Main-Board">
          <Game />
        </div>
        <div className="Rules">
          <h4>Rules</h4>
          <div className="Numbers">
            <p1>
              1. Any live cell with fewer than two live neighbours dies, as if
              by underpopulation.
            </p1>
            <p1>
              2. Any live cell with two or three live neighbours lives on to the
              next generation.
            </p1>
            <p1>
              3. Any live cell with more than three live neighbours dies, as if
              by overpopulation.
            </p1>
            <p1>
              4. Any dead cell with exactly three live neighbours becomes a live
              cell, as if by reproduction.
            </p1>
          </div>
        </div>
      </div>
    </div>
  );
}
