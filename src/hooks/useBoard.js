import { useState } from "react";

export const useBoard = ({ rows, cols}) => {
    const [board, setBoard] = useState(buildBoard({rows}, {cols}));


} 