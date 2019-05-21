import React from 'react'
import Game from '../organisms/Game'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Container = styled.div<{ show: boolean }>`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: #fff;
  transition: all 0.3s ease;
  animation: ${fadeIn} 500ms ease;
  display: ${props => (props.show ? 'block' : 'none')};
`

const ExitButton = styled.button`
  position: absolute;
  right: 0;
  padding: 8px 16px;
  background-color: teal;
  color: #fff;
  font-size: 2rem;
  margin: 20px;
`

const Overlay: React.FC<{
  show: boolean
  toggleOverlay: (show: boolean) => void
  overlay: string
  setOverlay: (overlay: string) => void
}> = ({ show = false, toggleOverlay, overlay, setOverlay }) => {
  // May need to refactor later to have different components render
  function getOverlayInner() {
    if (overlay === 'game') {
      return <Game />
    } else if (overlay === 'courses') {
      return (
        <div>
          <h2>Courses:</h2>
          <ul>
            <li onClick={() => setOverlay('game')}>command line basics</li>
          </ul>
        </div>
      )
    } else {
      return null
    }
  }
  return (
    <Container show={show} id="overlay">
      <ExitButton onClick={() => toggleOverlay(!show)}>exit</ExitButton>
      {getOverlayInner()}
    </Container>
  )
}

export default Overlay
