import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router-dom'
import {List, Map} from 'immutable'

import {Voting, VotingContainer} from './Voting'
import {Results, ResultsContainer} from './Results'

const pair = List.of('Trainspotting', '28 Days Later')
const tally = Map({'Trainspotting':5, '28 Days Later':4})

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={() =>
          <VotingContainer pair={pair} hasVoted="Trainspotting"/>} />
        <Route path="/results" component={() =>
          <ResultsContainer pair={pair} tally={tally}/>} />
      </div>
    )
  }
}
module.exports = App
