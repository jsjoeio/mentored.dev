import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from './Arrow'
import { addFocus } from '../../utils/mixins'
import { arrowAnimation } from './Next'

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 42px;
  height: 42px;
  background: transparent;
  transition: all 0.3s ease;
  border-radius: 50%;
  border: none;
  padding: 0;
  opacity: 0.4;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    opacity: 0.9;
    outline: none;
    padding: 0 7px;
    border-width: 3px;
    ${addFocus}
    svg {
      animation: ${arrowAnimation} 1200ms cubic-bezier(0.17, 0.67, 0.83, 0.67)
        infinite;
    }
  }
`

const Previous: React.FC<{
  transitionPrevious: () => void
  transition: () => void
}> = ({ transitionPrevious, transition }) => {
  return (
    <Button
      onClick={transitionPrevious}
      onKeyUp={e => {
        if (e.keyCode === 37) {
          transitionPrevious()
        } else if (e.keyCode === 39) {
          transition()
        }
      }}
    >
      <Arrow shade="dark" direction="left" />
    </Button>
  )
}

export default Previous
