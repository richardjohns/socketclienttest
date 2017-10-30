import React, { PureComponent } from 'react'

class Vote extends PureComponent {
  getPair() {
    return this.props.pair || []
  }
  isDisabled() {
    return !!this.props.hasVoted
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry
  }
  render() {
    return (
      <div className='vote container center'>
        <h3>Vote</h3>
        {this.getPair().map(entry =>


          <a className="waves-effect waves-light btn-large"
              key={entry}
              disabled={this.isDisabled()}
              onClick={() => this.props.vote(entry)}>
                <h4>{entry}</h4>
                  {this.hasVotedFor(entry) ?
                    <div className="label">Voted</div> : null}
          </a>

        )}
      </div>
    )
  }
}

module.exports = Vote
