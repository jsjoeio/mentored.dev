import React from 'react'
import styled from 'styled-components'
import Form from '../molecules/Form'
import Next from '../atoms/Next'
import Message from '../atoms/Message'
import DialogNavigation from '../molecules/DialogNavigation'

const Container = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  background-color: ${props => props.theme.background.main};
  margin: 1rem 3rem 3rem;
  padding: 2rem;
  width: 550px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Dialog = ({
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
          isTalking={isTalking}
          setTalking={setTalking}
          message={message}
        />
      )}
      {showForm && isTalking && <div style={{ height: '48px' }} />}
      {showForm && !isTalking && (
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
        hasNext={storyState.hasOwnProperty('NEXT')}
        hasPrevious={storyState.hasOwnProperty('PREVIOUS')}
        transition={transition}
        transitionPrevious={transitionPrevious}
        showForm={showForm}
      />
    )}
  </Container>
)

export default Dialog
