import React from 'react'
import ReactDOM from 'react-dom'
import {List} from 'immutable'
import {expect} from 'chai'
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} from 'react-dom/test-utils'

import {Voting} from '../src/components/Voting'

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />)
    const button = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(button.length).to.equal(2)
    expect(button[0].textContent).to.equal('Trainspotting')
    expect(button[1].textContent).to.equal('28 Days Later')
  })

  it('invokes callback when a button is clicked', () => {
    let votedWith
    const vote = (entry) => votedWith = entry
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]}
        vote={vote} />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    Simulate.click(buttons[0])
  })

  it('disables buttons when user has voted', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]}
              hasVoted="Trainspotting" />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons.length).to.equal(2)
    expect(buttons[0].hasAttribute('disabled')).to.equal(true)
    expect(buttons[1].hasAttribute('disabled')).to.equal(true)
  })

  it('adds label to the voted entry', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]}
              hasVoted="Trainspotting" />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons[0].textContent).to.contain('Voted')
  })

  it('renders as a pure component', () => {
  const pair = ['Trainspotting', '28 Days Later']
  const container = document.createElement('div')
  let component = ReactDOM.render(
    <Voting pair={pair} />,
    container
  )
  let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]
  expect(firstButton.textContent).to.equal('Trainspotting')
  pair[0] = 'Sunshine'
  component = ReactDOM.render(
    <Voting pair={pair} />,
    container
  )
  firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0]
  expect(firstButton.textContent).to.equal('Trainspotting')
})

})
