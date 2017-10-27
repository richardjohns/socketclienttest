import React, { Component } from 'react'
import Vote from './Vote'
import Winner from './Winner'

class Voting extends Component {
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

module.exports = Voting
