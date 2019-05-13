import { mount } from 'enzyme';
import * as React from 'react';
import { TweetWritingForm } from './TweetWritingForm';

// This file contains test that use enzyme to test a component with a callback :O

it('renders according to snapshot', () => {
  const tree = mount(
    <TweetWritingForm userId="muhdiekuh" addTweet={() => {}} />,
  );
  expect(tree).toMatchSnapshot();
});

it('contains a text after the user typed', () => {
  const wrapper = mount(
    <TweetWritingForm userId="muhdiekuh" addTweet={() => {}} />,
  );
  wrapper
    .find('input[name="text"]')
    .simulate('change', { target: { value: 'Hello World!' } });

  // Ensure value is in the field
  expect(wrapper).toMatchSnapshot();
});

it('typing a value and submitting the form will result in a new tweet', () => {
  const addTweetCallback = jest.fn();

  const wrapper = mount(
    <TweetWritingForm userId="muhdiekuh" addTweet={addTweetCallback} />,
  );
  wrapper
    .find('input[name="text"]')
    .simulate('change', { target: { value: 'Hello World!' } });

  wrapper.find('button[type="submit"]').simulate('submit');

  expect(addTweetCallback).toHaveBeenCalledTimes(1);
  expect(addTweetCallback).toHaveBeenCalledWith(
    expect.objectContaining({
      userId: 'muhdiekuh',
      message: 'Hello World!',
      date: expect.anything(),
    }),
  );
  // clear mock, otherwise the snapshot would contain a date, which would break it.
  addTweetCallback.mockClear();
  // Ensure value is empty again
  expect(wrapper).toMatchSnapshot();
});
