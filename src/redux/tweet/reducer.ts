import { Action } from '../Action';
import { TweetState } from './TweetState';
const initialState: TweetState = {
  byId: {},
  all: [],
};
export const tweetReducer = (
  state: TweetState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case 'FETCH_TWEETS_FULFILLED':
      const byId = { ...state.byId };
      const all = [...state.all];

      action.payload.forEach(tweet => {
        byId[tweet.id] = tweet;
        if (!all.includes(tweet.id)) {
          all.push(tweet.id);
        }
      });

      return {
        ...state,
        all,
        byId,
      };
    case 'ADD_TWEET_FULFILLED':
      const tweet = action.payload;
      return {
        ...state,
        byId: { ...state.byId, [tweet.id]: tweet },
        all: [...state.all, tweet.id],
      };
  }
  return state;
};
