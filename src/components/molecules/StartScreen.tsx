import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Laptop from '../atoms/Laptop'
import { addFocus } from '../../utils/mixins'
// @ts-ignore
import Startsound from '../../sounds/GameMenu.mp3'
import { slideUp } from '../../utils/mixins'

const Container = styled.div`
  text-align: center;
  margin: auto;
  height: 80vh;
  width: 100%;
  transition: all 0.3s ease;
  animation: ${slideUp} 1000ms ease;
`

const Title = styled.h1`
  margin-top: 20vh;
  font-size: 15vh;
  font-weight: bold;
  text-transform: lowercase;

  @media only screen and (max-width: 600px) {
    margin-top: 10vh;
    font-size: 8vh;
  }
`

const SubTitle = styled.p`
  margin-top: 2vh;
  font-size: 3vh;
`

const Instructions = styled.button`
  margin-top: 4vh;
  margin-bottom: 1vh;
  font-size: 3vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: none;
  border: none;
`
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 4vh;
  font-size: 1.75vh;
  text-transform: uppercase;
  text-align: center;
`

const StartScreen: React.FC<{ login: () => void }> = ({ login }) => {
  useEffect(() => {
    // Listen for enter to start game
    function listenForEnter(e: KeyboardEvent) {
      if (e.keyCode == 13) {
        e.preventDefault()
        login()
      }
    }
    document.addEventListener('keydown', listenForEnter, false)
    return () => {
      document.removeEventListener('keydown', listenForEnter, false)
    }
  }, [])

  return (
    <Container id="start-screen-container">
      <Title>mentored.dev</Title>
      <SubTitle>
        A gamified learning platform to help you become a web developer
      </SubTitle>
      <div>
        <Instructions onClick={login}>Press enter to play</Instructions>
        <Laptop login={login} />
      </div>
      <Footer>
        <p>© ‘19 jsjoeio</p>
      </Footer>
    </Container>
  )
}

export default StartScreen
