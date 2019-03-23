import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { addFocus } from '../../utils/mixins'

const Container = styled.div`
  input:focus + ${Label}::before, input:active + ${Label}::before {
    ${addFocus}
  }
`

const Label = styled.label`
  margin-left: 0.5rem;
  font-size: 1.25rem;
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 12px;
    width: 12px;
    border: 1px solid ${props => props.theme.primary.lighter};
    border-radius: 50%;
    position: absolute;
    left: -19px;
    top: 4px;
    background-color: ${props =>
      props.checked ? props.theme.primary.main : ''};
  }
`

const Input = styled.input`
  font-size: 1.25rem;
  opacity: 0;
  &:focus,
  &:active {
    outline: none;
  }
`

const InputRadio = ({
  currentValue,
  questionKey,
  options,
  onChange,
  transition
}) => {
  const inputRadioRef = useRef(null)
  useEffect(() => {
    inputRadioRef.current.focus()
  }, [inputRadioRef])
  return (
    <React.Fragment>
      {options.map((option, index) => (
        <Container key={option}>
          <Input
            ref={index === 0 ? inputRadioRef : null}
            tabIndex={index === 0 ? '1' : ''}
            value={option}
            checked={option === currentValue}
            onChange={onChange}
            onKeyUp={e => {
              if ((e.keyCode === 13 || e.keyCode === 39) && currentValue) {
                transition()
              }
            }}
            type="radio"
            name={option}
            id={option}
          />
          <Label checked={option === currentValue} htmlFor={option}>
            {option}
          </Label>
        </Container>
      ))}
    </React.Fragment>
  )
}

export default InputRadio
