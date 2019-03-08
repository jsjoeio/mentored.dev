import React, { useReducer, useEffect } from 'react'
import { initialState, storyInputsReducer } from '../../state/storyInputs'
import { getMessage } from '../../utils/functions'
import story from '../../utils/story'
import Form from '../molecules/Form'
import Dialog from './Dialog'

const Game = ({}) => {
  const [state, dispatch] = useReducer(storyInputsReducer, initialState)
  const transitionStory = (state, transition) =>
    story.states[state[transition]] || state
  const [storyState, transitionTo] = useReducer(
    transitionStory,
    story.states.initial
  )
  useEffect(() => {
    // If INPUT, create new key in "story input state"
    if (storyState.hasOwnProperty('INPUT')) {
      const key = storyState['INPUT']['KEY']
      dispatch({ type: 'ADD_INPUT_KEY', key })
    }
  }, [storyState])

  const handleOnChange = e => {
    dispatch({
      type: 'UPDATE_INPUT_KEY',
      key: storyState['INPUT']['KEY'],
      value: e.target.value
    })
  }
  let message
  if (storyState['HAS_KEY']) {
    message = getMessage(state, storyState)
  } else {
    message = storyState['MESSAGE']
  }
  return (
    <React.Fragment>
      <Dialog
        transition={() => transitionTo('NEXT')}
        showForm={storyState.hasOwnProperty('INPUT')}
        storyState={storyState}
        handleOnChange={handleOnChange}
        state={state}
      >
        {message}
      </Dialog>
    </React.Fragment>
  )
}

export default Game
