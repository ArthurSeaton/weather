import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * Makes prop type errors into fatal errors.
 */
console.error = (...args) => {
  throw new Error(...args);
};
