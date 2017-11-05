import React from 'react';

const City = ({ city: { name } }) => (
  <h2 className="city">{name}</h2>
);

export default City;
