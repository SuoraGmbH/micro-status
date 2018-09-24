import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TweetListItem } from './TweetListItem';

storiesOf('Welcome', module).add('foo', () => (
  <TweetListItem
    tweet={{
      message: 'Hello World!',
      userId: 'tobmaster',
      id: 3,
      date: '2018-09-24T09:16:52+0200',
    }}
  />
));
