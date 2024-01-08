import { useState, useCallback } from "react";

export const useGameOver = () => {
    const [gameOver, setGameOver] = useState(true);

    const resetGameOver = useCallback(() => {
        setGameOver(false);
    }, []); //empty list of dependencies so it doesn't update

    return [gameOver, setGameOver, resetGameOver]
}