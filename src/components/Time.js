import React from 'react';

import { getTime } from '../utils/utils';

const Time = ({ data }) => (
  <div>{getTime(data)}</div>
);

export default Time;
