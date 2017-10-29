import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

import Vote from './Vote'
import Winner from './Winner'

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
    winner: state.get('winner')
  }
}
const VotingContainer = connect(mapStateToProps)(Voting)

module.exports = {Voting, VotingContainer }
