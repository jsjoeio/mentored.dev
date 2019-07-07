import React from 'react'
import styled, { keyframes } from 'styled-components'
import InputText from '../atoms/InputText'
import InputRadio from '../atoms/InputRadio'
import { State } from '../../state/storyInputs'
import { Input } from '../../utils/story'

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Container = styled.form`
  transition: all 0.3s ease;
  animation: ${appear} 1000ms ease;
  margin-bottom: 6px;
`

interface FormProps {
  state: State
  input: Input
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  transition: () => void
}

const Form: React.FC<FormProps> = ({
  state,
  input,
  handleOnChange,
  value,
  transition
}) => {
  return (
    <Container
      autoComplete="off"
      style={{ marginBottom: '0' }}
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      {input['TYPE'] === 'text' && (
        <InputText
          input={input}
          value={value}
          onChange={handleOnChange}
          transition={transition}
        />
      )}
      {input['TYPE'] === 'radio' && (
        <InputRadio
          value={state[input['KEY']]}
          input={input}
          onChange={handleOnChange}
          transition={transition}
        />
      )}
    </Container>
  )
}
export default Form
