import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router-dom'
import {List, Map} from 'immutable'

import Voting from './Voting'
import Results from './Results'

const pair = List.of('Trainspotting', '28 Days Later')
const tally = Map({'Trainspotting':5, '28 Days Later':4})

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={() =>
          <Voting pair={pair} hasVoted="Trainspotting"/>} />
        <Route path="/results" component={() =>
          <Results pair={pair} tally={tally}/>} />
      </div>
    )
  }
}
module.exports = App
