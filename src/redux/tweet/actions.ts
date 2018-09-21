import { Tweet } from '../../../domain/Tweet';

const FETCH_TWEETS = 'FETCH_TWEETS';

export interface FetchTweetFulfilledAction {
  type: 'FETCH_TWEETS_FULFILLED';
  payload: Tweet[];
}

export const fetchTweets = () => ({
  type: FETCH_TWEETS,
  payload: fetch('http://localhost:4712/tweets').then(response =>
    response.json(),
  ),
});
