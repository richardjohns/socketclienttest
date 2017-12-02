import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'

import reducer from './reducer'
import reducers from '../client/reducers/index'
import {setState} from './action_creators'
import remoteActionMiddleware from './remote_action_middleware'
import App from './components/App'


const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state =>
store.dispatch(setState(state))
)

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket))(createStore)

const store = createStoreWithMiddleware (reducers, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('app')
)
