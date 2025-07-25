function ScoreBoard ({player1score,player2score}) {
    return (
        <div className="scoreboard" style={{
            backgroundColor: "#141414ff",
            padding:"15px",
            borderRadius: "8px",
            textAlign: "center",
            marginTop: "20px"   
        }}>

            <h2>Scoreboard</h2>
            <p>Player 1: {player1score}</p>
            <p>Player 2: {player2score}</p>
        </div>
    )
}
export default ScoreBoard;