import { tweetReducer } from './reducer';
import { TweetState } from './TweetState';

describe('tweetReducer', () => {
  let initialState: TweetState;
  const tweetFromTobmaster = {
    id: 1,
    date: '2018-09-23T17:52:21+0200',
    message: 'Hello Tests',
    userId: 'tobmaster',
  };

  const tweetFromMuhdiekuh = {
    id: 2,
    date: '2018-09-24T17:52:21+0200',
    message: 'Hello other test!',
    userId: 'muhdiekuh',
  };

  const tweetFromNiklasWithIdFromMuhdiekuh = {
    id: 2,
    date: '2018-09-25T17:52:21+0200',
    message: 'Hello angular!',
    userId: 'niklas_wortmann',
  };

  beforeAll(() => {
    initialState = tweetReducer(undefined, { type: '@@INIT' });
  });

  it('should have a valid initial state', () => {
    expect(initialState).toMatchSnapshot();
  });

  it('should have tweets after FETCH_TWEETS_FULFILLED', () => {
    const state = tweetReducer(initialState, {
      type: 'FETCH_TWEETS_FULFILLED',
      payload: [tweetFromTobmaster],
    });

    expect(state.byId).toEqual({ 1: tweetFromTobmaster });
    expect(state.all).toEqual([1]);
  });

  it('should support multiple FETCH_TWEETS_FULFILLED actions and contain all the containing tweets', () => {
    let state = tweetReducer(initialState, {
      type: 'FETCH_TWEETS_FULFILLED',
      payload: [tweetFromTobmaster],
    });

    state = tweetReducer(state, {
      type: 'FETCH_TWEETS_FULFILLED',
      payload: [tweetFromMuhdiekuh],
    });

    expect(state.byId).toEqual({
      1: tweetFromTobmaster,
      2: tweetFromMuhdiekuh,
    });
    expect(state.all).toEqual([1, 2]);
  });

  it('should overwrite a tweet with new data', () => {
    let state = tweetReducer(initialState, {
      type: 'FETCH_TWEETS_FULFILLED',
      payload: [tweetFromMuhdiekuh],
    });

    state = tweetReducer(state, {
      type: 'FETCH_TWEETS_FULFILLED',
      payload: [tweetFromNiklasWithIdFromMuhdiekuh],
    });

    expect(state.byId).toEqual({
      2: tweetFromNiklasWithIdFromMuhdiekuh,
    });

    expect(state.all).toEqual([2]);
  });
});
