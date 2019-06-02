import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { hideElement, addFocus } from '../../utils/mixins'
import { InputProps } from './InputRadio'

const Label = styled.label`
  ${hideElement}
`

const Input = styled.input`
  background-color: ${props => props.theme.neutral.lighter};
  border: none;
  border-radius: 1px;
  border-bottom: solid 2px ${props => props.theme.neutral.dark};
  color: ${props => props.theme.neutral.darker};
  font-size: 18px;
  transition: all 0.3s ease;
  margin-bottom: 8px;

  &::placeholder {
    text-transform: capitalize;
  }

  &:active,
  &:focus {
    outline: 0;
    border-radius: 3px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom: solid 2px ${props => props.theme.focus.main};
    ${addFocus}
  }
`

const InputText: React.FC<InputProps> = ({
  input,
  value,
  onChange,
  transition
}) => {
  const inputTextRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputTextRef.current) {
      inputTextRef.current.focus()
    }
  }, [inputTextRef])
  return (
    <React.Fragment>
      <Label
        id={`${input && input['KEY']}-label`}
        htmlFor={input && input['KEY']}
      >
        {input && input['KEY']}
      </Label>
      <Input
        aria-labelledby={`${input && input['KEY']}-label`}
        required
        placeholder={(input && input['PLACEHOLDER']) || (input && input['KEY'])}
        ref={inputTextRef}
        tabIndex={1}
        value={value}
        onChange={onChange}
        onKeyUp={e => {
          if ((e.keyCode === 13 || e.keyCode === 39) && value !== '') {
            transition()
          }
        }}
        type="text"
        name={input && input['KEY']}
        id={input && input['KEY']}
      />
    </React.Fragment>
  )
}

export default InputText
