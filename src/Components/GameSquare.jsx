// myLogic/GameSquare.jsx
import React from "react";
import "../index.css";

function GameSquare({ piece, isLight, isSelected, onClick }) {
  const className = `square ${isLight ? "light" : "dark"} ${isSelected ? "selected" : ""}`;
  return (
    <div className={className} onClick={onClick}>
      {piece}
    </div>
  );
}

export default GameSquare;
