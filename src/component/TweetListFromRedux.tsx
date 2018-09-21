import * as React from 'react';
import { connect } from 'react-redux';
import { Tweet } from '../../domain/Tweet';
import { ApplicationState } from '../redux/ApplicationState';
import { getAllTweets } from '../redux/tweet/TweetState';
import { TweetList } from './TweetList';

interface Props {
  tweets: Tweet[];
}

class TweetListFromReduxComponent extends React.Component<Props> {
  public render() {
    const { tweets } = this.props;

    if (!tweets) {
      return <i>Loading...</i>;
    }

    return <TweetList tweets={tweets} />;
  }
}

const mapStateToProps = (state: ApplicationState): Props => ({
  tweets: getAllTweets(state),
});

export const TweetListFromRedux = connect(mapStateToProps)(
  TweetListFromReduxComponent,
);
