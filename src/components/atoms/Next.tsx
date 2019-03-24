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
    background-color: ${props => props.theme.primary.darker};
    ${addFocus}
    border-width: 3px;
    outline: none;
    svg {
      animation: ${arrowAnimation} 1200ms cubic-bezier(0.17, 0.67, 0.83, 0.67)
        infinite;
    }
  }
`

const Next = ({ transition, showForm, transitionPrevious }) => {
  const nextText = useRef(null)
  useEffect(() => {
    // Only focus nextText if doesn't have form
    if (!showForm) {
      nextText.current.focus()
    }
  }, [nextText, showForm])
  return (
    <Button
      ref={nextText}
      onClick={transition}
      tabIndex={showForm ? null : '1'}
      onKeyUp={e => {
        if (e.keyCode === 39) {
          transition()
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
