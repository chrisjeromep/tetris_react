import Menu from "./Menu";

const Game = ({ rows, cols }) => {

    const start = () => { 
        console.log("start"); 
    };

    return (
        <div className="Game">
            <Menu onClick = {start} />
        </div>
    );
};

export default Game;