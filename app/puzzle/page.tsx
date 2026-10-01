"use client";

import { useEffect, useState } from "react";

const SIZE = 3;
const SOLVED = [1, 2, 3, 4, 5, 6, 7, 8, 0];

function getNeighbors(index: number): number[] {
  const row = Math.floor(index / SIZE);
  const col = index % SIZE;
  const neighbors: number[] = [];
  if (row > 0) neighbors.push(index - SIZE);
  if (row < SIZE - 1) neighbors.push(index + SIZE);
  if (col > 0) neighbors.push(index - 1);
  if (col < SIZE - 1) neighbors.push(index + 1);
  return neighbors;
}

function shuffledBoard(moves = 100): number[] {
  const board = [...SOLVED];
  for (let i = 0; i < moves; i++) {
    const emptyIndex = board.indexOf(0);
    const neighbors = getNeighbors(emptyIndex);
    const swapWith = neighbors[Math.floor(Math.random() * neighbors.length)];
    [board[emptyIndex], board[swapWith]] = [board[swapWith], board[emptyIndex]];
  }
  return board;
}

export default function PuzzlePage() {
  const [board, setBoard] = useState<number[]>(SOLVED);
  const [shuffled, setShuffled] = useState(false);

  useEffect(() => {
    // Intentional one-time client-only randomization: SSR and hydration must
    // render the same deterministic SOLVED board, so shuffling has to happen
    // here, after mount, not during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBoard(shuffledBoard());
    setShuffled(true);
  }, []);

  const isSolved = shuffled && board.every((tile, i) => tile === SOLVED[i]);

  function handleTileClick(index: number) {
    const emptyIndex = board.indexOf(0);
    if (getNeighbors(emptyIndex).includes(index)) {
      const next = [...board];
      [next[emptyIndex], next[index]] = [next[index], next[emptyIndex]];
      setBoard(next);
    }
  }

  return (
    <main className="mx-auto max-w-sm p-8 text-center">
      <h1 className="text-2xl font-bold">Puzzle</h1>
      <p className="mt-2 text-slate-600">
        Slide tiles into the empty space to put them back in order, 1 to 8.
      </p>
      <div className="mx-auto mt-6 grid w-60 grid-cols-3 gap-2">
        {board.map((tile, i) => (
          <button
            key={i}
            onClick={() => handleTileClick(i)}
            className={
              tile === 0
                ? "h-20 w-20 invisible"
                : "h-20 w-20 rounded border border-slate-300 bg-white text-xl font-semibold hover:bg-slate-100"
            }
          >
            {tile !== 0 ? tile : ""}
          </button>
        ))}
      </div>
      {isSolved && (
        <p className="mt-4 font-semibold text-green-600">Solved!</p>
      )}
      <button
        onClick={() => setBoard(shuffledBoard())}
        className="mt-6 rounded border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100"
      >
        Shuffle again
      </button>
    </main>
  );
}
