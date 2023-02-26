import "./App.css"
import Board from "./components/Board";
import Square from "./components/Square";

function App() {
  return (
    <div className="game">
      <div className="game-board">
        Next Player: X,O
        <Board />
      </div>
      <div className="game-info">
        game-info
      </div>
    </div>
  );
}

export default App;
