import './styles.css';
import Game from "./components/Game";


function App() {
  return (
    <div className="App">
      <h1>Tetris</h1>
      <Game rows = {20} columns = {10} />
    </div>
  );
}

export default App;
