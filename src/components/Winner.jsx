import React, { PureComponent } from 'react'

class Winner extends PureComponent {
  render() {
    return (
      <div className="winner container center">
        <h3>Winner is {this.props.winner}!</h3>
      </div>
    )
  }
}

module.exports = Winner
