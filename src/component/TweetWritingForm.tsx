import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { TweetWithoutId } from '../domain/Tweet';

interface Props {
  userId: string;
  addTweet: (tweet: TweetWithoutId) => any;
}

interface State {
  tweetText: string;
}

export class TweetWritingForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { tweetText: '' };
  }

  public render() {
    const { tweetText } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          value={tweetText}
          onChange={this.handleInputChange}
        />
        <button type="submit">
          <span>Tweet</span>
        </button>
      </form>
    );
  }

  private handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (this.state.tweetText.trim() === '') {
      event.preventDefault();
      return;
    }

    this.props.addTweet({
      date: new Date().toISOString(),
      userId: this.props.userId,
      message: this.state.tweetText,
    });

    this.setState({ tweetText: '' });
    event.preventDefault();
  };

  private handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      tweetText: event.target.value,
    });
  };
}
