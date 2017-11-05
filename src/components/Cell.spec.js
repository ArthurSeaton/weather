import React from 'react';
import { shallow } from 'enzyme';

import Cell from './Cell';

describe('Cell', () => {
  it('fails to render when all properties are missing', () => {
    expect(() => shallow(<Cell />)).toThrow();
  });

  it('renders without crashing when supplied properties', () => {
    shallow(<Cell data={{}} rowIndex={1} colIndex={1} />);
  });

  it('renders a non header cell when expected', () => {
    const wrapper = shallow(<Cell data={{a: 'foo'}} rowIndex={1} colIndex={1} />);
    expect(wrapper.is('.cell')).toEqual(true);
    expect(wrapper.is('.header')).toEqual(false);
    expect(wrapper.is('.col-header')).toEqual(false);
  });

  it('renders a header cell for the initial row', () => {
    const wrapper = shallow(<Cell data={{a: 'foo'}} rowIndex={0} colIndex={1} />);
    expect(wrapper.is('.header')).toEqual(true);
  });

  it('renders a header cell for the initial column', () => {
    const wrapper = shallow(<Cell data={{a: 'foo'}} rowIndex={1} colIndex={0} />);
    expect(wrapper.is('.header')).toEqual(true);
    expect(wrapper.is('.col-header')).toEqual(true);
  });
});
