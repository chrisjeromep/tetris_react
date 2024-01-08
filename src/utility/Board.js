import "../utility/Cell.js";

export const buildBoard = ({rows, cols}) => {
    const builtRows = Array.from({ length: rows }, () => 
        Array.from({ length: cols }, () => ({...defaultCell }) )
    );

    return {
        rows: builtRows,
        size: {rows, cols}
    }
}