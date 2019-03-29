import React, { useState } from 'react'
import { Link } from 'gatsby'
import auth from '../utils/authentication'
import Login from '../components/atoms/Login'

const LoginPage = ({ auth }) => {
  const [authenticated, setAuthenticated] = useState(false)

  function login(service = 'github') {
    return async () => {
      await auth.login(service)

      setAuthenticated(await auth.isLoggedIn('github'))
    }
  }
  return (
    <div>
      <div>
        {authenticated ? (
          <div>
            <h1>Logged In</h1>
            <p>
              Go to <Link to="/dashboard">Dashboard</Link>
            </p>
          </div>
        ) : (
          <button onClick={login()}>Log in with GitHub</button>
        )}
      </div>
    </div>
  )
}

export default LoginPage
