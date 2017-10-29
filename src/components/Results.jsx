import React, {PureComponent} from 'react'

class Results extends PureComponent {
  getPair() {
    return this.props.pair || [];
  }
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }
  render() {
    return <div className="results">
      {this.props.pair.map(entry =>
        <div key={entry} className="entry">
          <h1>{entry}</h1>
          <div className="voteCount">
            <h3>{this.getVotes(entry)}</h3>
          </div>
        </div>
      )}
    </div>
  }
}
module.exports = Results
