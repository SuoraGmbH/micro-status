import { shallow } from 'enzyme';
import * as React from 'react';
import { Tweet } from '../domain/Tweet';
import { configureStore } from '../redux/configureStore';
import { TweetListFromRedux } from './TweetListFromRedux';

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

it('renders from redux', () => {
  const store = configureStore();
  store.dispatch({ type: 'FETCH_TWEETS_FULFILLED', payload: tweets });
  const tree = shallow(<TweetListFromRedux />, {
    context: { store },
  });
  expect(tree.dive()).toMatchSnapshot();
});
