import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import { Tweet } from '../domain/Tweet';
import { TweetListItem } from './TweetListItem';

const tweet: Tweet = {
  id: 1,
  date: '2018-09-23T12:25:41.801Z',
  message: 'Hello World!',
  userId: 'muhdiekuh',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TweetListItem tweet={tweet} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders and has a child', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TweetListItem tweet={tweet} />, div);

  const header = div.childNodes[0].childNodes[1].childNodes[0].childNodes[0];

  expect(header.nodeName).toEqual('H6');
  expect(header.textContent).toEqual('muhdiekuh');

  ReactDOM.unmountComponentAtNode(div);
});

it('renders according to snapshot', () => {
  const tree = renderer.create(<TweetListItem tweet={tweet} />).toJSON();
  expect(tree).toMatchSnapshot();
});
