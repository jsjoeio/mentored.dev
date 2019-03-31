import React, { useRef, useEffect } from 'react'
import { addFocus } from '../../utils/mixins'
import styled from '../../utils/styled'
import { Story, IStory } from '../../utils/story'

const Label = styled.label<{ checked: boolean }>`
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

const Container = styled.div`
  input:focus + ${Label}::before, input:active + ${Label}::before {
    ${addFocus}
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

export interface InputProps {
  value: string
  input: IStory['INPUT']
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  transition: () => void
}

const InputRadio: React.FC<InputProps> = ({
  value,
  input,
  onChange,
  transition
}) => {
  const inputRadioRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputRadioRef.current) {
      inputRadioRef.current.focus()
    }
  }, [inputRadioRef])
  return (
    <React.Fragment>
      {input &&
        input.OPTIONS &&
        input.OPTIONS.map((option, index) => (
          <Container key={option}>
            <Input
              ref={index === 0 ? inputRadioRef : null}
              tabIndex={index === 0 ? 1 : 0}
              value={option}
              checked={option === value}
              onChange={onChange}
              onKeyUp={e => {
                if ((e.keyCode === 13 || e.keyCode === 39) && value) {
                  transition()
                }
              }}
              type="radio"
              name={option}
              id={option}
            />
            <Label checked={option === value} htmlFor={option}>
              {option}
            </Label>
          </Container>
        ))}
    </React.Fragment>
  )
}

export default InputRadio
