import * as React from 'react';
import { Tweet } from '../domain/Tweet';

interface Props {
  tweet: Tweet;
}

export class TweetListItem extends React.Component<Props> {
  public render() {
    const { tweet } = this.props;
    return (
      <div>
        <h6>{tweet.userId}</h6>
        <p>{tweet.message}</p>
      </div>
    );
  }
}
