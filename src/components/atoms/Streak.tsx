import React from 'react'
import styled from '../../utils/styled'

const Container = styled.p`
  font-size: 2rem;
  margin-left: 1.5rem;
`

const Streak = () => {
  const gameDb = localStorage.getItem('gameDb')
  let gameDbInstance
  if (gameDb) {
    gameDbInstance = JSON.parse(gameDb)
  } else {
    console.warn('No gameDb found')
  }
  return <Container>{gameDbInstance.streak.count || '0'} Day Streak</Container>
}

export default Streak
