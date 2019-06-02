import React from 'react'
import styled from 'styled-components'
import Form from '../molecules/Form'
import Message from '../atoms/Message'
import DialogNavigation from '../molecules/DialogNavigation'
import story, { IStory } from '../../utils/story'
import { State } from '../../state/storyInputs'

const Container = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  background-color: ${props => props.theme.neutral.lighter};
  margin: 1rem 3rem 3rem;
  padding: 2rem;
  width: 550px;
  height: 196px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export interface DialogProps {
  messageIsLoading: boolean
  setMessageLoading: React.Dispatch<React.SetStateAction<boolean>>
  isTalking: boolean
  setTalking: React.Dispatch<React.SetStateAction<boolean>>
  message: string
  transition: () => void
  transitionPrevious: () => void
  showForm: boolean
  storyState?: IStory
  state: State
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Dialog: React.FC<DialogProps> = ({
  messageIsLoading,
  setMessageLoading,
  isTalking,
  setTalking,
  message,
  transition,
  transitionPrevious,
  showForm,
  storyState,
  state,
  handleOnChange
}) => (
  <Container>
    <div>
      {message && (
        <Message
          setMessageLoading={setMessageLoading}
          isTalking={isTalking}
          setTalking={setTalking}
          message={message}
        />
      )}
      {/* This empty div below is a placeholder for the Form */}
      {showForm && isTalking && <div style={{ height: '48px' }} />}
      {showForm && !messageIsLoading && storyState && storyState['INPUT'] && (
        <Form
          state={state}
          value={state[storyState['INPUT']['KEY']] || ''}
          input={storyState['INPUT']}
          handleOnChange={e => handleOnChange(e)}
          transition={transition}
        />
      )}
    </div>
    {/* This empty div below is a placeholder for the DialogNavigation */}
    {isTalking && <div style={{ height: '48px' }} />}
    {!isTalking && (
      <DialogNavigation
        hasNext={storyState ? storyState.hasOwnProperty('NEXT') : false}
        hasPrevious={storyState ? storyState.hasOwnProperty('PREVIOUS') : false}
        transition={transition}
        transitionPrevious={transitionPrevious}
        formValue={
          showForm && storyState && storyState['INPUT']
            ? state[storyState['INPUT']['KEY']]
            : ''
        }
        showForm={showForm}
      />
    )}
  </Container>
)

export default Dialog
