import React from 'react'
import Authentication from './Authentication'

function Login() {
  return (
    <div>
      <Authentication.Consumer>
        {({ authenticated, login }) => {
          if (authenticated) {
            return null
          }
          return <button onClick={login()}>Log in with GitHub </button>
        }}
      </Authentication.Consumer>
    </div>
  )
}

export default Login
