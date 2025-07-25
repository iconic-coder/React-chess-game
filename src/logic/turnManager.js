export function getNextTurn(currentTurn) {
  return currentTurn === 'white' ? 'black' : 'white';
}

export function isValidTurn(currentTurn, pieceColor) {
  return currentTurn === pieceColor;
}