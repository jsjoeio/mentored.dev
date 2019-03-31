import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import StartScreen from '../components/molecules/StartScreen'
import Username from '../components/atoms/Username'

interface IAuth {
  login: (service: string) => void
  isLoggedIn: (service: string) => boolean
}

const Index: React.FC<{ auth: IAuth }> = ({ auth }) => {
  const [authenticated, setAuthenticated] = useState(false)
  function login(service = 'github') {
    return async () => {
      await auth.login(service)
      setAuthenticated(await auth.isLoggedIn('github'))
    }
  }
  return (
    <React.Fragment>
      {authenticated ? (
        <div style={{ textAlign: 'center', margin: 'auto', marginTop: '12vh' }}>
          <h1 style={{ fontSize: '4vh' }}>Logged in with GitHub</h1>
          <p style={{ fontSize: '2.5vh' }}>
            Go to <Link to="/dashboard">Game</Link>
          </p>
          <Username />
        </div>
      ) : (
        <StartScreen login={login()} />
      )}
    </React.Fragment>
  )
}

export default Index
