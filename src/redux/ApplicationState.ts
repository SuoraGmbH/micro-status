import { TweetState } from './tweet/TweetState';

export interface ApplicationState {
  tweets: TweetState;
}

export const tweetState = (state: ApplicationState) => state.tweets;
