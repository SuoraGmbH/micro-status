import * as React from 'react';
import { connect } from 'react-redux';
import { TweetWithoutId } from '../domain/Tweet';
import { addTweet } from '../redux/tweet/actions';
import { TweetWritingForm } from './TweetWritingForm';

interface Props {
  userId: string;
  addTweet: (tweet: TweetWithoutId) => any;
}

class TweetWritingFormForReduxComponent extends React.Component<Props> {
  public render() {
    return (
      <TweetWritingForm
        userId={this.props.userId}
        addTweet={this.props.addTweet}
      />
    );
  }
}

const mapDispatchToProps = {
  addTweet,
};
export const TweetWritingFormForRedux = connect(
  null,
  mapDispatchToProps,
)(TweetWritingFormForReduxComponent);
