import React, { useState } from 'react';
import ChessBoard from './ChessBoard';
import { getNextTurn, isValidTurn } from '../logic/turnManager';

function ChessGame() {
  const [currentTurn, setCurrentTurn] = useState('white');

  const handleMove = (fromSquare, toSquare, pieceColor) => {
    
    if (!isValidTurn(currentTurn, pieceColor)) {
      console.log("Not your turn!");
      return false;
    }

    
    console.log(`${pieceColor} moves from ${fromSquare} to ${toSquare}`);
    setCurrentTurn(getNextTurn(currentTurn));
    return true;
  };

  return (
    <div>
      <h2>Current Turn: {currentTurn === 'white' ? '♔ White' : '♚ Black'}</h2>
      <ChessBoard onMove={handleMove} currentTurn={currentTurn} />
    </div>
  );
}
export default ChessGame;
