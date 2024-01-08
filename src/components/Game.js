import Menu from "./Menu";
import Tetris from "./Tetris";
import {useGameOver} from "../hooks/useGameOver";


const Game = ({ rows, cols }) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => { 
        resetGameOver();
    };

    return (
        <div className="Game">
            {gameOver ? (
<               Menu onClick = {start} />
            ) : (
                <p>Game is on</p>,
                <Tetris rows={rows} cols={cols} setGameOver={false} />
            )}
        </div>
    );
};

export default Game;