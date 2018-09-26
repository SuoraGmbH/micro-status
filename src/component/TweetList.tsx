import * as React from 'react';
import { Tweet } from '../domain/Tweet';
import { TweetListItem } from './TweetListItem';

interface Props {
  tweets: Tweet[];
}

export class TweetList extends React.Component<Props> {
  public render() {
    const { tweets } = this.props;
    return (
      <ul className="timeline">
        {tweets.map(tweet => (
          <TweetListItem key={tweet.id} tweet={tweet} />
        ))}
      </ul>
    );
  }
}
