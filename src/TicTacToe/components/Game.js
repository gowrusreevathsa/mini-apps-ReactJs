import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNum, setStepNum] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNum]);
  const xO = xIsNext ? "X" : "0";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNum + 1);
    const current = historyPoint[stepNum];
    const squares = [...current];

    //If won or the square is already occupied
    if (winner || squares[i]) {
      return;
    }

    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNum(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (move) => {
    setStepNum(move);
    setXisNext(move % 2 === 0);
  };

  const renderMoves = () => {
    return history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  };

  return (
    <>
      <h1>Tic Tac Toe - With Hooks</h1>
      <Board squares={history[stepNum]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? `Winner ${winner}` : `Next Player: ${xO}`}</h3>
      </div>
    </>
  );
}

export default Game;
