import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'

import reducer from './reducer'
import {setState} from './action_creators'
import App from './components/App'

const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

const socket = io(`${location.protocol}//${location.hostname}:8090`)

socket.on('state', state =>
  store.dispatch(setState(state))
)

ReactDOM.render(
  <HashRouter>
  <Provider store={store}>
      <App />
  </Provider>
</HashRouter>,
  document.getElementById('app')
)
