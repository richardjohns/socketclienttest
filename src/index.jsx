import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'

import reducer from './reducer'
import App from './components/App'

const socket = io(`${location.protocol}//${location.hostname}:8090`)

const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
})

ReactDOM.render(
  <HashRouter>
  <Provider store={store}>
      <App />
  </Provider>
</HashRouter>,
  document.getElementById('app')
)
