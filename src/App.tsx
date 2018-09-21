import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { TweetListFromRedux } from './component/TweetListFromRedux';
import { configureStore } from './redux/configureStore';
import { fetchTweets } from './redux/tweet/actions';

const store = configureStore();
store.dispatch(fetchTweets());

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">📋 Micro Status 2.0</h1>
          </header>
          <div className="content">
            <TweetListFromRedux />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
