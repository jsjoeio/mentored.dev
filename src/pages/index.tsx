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
      {!gameStarted && <Enter onClick={() => startGame(!gameStarted)} />}
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
