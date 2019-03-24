import React, { useState, useReducer, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import Game from '../components/organisms/Game'
import Enter from '../components/atoms/Enter'
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Index = (props: IndexPageProps) => {
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

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
