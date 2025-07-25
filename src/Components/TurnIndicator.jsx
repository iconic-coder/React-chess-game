function Turn ({currentTurn, onEndTurn, onReset}) {
    return (
        <div className="turn-indicator" style={
            {
                backgroundColor: "#1b1a1aff",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                marginTop: "20px"
            }
        }>
            <h2>Current Turn</h2>
            <p>It's {currentTurn}'s' turn</p>
            <button onClick= {onEndTurn}>End Turn</button>
            <button onClick={onReset}>Reset Game</button>
            <button>Undo Move</button>
            <button>Redo Move</button>
            <button>Save Game</button>     
        </div>
    )
}
export default Turn;