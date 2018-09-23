import {
  AddTweetFulfilledAction,
  FetchTweetFulfilledAction,
} from './tweet/actions';

interface InitAction {
  type: '@@INIT';
}

export type Action =
  | FetchTweetFulfilledAction
  | AddTweetFulfilledAction
  | InitAction;
