import React, { useState, useEffect } from 'react'
import StartScreen from '../molecules/StartScreen'
import Dashboard from './Dashboard'
import LoadingScreen from '../molecules/LoadingScreen'
import gameSound from '../../sounds/PixelCityGroovin.mp3'
import gameMenu from '../../sounds/GameMenu.mp3'
import AudioPlayer from '../atoms/AudioPlayer'

interface IAuth {
  login: (service: string) => void
  isLoggedIn: (service: string) => boolean
}

const App: React.FC<{ auth: IAuth }> = ({ auth }) => {
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

  return (
    <React.Fragment>
      {loading && <LoadingScreen />}
      <AudioPlayer url={authenticated ? gameSound : gameMenu} />
      {authenticated && !loading ? (
        <Dashboard />
      ) : (
        <StartScreen login={login()} />
      )}
    </React.Fragment>
  )
}

export default App
