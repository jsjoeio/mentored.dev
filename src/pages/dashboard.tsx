import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Game from '../components/organisms/Game'
import Enter from '../components/atoms/Enter'
import story from '../lesons/story'

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
      {gameStarted && <Game lesson={story} />}
    </div>
  )
}

export default Dashboard
