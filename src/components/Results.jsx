import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import Winner from './Winner'
import * as actionCreators from '../action_creators'

class Results extends PureComponent {
  getPair() {
    return this.props.pair || []
  }
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }
  render() {
    return this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <div className="results">
        <div className="tally">
          {this.getPair().map(entry =>
            <div key={entry} className="entry">
              <h1>{entry}</h1>
              <div className="voteCount">
                <h3>{this.getVotes(entry)}</h3>
              </div>
            </div>
          )}
        </div>
        <div className="management">
          <button ref="next"
                  className="next"
                  onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>
  }
}
function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}
const ResultsContainer = connect(mapStateToProps, actionCreators)(Results)

module.exports = {Results, ResultsContainer}
