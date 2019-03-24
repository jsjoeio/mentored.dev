import React from 'react'
import styled, { keyframes } from 'styled-components'
import InputText from '../atoms/InputText'
import InputRadio from '../atoms/InputRadio'

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
`

const Form = ({ state, input, handleOnChange, value, transition }) => {
  return (
    <Container
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
          currentValue={state[input['KEY']]}
          input={input}
          value={value}
          onChange={handleOnChange}
          transition={transition}
        />
      )}
    </Container>
  )
}
export default Form
