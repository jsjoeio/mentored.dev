import React, { useState, useReducer, useEffect } from 'react'
import { graphql } from 'gatsby'
import Game from '../components/organisms/Game'

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
      {!gameStarted && <h2 onClick={() => startGame(!gameStarted)}>Enter</h2>}
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
