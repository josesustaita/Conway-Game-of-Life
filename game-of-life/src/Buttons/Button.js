import React from "react";
import "./Button.css";

function handleClick(e) {
  // Some function which does some API call
}

export default function Button(props) {
  return (
    <div>
      <button className="Button" onClick={handleClick}>
        {props.name}
      </button>
    </div>
  );
}
