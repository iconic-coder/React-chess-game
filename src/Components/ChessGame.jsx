import React, { useState } from 'react';
import GameBoard from './GameBoard'; 
import { getNextTurn, isValidTurn } from '../logic/turnManager';
import './ChessBoard.css';

export default function ChessGame() {
  const [currentTurn, setCurrentTurn] = useState('white');

  const handleMove = (fromSquare, toSquare, pieceColor) => {
    // 🛑 Check if the right player is moving
    if (!isValidTurn(currentTurn, pieceColor)) {
      console.log("Not your turn!");
      return false;
    }

    // ✅ Move is allowed
    console.log(`${pieceColor} moves from ${fromSquare} to ${toSquare}`);

    // 🔁 Switch turn
    setCurrentTurn(getNextTurn(currentTurn));
    return true;
  };

  return (
    <div>
      <GameBoard  onMove={handleMove} currentTurn={currentTurn}/>
    </div>
  );
}