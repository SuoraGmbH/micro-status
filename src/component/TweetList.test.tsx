import { shallow } from 'enzyme';
import * as React from 'react';
import { Tweet } from '../domain/Tweet';
import { TweetList } from './TweetList';

const tweets: Tweet[] = [
  {
    id: 1,
    date: '2018-09-22T12:25:41.801Z',
    message: 'Hello World!',
    userId: 'muhdiekuh',
  },
  {
    id: 2,
    date: '2018-09-23T12:25:41.801Z',
    message: 'Hello from the other side!',
    userId: 'tobmaster',
  },
];

it('renders two items according to snapshot', () => {
  const tree = shallow(<TweetList tweets={tweets} />);
  expect(tree).toMatchSnapshot();
});

it('renders one item according to snapshot', () => {
  const tree = shallow(<TweetList tweets={[tweets[0]]} />);
  expect(tree).toMatchSnapshot();
});

it('renders zero items according to snapshot', () => {
  const tree = shallow(<TweetList tweets={[]} />);
  expect(tree).toMatchSnapshot();
});
