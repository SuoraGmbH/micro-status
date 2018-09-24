import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as fetchMock from 'jest-fetch-mock';

configure({ adapter: new Adapter() });
// @ts-ignore
global.fetch = fetchMock;
