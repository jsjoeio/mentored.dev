import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import StartScreen from '../components/molecules/StartScreen'

const Index = ({ auth }) => {
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
        <div>
          <h1>Logged In</h1>
          <p>
            Go to <Link to="/dashboard">Dashboard</Link>
          </p>
        </div>
      ) : (
        <StartScreen login={login()} />
      )}
    </React.Fragment>
  )
}

export default Index
