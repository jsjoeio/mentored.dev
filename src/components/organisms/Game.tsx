import React, { useState, useReducer, useEffect } from 'react'
import story from '../../utils/story'
import Form from '../molecules/Form'

const Game = ({}) => {
  const [localState, setLocalState] = useState({})
  const transitionStory = (state, transition) => {
    // 1. if INPUT, create new key in object...
    // 2. if HAS_KEY, need to modify MESSAGE before returning...
    return story.states[state[transition]] || state
  }
  const [storyState, transitionTo] = useReducer(
    transitionStory,
    story.states.initial
  )
  useEffect(() => {
    if (storyState.hasOwnProperty('INPUT')) {
      const newKey = {
        [storyState['INPUT']['KEY']]: ''
      }
      setLocalState(prevState => ({ ...prevState, ...newKey }))
    }
    console.log(localState, 'here ya go joe')
  }, [storyState])
  return (
    <React.Fragment>
      <p style={{ fontSize: '3rem' }}>{storyState['MESSAGE']}</p>
      {storyState.hasOwnProperty('INPUT') && (
        <Form
          for={storyState['INPUT']['KEY']}
          value={localState[storyState['INPUT']['KEY']]}
          onChange={e =>
            setLocalState({
              ...localState,
              [storyState['INPUT']['KEY']]: e.target.value
            })
          }
          handleSubmit={e => {
            e.preventDefault()
          }}
        />
      )}
      <div>
        <button onClick={() => transitionTo('NEXT')}>Next</button>
      </div>
    </React.Fragment>
  )
}

export default Game
