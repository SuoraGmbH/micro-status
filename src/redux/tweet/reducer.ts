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
  }
  return state;
};
