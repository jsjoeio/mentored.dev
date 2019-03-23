import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from './Arrow'
import { addFocus } from '../../utils/mixins'

const Button = styled.button`
  display: flex;
  width: 42px;
  height: 42px;
  background: transparent;
  transition: all 0.3s ease;
  border-radius: 50%;
  border: none;
  padding: 0;
  opacity: 0.4;
  &:hover,
  &:focus {
    opacity: 0.9;
    outline: none;
    padding: 0 7px;
    border-width: 2px;
    ${addFocus}
  }
`

const Previous = ({ transitionPrevious, transition }) => {
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
      <Arrow color="primary" direction="left" />
    </Button>
  )
}

export default Previous
