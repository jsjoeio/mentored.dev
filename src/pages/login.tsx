import React from 'react'
import Authentication from '../components/atoms/Authentication'
import auth from '../utils/authentication'
import Login from '../components/atoms/Login'

const LoginPage = () => {
  return (
    <div>
      <Authentication.Consumer>
        {({ authenticated }) => (
          <div>
            {console.log('authenticated', authenticated)}
            {typeof authenticated !== 'boolean' ? null : authenticated ===
              true ? (
              <h1>Logged in</h1>
            ) : (
              <Login />
            )}
          </div>
        )}
      </Authentication.Consumer>
    </div>
  )
}

export default LoginPage
