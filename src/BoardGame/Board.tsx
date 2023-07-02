import React, { MouseEventHandler, useState } from "react";
import "./board.css";

export const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquare: string[]) => {
    setHistory([...history, nextSquare]);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
};

const Board = ({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquare: string[]) => void;
}) => {
  const handleClick = (i: number) => {
    // XかOが既にあればreturn
    // console.log(calculateWinner(squares));

    if (squares[i] || calculateWinner(squares)) return;
    // シャローコピー
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const calculateWinner = (squares: any[]) => {
    // 勝利条件のパターンを定義
    // 以下が揃った時に勝敗がつく
    const winPatterns = [
      // 横の行
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // 縦の行
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // 斜めの行
      [0, 4, 8],
      [2, 4, 6],
    ];

    // 勝利条件パターンが当てはまっているかひとつずつ見ていく
    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let gameStatus;
  if (winner) {
    gameStatus = "Winner" + winner;
  } else {
    gameStatus = `Next is ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <h3>{gameStatus}</h3>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

const Square = ({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Board;
