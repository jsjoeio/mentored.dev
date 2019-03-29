import React, { useState, useContext, useEffect } from 'react'
import getAuth from '../../utils/authentication'

const AuthContext = React.createContext('authentication')

function Authentication({ children }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [auth, setAuth] = useState({})

  async function handleGetAuth() {
    const response = await getAuth()
    setAuth({ ...response })
  }
  useEffect(() => {
    console.log('effect running')
    console.log(auth, 'auth')
    handleGetAuth()
    // if (auth !== {}) {
    //   const authenticated = await auth.isLoggedIn('github')
    //   setAuthenticated(authenticated)
    // }
  }, [auth === {}])

  function login(service = 'github') {
    return async () => {
      await auth.login(service)
      const authenticated = await auth.isLoggedIn('github')
      setAuthenticated(authenticated)
    }
  }

  function logout(service = 'github') {
    return async () => {
      await auth.logout(service)

      window.localStorage.clear()

      setAuthenticated(false)
    }
  }
  console.log('down here', auth)
  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

Authentication.Consumer = AuthContext.Consumer
Authentication.Provider = Authentication

export default Authentication
