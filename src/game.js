import React from 'react';
import { useState, useRef } from 'react';


function Game() {
  const squares = [{row: 0, column: [0, 1, 2]}, 
                  {row: 1, column: [0, 1, 2]}, 
                  {row: 2, column: [0, 1, 2]}];

  const [squareContent, setSquareContent] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);

  const [turn, setTurn] = useState("X");
  
  const [inGame, setInGame] = useState(true);

  const [lastWin, setLastWin] = useState("");

  const oPoints = useRef(0);
  const xPoints = useRef(0);



  const selectSquare = (row, column) => {
    if(inGame){
      const state = {...squareContent};
      if(state[row][column] === ""){
        state[row][column] = turn;
        setSquareContent(state);
        if(checkWin()){
          win();
        }
        turn === "X" ? setTurn("O") : setTurn("X")
      }
    }
  };

  const checkWin = () => {
    for(let column = 0; column < 3; column++){
      if(squareContent[0][column] === squareContent[1][column] && squareContent[0][column] === squareContent[2][column] && squareContent[0][column] !== ""){
        return true
      }
    }
    for(let row = 0; row < 3; row++){
      if(squareContent[row][0] === squareContent[row][1] && squareContent[row][0] === squareContent[row][2] && squareContent[row][0] !== ""){
        return true
      }
    }
    if(squareContent[0][0] === squareContent[1][1] && squareContent[0][0] === squareContent[2][2] && squareContent[0][0] !== ""){ 
      return true
    } else if(squareContent[0][2] === squareContent[1][1] && squareContent[0][2] === squareContent[2][0] && squareContent[0][2] !== ""){
      return true
    } 
    var tie = true;
    for(let row = 0; row < 3; row++){
      for(let column = 0; column < 3; column++){
        if (squareContent[row][column] === "") {
          tie = false;
        }
      }
    }
    if (tie) {
      tieFunc();
    }
    return false;
  }

  const tieFunc = () => {
    setInGame(false)
    setLastWin("It's a tie!")
  }

  const win = () => {
    setInGame(false)
    turn === "O" ? oPoints.current++ : xPoints.current++;
    setLastWin("Win for " + turn)
  }
  
  const startGame = () => {
    setSquareContent([["", "", ""], ["", "", ""], ["", "", ""]])
    setInGame(true)
  }

  return (
    <div className="game">
      {inGame ? <p></p> : <p>Press start game to start</p>}
      <p>{lastWin}</p>
      <p>X: {xPoints.current} and O: {oPoints.current}</p>
        <div className="game-bord">
          <table className="game-table">
            <tbody>
              {squares.map((squares) => (<tr key={squares.row}>
              {squares.column.map((column) => <td className="game-square" key={column} onClick={() => selectSquare(squares.row, column)}>{squareContent[squares.row][column]}</td>)}
              </tr>))}
            </tbody>
          </table>
        </div>
      <button onClick={startGame}>{inGame ? "Restart" : "Start game"}</button>
      <p>Current turn: {turn}</p>
    </div>
  );
}

export default Game;
