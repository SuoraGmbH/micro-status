import { mount } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { TweetWithoutId } from '../../domain/Tweet';
import { TweetWritingForm } from './TweetWritingForm';

it('renders correctly', () => {
  const addTweet = () => {};
  const tree = renderer
    .create(<TweetWritingForm userId="muhdiekuh" addTweet={addTweet} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('typing a value and submitting the form will result in a new tweet', () => {
  const addTweetCallback = jest.fn();

  const wrapper = mount(
    <TweetWritingForm userId="muhdiekuh" addTweet={addTweetCallback} />,
  );
  wrapper
    .find('input[name="text"]')
    .simulate('change', { target: { value: 'Hello World!' } });

  // Ensure value is in the field
  expect(wrapper).toMatchSnapshot();

  wrapper.find('input[type="submit"]').simulate('submit');

  expect(addTweetCallback.mock.calls.length).toBe(1);
  const tweet: TweetWithoutId = addTweetCallback.mock.calls[0][0];
  expect(tweet.userId).toBe('muhdiekuh');
  expect(tweet.message).toBe('Hello World!');
});
