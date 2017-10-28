import React, { PureComponent } from 'react'
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

module.exports = Voting
