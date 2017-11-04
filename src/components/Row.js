import React from 'react';

import Cell from './Cell';

import './Row.css';

const Row = ({ cells, rowIndex }) =>(
  <div className="row">
    { cells.map((cell, colIndex) => (<Cell data={cell} rowIndex={rowIndex} colIndex={colIndex} />)) }
  </div>
);

export default Row;
