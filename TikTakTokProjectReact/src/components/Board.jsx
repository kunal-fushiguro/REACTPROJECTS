import React, { useState, useEffect } from "react";
import Box from "./Box";
function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xTurn, setXturn] = useState(true);
  const handleClick = (index) => {
    if(state[index] !== null){
        return;
    }
    const copyArray = [...state];
    copyArray[index] = xTurn ? "X" : "O";
    setState(copyArray);
    setXturn(!xTurn);
  };
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 8],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  let isWinner = checkWinner();

  return (
    <>
      {isWinner ? (
        <div className="flex justify-center items-center w-screen h-[30vh] flex-col">
          <h1 className="flex justify-center items-center w-screen h-[50%]">
            {isWinner} Won The Game
          </h1>
          <button
            className="flex justify-center items-center m-auto border-[1px] border-black rounded-2xl p-2 font-bold "
            onClick={handleReset}
          >
            Reset Game
          </button>
        </div>
      ) : (
        <div>
          <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
            <h1 className="font-bold text-[35px]">Tik Tak Tok Game</h1>
            <h1>
                {xTurn?"X":"O"} s Turn
            </h1>
            <div className="w-[60%] h-[65%] flex justify-center items-center flex-col ">
              <div className="flex justify-center items-center w-full h-[33%]">
                <Box onClick={() => handleClick(0)} value={state[0]} />
                <Box onClick={() => handleClick(1)} value={state[1]} />
                <Box onClick={() => handleClick(2)} value={state[2]} />
              </div>
              <div className="flex justify-center items-center w-full h-[33%]">
                <Box onClick={() => handleClick(3)} value={state[3]} />
                <Box onClick={() => handleClick(4)} value={state[4]} />
                <Box onClick={() => handleClick(5)} value={state[5]} />
              </div>
              <div className="flex justify-center items-center w-full h-[33%]">
                <Box onClick={() => handleClick(6)} value={state[6]} />
                <Box onClick={() => handleClick(7)} value={state[7]} />
                <Box onClick={() => handleClick(8)} value={state[8]} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Board;
