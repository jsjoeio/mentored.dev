import React, { useReducer, useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  initialState,
  storyInputsReducer,
  State
} from '../../state/storyInputs'
import { getMessage, fireGTagEvent } from '../../utils/functions'
import story, { IStory } from '../../utils/story'
import Dialog from './Dialog'
import Narrator from './Narrator'
import CharacterTitle from '../atoms/CharacterTitle'
import Chalkboard from '../atoms/Chalkboard'
import { EVENT_TYPES } from '../../utils/hooks';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Game: React.FC = () => {
  // @Techdebt - might be better to store these in the reducer at one point
  const [isTalking, setTalking] = useState(false)
  const [messageIsLoading, setMessageLoading] = useState(false)
  const [state, dispatch] = useReducer(storyInputsReducer, initialState)
  // @todo - fix the any
  const transitionStory = (
    storyState: any,
    transition?: 'NEXT' | 'PREVIOUS'
  ) => {
    // New message coming in
    setMessageLoading(true)
    if (transition && typeof storyState[transition] === 'string') {
      if (storyState[transition] === 'commandLineQuizSummary') {
        fireGTagEvent(EVENT_TYPES.COMPLETE_LESSON, {
          data: 'completed command line basics lesson'
        })
      }
      return story.states[storyState[transition]] || storyState
    } else if (transition && typeof storyState[transition] === 'object') {
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
    if (storyState && storyState['INPUT']) {
      const key = storyState['INPUT']['KEY']
      dispatch({ type: 'ADD_INPUT_KEY', key })
    }
  }, [storyState])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (storyState && storyState['INPUT']) {
      dispatch({
        type: 'UPDATE_INPUT_KEY',
        key: storyState['INPUT']['KEY'],
        value: e.target.value
      })
    }
  }
  return (
    <div>
      <Chalkboard
        hasImage={storyState && !!storyState['IMAGE']}
        image={storyState && storyState['IMAGE']}
      />
      <Container>
        <Narrator isTalking={isTalking} setTalking={setTalking} />
        <div style={{ position: 'relative' }}>
          <Dialog
            messageIsLoading={messageIsLoading}
            setMessageLoading={setMessageLoading}
            isTalking={isTalking}
            setTalking={setTalking}
            message={storyState ? getMessage({ state, storyState }) || '' : ''}
            transitionPrevious={() => transitionTo('PREVIOUS')}
            transition={() => transitionTo('NEXT')}
            showForm={Boolean(storyState && storyState.INPUT)}
            storyState={storyState}
            handleOnChange={handleOnChange}
            state={state}
          />
          <CharacterTitle name="Professor" />
        </div>
      </Container>
    </div>
  )
}

export default Game
