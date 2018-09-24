import { Tweet } from '../../domain/Tweet';
import { ApplicationState, tweetState } from '../ApplicationState';

export interface TweetState {
  byId: { [key: number]: Tweet };
  all: number[];
}

export const getTweetById = (state: ApplicationState, tweetId: number): Tweet =>
  tweetState(state).byId[tweetId];

export const getAllTweets = (state: ApplicationState): Tweet[] =>
  tweetState(state).all.map(tweetId => getTweetById(state, tweetId));
