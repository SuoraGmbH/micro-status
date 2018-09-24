import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { tweetReducer } from './tweet/reducer';
export const middlewares = [thunk, promiseMiddleware()];
export const configureStore = () => {
  const win: any = window;
  let enhancer;

  if (win && win.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancer = compose(
      applyMiddleware(...middlewares),
      win.__REDUX_DEVTOOLS_EXTENSION__(),
    );
  } else {
    enhancer = compose(applyMiddleware(...middlewares));
  }
  return createStore(
    combineReducers({
      tweets: tweetReducer,
    }),
    enhancer,
  );
};
