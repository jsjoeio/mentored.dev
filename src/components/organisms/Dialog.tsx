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
  height: 170px;
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
    {message && (
      <Message
        isTalking={isTalking}
        setTalking={setTalking}
        message={message}
      />
    )}
    {showForm && (
      <Form
        state={state}
        value={state[storyState['INPUT']['KEY']] || ''}
        input={storyState['INPUT']}
        handleOnChange={e => handleOnChange(e)}
        transition={transition}
      />
    )}
    <DialogNavigation
      transition={transition}
      transitionPrevious={transitionPrevious}
      hasForm={showForm}
    />
  </Container>
)

export default Dialog
