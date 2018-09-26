import * as React from 'react';
import { Tweet } from '../domain/Tweet';

interface Props {
  tweet: Tweet;
}

export class TweetListItem extends React.Component<Props> {
  public render() {
    const { tweet } = this.props;
    return (
      <li>
        <div className="avatar">
          <img src={`http://i.pravatar.cc/100?u=${tweet.userId}`} />
        </div>
        <div className="tweet-wrapper">
          <div className="tweet">
            <h6>{tweet.userId}</h6>
            <p>{tweet.message}</p>
          </div>
          <div className="arrow" />
        </div>
      </li>
    );
  }
}
