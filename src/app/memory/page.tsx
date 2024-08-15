import React from 'react';

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];

export default function Memory() {
  // Write your code here.

  return (
    <>
      <h1>Memory</h1>
      <div className="board">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>
    </>
  );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}