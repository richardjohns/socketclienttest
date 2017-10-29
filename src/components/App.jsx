import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router-dom'
import {List, Map} from 'immutable'

import {VotingContainer} from './Voting'
import {ResultsContainer} from './Results'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={() =>
          <VotingContainer />} />
        <Route path="/results" component={() =>
          <ResultsContainer />} />
      </div>
    )
  }
}
module.exports = App
