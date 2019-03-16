import React from 'react'
import styled from 'styled-components'
import Form from '../molecules/Form'
import Next from '../atoms/Next'
import Message from '../atoms/Message'

const Container = styled.div`
  border: 1px solid black;
  border-radius: 0.75rem;
  margin: 1rem 3rem 3rem;
  padding: 1rem;
  width: 50vw;
  position: absolute;
  bottom: 0;
  right: 0;
`

const Dialog = ({
  message,
  transition,
  showForm,
  storyState,
  state,
  handleOnChange
}) => (
  <Container>
    {message && <Message message={message} />}
    {showForm && (
      <Form
        state={state}
        value={state[storyState['INPUT']['KEY']] || ''}
        input={storyState['INPUT']}
        handleOnChange={e => handleOnChange(e)}
        transition={transition}
      />
    )}
    <Next transition={transition} hasForm={showForm} />
  </Container>
)

export default Dialog
