import React, { useState, useEffect } from 'react'
import StartScreen from '../components/molecules/StartScreen'
import Dashboard from '../components/organisms/Dashboard'
import LoadingScreen from '../components/organisms/LoadingScreen'

interface IAuth {
  login: (service: string) => void
  isLoggedIn: (service: string) => boolean
}

const Index: React.FC<{ auth: IAuth }> = ({ auth }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function checkIfLoggedIn() {
      try {
        const loggedIn = await auth.isLoggedIn('github')
        if (loggedIn) {
          setAuthenticated(true)
        } else {
          setAuthenticated(false)
        }
        setLoading(false)
      } catch (e) {
        console.error('Error: could not login with OneGraph')
        setAuthenticated(false)
        setLoading(false)
      }
    }

    checkIfLoggedIn()
  }, [auth])

  function login(service = 'github') {
    return async () => {
      await auth.login(service)
      setAuthenticated(await auth.isLoggedIn('github'))
    }
  }
  if (loading && !authenticated) {
    return <LoadingScreen />
  } else if (!loading && authenticated) {
    return <Dashboard />
  } else {
    return <StartScreen login={login()} />
  }
}

export default Index
