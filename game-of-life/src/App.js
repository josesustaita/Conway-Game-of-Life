import React from "react";
import Game from "./GameBoard/Game";
import Button from "./Buttons/Button";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1 className="Header">The Game of Life!</h1>
      <div className="Main-Board">
        <p1 className="Generations">Generation: # {}</p1>
        <Game />
      </div>

      <div className="Bottom-Row-Buttons">
        <Button name="Start" />
        <Button name="Pause" />
        <Button name="Stop" />
      </div>
    </div>
  );
}
