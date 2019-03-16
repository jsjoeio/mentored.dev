import React, { useReducer, useEffect } from 'react'
import { initialState, storyInputsReducer } from '../../state/storyInputs'
import { getMessage } from '../../utils/functions'
import story from '../../utils/story'
import Form from '../molecules/Form'
import Dialog from './Dialog'

const Game = () => {
  const [state, dispatch] = useReducer(storyInputsReducer, initialState)
  const transitionStory = (storyState, transition) => {
    if (typeof storyState[transition] === 'string') {
      return story.states[storyState[transition]] || storyState
    } else if (typeof storyState[transition] === 'object') {
      // Grab what they choose for the question from state
      const optionSelected = state[storyState['INPUT']['KEY']]
      // Loop through options to find key
      let keyOfmatchingOption
      for (let i = 0; i < storyState['INPUT']['OPTIONS'].length; i++) {
        if (storyState['INPUT']['OPTIONS'][i] === optionSelected) {
          keyOfmatchingOption = i
          break
        }
      }
      return (
        story.states[storyState[transition][`OPTION_${keyOfmatchingOption}`]] ||
        storyState
      )
    }
  }
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
  let message = getMessage({ state, storyState })
  return (
    <Dialog
      message={message}
      transition={() => transitionTo('NEXT')}
      showForm={storyState.hasOwnProperty('INPUT')}
      storyState={storyState}
      handleOnChange={handleOnChange}
      state={state}
    />
  )
}

export default Game
