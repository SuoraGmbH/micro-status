import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import { Tweet } from '../domain/Tweet';
import { TweetListItem } from './TweetListItem';

// This file contains some basic examples using react-test-renderer

const tweet: Tweet = {
  id: 1,
  date: '2018-09-23T12:25:41.801Z',
  message: 'Hello World!',
  userId: 'muhdiekuh',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TweetListItem tweet={tweet} />, div);
});

it('renders and has a child', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TweetListItem tweet={tweet} />, div);

  const header = div.childNodes[0].childNodes[1].childNodes[0].childNodes[0]

  expect(header.nodeName).toEqual('H6');
  expect(header.textContent).toEqual('muhdiekuh');
});

it('renders and somewhere has the authors name', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TweetListItem tweet={tweet} />, div);
  expect(div.innerHTML).toContain('muhdiekuh');
});

it('renders according to snapshot', () => {
  const tree = renderer.create(<TweetListItem tweet={tweet} />).toJSON();
  expect(tree).toMatchSnapshot();
});
