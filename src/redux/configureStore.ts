import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { tweetReducer } from './tweet/reducer';

export const configureStore = () => {
  const win: any = window;
  return createStore(
    combineReducers({
      tweets: tweetReducer,
    }),
    compose(
      applyMiddleware(promiseMiddleware()),
      win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
};
