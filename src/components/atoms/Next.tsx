import React, { useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Arrow from './Arrow'
import { addFocus } from '../../utils/mixins'

const arrowAnimation = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(2px, 0, 0);
  }
`

const Button = styled.button`
  display: flex;
  width: 42px;
  height: 42px;
  background-color: ${props => props.theme.primary.main};
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: ${props => props.theme.primary.darker};
    ${addFocus}
    border-width: 3px;
    border-style: solid;
    outline: none;
    svg {
      animation: ${arrowAnimation} 1200ms cubic-bezier(0.17, 0.67, 0.83, 0.67)
        infinite;
    }
  }
`

export interface NextProps {
  transition: () => void
  showForm: boolean
  formValue: string
  transitionPrevious: () => void
}

const Next: React.FC<NextProps> = ({
  transition,
  formValue,
  showForm,
  transitionPrevious
}) => {
  const nextText = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    // Only focus nextText if doesn't have form
    if (!showForm) {
      if (nextText.current) {
        nextText.current.focus()
      }
    }
  }, [nextText, showForm])

  return (
    <Button
      ref={nextText}
      onClick={() => {
        // If there is a form
        if (showForm) {
          // We need to validate formValue first
          if (formValue) {
            transition()
          }
          // Otherwise, no form, transition on click
        } else {
          transition()
        }
      }}
      tabIndex={showForm ? undefined : 1}
      onKeyUp={e => {
        if (e.keyCode === 39) {
          if (showForm) {
            // We need to validate formValue first
            if (formValue) {
              transition()
            }
            // Otherwise, no form, transition on click
          } else {
            transition()
          }
        } else if (e.keyCode === 37) {
          transitionPrevious()
        }
      }}
    >
      <Arrow color="secondary" direction="right" />
    </Button>
  )
}

export default Next
