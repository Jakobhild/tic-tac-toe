import React from 'react';
import { useState } from 'react';

function Game() {
  const rows = ['row1', 'row2', 'row3'];
  const columns = ['column1', 'column2', 'column3'];

  

  return (
    <>
      <tabel>
        {rows.map((rows) => (<tr key={rows}>
          {columns.map((columns) => <Square key={columns} />)}
        </tr>))}
      </tabel>
    </>
  );
}

function Square() {
  const 

  const select = () => {

  }

  return (
    <td className="square" onClick={} ></td>
  );
}

export default Game;
