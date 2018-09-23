import {
  AddTweetFulfilledAction,
  FetchTweetFulfilledAction,
} from './tweet/actions';

export type Action = FetchTweetFulfilledAction | AddTweetFulfilledAction;
