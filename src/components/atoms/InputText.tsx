import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { hideElement, addFocus } from '../../utils/mixins'

const Label = styled.label`
  ${hideElement}
`

const Input = styled.input`
  background-color: ${props => props.theme.background.main};
  border: none;
  border-radius: 1px;
  border-bottom: solid 2px ${props => props.theme.primary.lighter};
  color: ${props => props.theme.primary.main};
  font-size: 18px;
  transition: all 0.3s ease;

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

const InputText = ({ input, value, onChange, transition }) => {
  const inputTextRef = useRef(null)
  useEffect(() => {
    inputTextRef.current.focus()
  }, [inputTextRef])
  return (
    <React.Fragment>
      <Label id={`${input['KEY']}-label`} htmlFor={input['KEY']}>
        {input['KEY']}
      </Label>
      <Input
        aria-labelledby={`${input['KEY']}-label`}
        required
        placeholder={input['PLACEHOLDER'] || input['KEY']}
        ref={inputTextRef}
        tabIndex="1"
        value={value}
        onChange={onChange}
        onKeyUp={e => {
          if ((e.keyCode === 13 || e.keyCode === 39) && value !== '') {
            transition()
          }
        }}
        type="text"
        name={input['KEY']}
        id={input['KEY']}
      />
    </React.Fragment>
  )
}

export default InputText
