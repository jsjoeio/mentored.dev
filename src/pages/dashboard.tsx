import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Game from '../components/organisms/Game'
import Enter from '../components/atoms/Enter'

const Dashboard = () => {
  const [gameStarted, startGame] = useState(false)
  return (
    <div>
      {!gameStarted && (
        <div
          style={{
            margin: '50vh auto',
            textAlign: 'center'
          }}
        >
          <Enter onClick={() => startGame(!gameStarted)} />
        </div>
      )}
      {gameStarted && <Game />}
    </div>
  )
}

export default Dashboard
