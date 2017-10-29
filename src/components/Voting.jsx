import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

import Winner from './Winner'
import Vote from './Vote'
import * as actionCreators from '../action_creators'

class Voting extends PureComponent {
  render() {
    return(
      <div className='voting'>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}
const VotingContainer = connect(mapStateToProps, actionCreators)(Voting)

module.exports = {Voting, VotingContainer }
