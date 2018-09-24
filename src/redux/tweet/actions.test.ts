import configureStore from 'redux-mock-store';
import { middlewares } from '../configureStore';
import { fetchTweets } from './actions';

const mockStore = configureStore(middlewares);
describe('tweets action creators', () => {
  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks();
  });

  it('should execute fetch data', () => {
    const store = mockStore({});
    const tweetFromTobmaster = {
      id: 1,
      date: '2018-09-23T17:52:21+0200',
      message: 'Hello Tests',
      userId: 'tobmaster',
    };

    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify([tweetFromTobmaster]));

    // @ts-ignore
    return store.dispatch(fetchTweets()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: 'FETCH_TWEETS_PENDING' });
      expect(actions[1]).toEqual({
        type: 'FETCH_TWEETS_FULFILLED',
        payload: [tweetFromTobmaster],
      });
    });
  });
});
