import { useState } from "react";
import React from "react";
import Navbar from "./Components/Navbar";
import Instructions from "./Components/GameInstructions";
import StartMenu from "./Components/StartMenu";
import ScoreBoard from "./Components/Scoreboard";
import ChessGame from "./Components/ChessGame";

//import GameSquare from "./myLogic/GameSquare";
import './App.css'


function App () {

  const [gameStarted, setGameStarted] = useState(false);
  const startGame = function () {
  setGameStarted(true);
  };
  const [player1score, setPlayer1Score] = useState(0);
  const [player2score, setPlayer2Score] = useState(0);

  function  updateScore(winner) {
    if (winner === "player1"){
      setPlayer1Score(player1score + 1);
    }else {
      setPlayer2Score(player2score + 1);
    }
  }
  if (!gameStarted) {
    return <StartMenu onStart={startGame} />;
  }

  return (
    <div>
     <Navbar/>
     <Instructions/>
     <ChessGame updateScore={updateScore}  />
      <ScoreBoard player1score={player1score} player2score={player2score}   />
    </div>
  )
}

export default App
