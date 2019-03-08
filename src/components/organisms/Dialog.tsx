import React from 'react'
import styled from 'styled-components'
import Form from '../molecules/Form'

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

const Message = styled.p`
  font-size: 2.2rem;
  white-space: pre-line;
`

const Dialog = ({
  children,
  transition,
  showForm,
  storyState,
  state,
  handleOnChange
}) => (
  <Container>
    <Message>{children}</Message>
    {showForm && (
      <Form
        state={state}
        value={state[storyState['INPUT']['KEY']] || ''}
        input={storyState['INPUT']}
        handleOnChange={e => handleOnChange(e)}
      />
    )}
    <button onClick={transition}>Next</button>
  </Container>
)

export default Dialog
