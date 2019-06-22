import React from 'react'
import styled from '../../utils/styled'
import { isBrowser } from '../../utils/functions'

const Container = styled.p`
  font-size: 2rem;
  margin-left: 1.5rem;
`

const Streak = () => {
  let gameDbInstance
  if (isBrowser()) {
    const gameDb = localStorage.getItem('gameDb')
    if (gameDb) {
      gameDbInstance = JSON.parse(gameDb)
    } else {
      console.warn('No gameDb found')
    }
  }
  return <Container>{gameDbInstance.streak.count || '0'} Day Streak</Container>
}

export default Streak
