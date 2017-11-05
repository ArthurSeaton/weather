import React from 'react';

/**
 * Not sure why the weather property is a list and there doesn't seem to be
 * any explanation. Pick the first item in the list and use that.
 */
const Summary = ({ data: values = [] }) => {
  const [ { description, icon } ] = values;
  const iconUrl = `${process.env.REACT_APP_OPEN_WEATHERMAP_ICON_URL}/${icon}.png`;
  return (
    <div>
      <img src={iconUrl} alt="weather icon"/>
      <div>{description}</div>
    </div>
  );
};

export default Summary;
