import React, { useState, useReducer } from 'react'
import { graphql } from 'gatsby'
import story from '../utils/story'
import Form from '../components/molecules/Form'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Index = (props: IndexPageProps) => {
  const [gameStarted, startGame] = useState(false)
  const [state, setState] = useState({ name: '' })
  const transitionStory = (state, transition) => {
    if (state['NEXT'] === 'greet') {
      story.states[state[transition]].name = 'Joe.'
    }
    return story.states[state[transition]] || state
  }
  const [storyState, transitionTo] = useReducer(
    transitionStory,
    story.states.initial
  )
  console.log('this is state', state)
  return (
    <div>
      {!gameStarted && <h2 onClick={() => startGame(!gameStarted)}>Enter</h2>}
      {gameStarted && (
        <React.Fragment>
          <p style={{ fontSize: '3rem' }}>{storyState['MESSAGE']}</p>
          {storyState.hasOwnProperty('VALUE') && (
            <Form
              for="name"
              value={state.name}
              onChange={e => setState({ ...state, name: e.target.value })}
              handleSubmit={e => {
                e.preventDefault()
              }}
            />
          )}
          <div>
            <button onClick={() => transitionTo('NEXT')}>Next</button>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
