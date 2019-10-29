import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { actions } from './modules/hands';
import PlayBoard from './components/PlayBoard';
import store from './store';
import styles from './app.module.css';
import socket from '../src/shared/sockets';


class App extends Component {

  componentDidMount() {
    const { game, player } = this.props;
    // TODO: Fix dirty error handler
    window.addEventListener("error", (e) => {
      socket.disconnect();
      alert("There has been an error, please refresh your browser");
    })
    // TODO: Refine handshake with socket server
    store.dispatch(actions.requestGameStart(game, player));
  }

  render() {
    return (
      <div className={styles.fullWidth}>
        <Provider store={store} className="App-header">
          <PlayBoard />
        </Provider>
      </div>
    );
  }
}

export default App;