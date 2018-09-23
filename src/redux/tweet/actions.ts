import { Dispatch } from 'redux';
import { Tweet, TweetWithoutId } from '../../../domain/Tweet';

const FETCH_TWEETS = 'FETCH_TWEETS';
const ADD_TWEET = 'ADD_TWEET';

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

export interface AddTweetFulfilledAction {
  type: 'ADD_TWEET_FULFILLED';
  payload: Tweet;
}

export const addTweet = (tweet: TweetWithoutId) => (dispatch: Dispatch) => ({
  type: ADD_TWEET,
  payload: fetch('http://localhost:4712/tweets', {
    method: 'POST',
    body: JSON.stringify(tweet),
    headers: { 'Content-Type': 'application/json' },
  }).then(response => {
    // dispatch(fetchTweets());
    return response.json();
  }),
});
