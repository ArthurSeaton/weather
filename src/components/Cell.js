import React from 'react';
import PropTypes from 'prop-types';

import Time from './Time';
import Header from './Header';
import Summary from './Summary';
import Temperature from './Temperature';
import Wind from './Wind';

import './Cell.css';

const components = [Time, Summary, Temperature, Wind];

const getClasses = (rowIndex, colIndex) => {
  let classes = 'cell';
  if (rowIndex === 0 || colIndex === 0) {
    classes += ' header';
    if (colIndex === 0) {
      classes += ' col-header';
    }
  }
  return classes;
};

const getComponent = (rowIndex, colIndex) =>
  colIndex === 0 ? Header : components[rowIndex];

const Cell = ({ data, rowIndex, colIndex }) => {
  const Component = getComponent(rowIndex, colIndex);
  const classes = getClasses(rowIndex, colIndex);
  return (
    <div className={classes}><Component data={data} /></div>
  );
};

Cell.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array
    ]).isRequired,
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired
};

export default Cell;
