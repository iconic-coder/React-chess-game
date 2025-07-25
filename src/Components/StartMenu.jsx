function StartMenu ({ onStart }) {
    return (
        <div className="start-menu" style={
            {
                backgroundColor: "#141414ff",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                marginTop: "20px"
            }
        }>
            <h2>Ready to start ?</h2>
            <p>Click to start</p>
            <button onClick={onStart}>Click Me</button>
        </div>
    )
}
export default StartMenu;