import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from './Arrow'

const Button = styled.button`
  display: flex;
  width: 42px;
  height: 42px;
  background-color: ${props => props.theme.primary.main};
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.primary.darker};
    border-color: #7fdbff;
    box-shadow: inset 0 1px 2px rgba(165, 229, 255, 0.75),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`

const Next = ({ transition, hasForm }) => {
  const nextText = useRef(null)
  useEffect(() => {
    // Only focus nextText if doesn't have form
    if (!hasForm) {
      nextText.current.focus()
    }
  }, [nextText, hasForm])
  return (
    <Button
      ref={nextText}
      onClick={transition}
      tabIndex={hasForm ? null : '1'}
      onKeyUp={e => {
        if (e.keyCode === 39) {
          transition()
        }
      }}
    >
      <Arrow color="secondary" direction="right" />
    </Button>
  )
}

export default Next
