import React from 'react'
import Game from '../organisms/Game'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from '../../utils/mixins'
import ExitSign from '../atoms/ExitSign'

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
  padding: 4px 24px;
  border-color: ${props => props.theme.accentRed.main};
  border-style: solid;
  border-radius: 5px;
  color: ${props => props.theme.accentRed.main};
  background-color: ${props => props.theme.neutral.lightest};
  font-size: 2rem;
  margin: 20px;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.35;
  animation: all 0.3s ease;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

const CoursesContainer = styled.div`
  margin: 20px;

  h2 {
    font-size: 3rem;
  }

  ul {
    font-size: 2rem;

    li {
      cursor: pointer;
    }
  }
`

const LessonCompleted = () => {
  // Check if gameDb exists
  const gameDb = localStorage.getItem('gameDb')
  let gameDbInstance
  let score = ''
  if (gameDb) {
    gameDbInstance = JSON.parse(gameDb)
    score = gameDbInstance.score
  }
  return score ? (
    <span style={{ fontStyle: 'italic' }}>(completed - {score}/3)</span>
  ) : null
}

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
        <CoursesContainer>
          <h2>Courses:</h2>
          <ul>
            <li onClick={() => setOverlay('game')}>
              command line basics <LessonCompleted />
            </li>
          </ul>
        </CoursesContainer>
      )
    } else {
      return null
    }
  }
  return (
    <Container show={show} id="overlay">
      <ExitButton
        onClick={() => {
          if (overlay === 'game') {
            setOverlay('courses')
          } else {
            toggleOverlay(!show)
          }
        }}
      >
        exit
      </ExitButton>
      {getOverlayInner()}
    </Container>
  )
}

export default Overlay
