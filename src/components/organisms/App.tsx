import React, { useState, useEffect } from 'react'
import { withApollo } from 'react-apollo'
import { useQuery } from 'react-apollo-hooks'
import Dashboard from './Dashboard'
import StartScreen from '../molecules/StartScreen'
import LoadingScreen from '../molecules/LoadingScreen'
import AudioPlayer from '../atoms/AudioPlayer'
import Overlay from '../molecules/Overlay'
// @ts-ignore
import gameSound from '../../sounds/GameSound.mp3'
// @ts-ignore
import gameMenu from '../../sounds/GameMenu.mp3'
import {
  createGameDbObject,
  shouldIncrementStreak,
  isBrowser
} from '../../utils/functions'
interface IAuth {
  login: (service: string) => void
  isLoggedIn: (service: string) => boolean
}

const App: React.FC<{ auth: IAuth; client: any }> = ({ auth, client }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [song, setSong] = useState(gameMenu)
  const [loading, setLoading] = useState(true)
  const [showOverlay, setShowOverlay] = useState(false)
  const [overlay, setOverlay] = useState('')

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

  useEffect(() => {
    if (authenticated) {
      setSong(gameSound)
    } else {
      setSong(gameMenu)
    }
  }, [authenticated])

  useEffect(() => {
    if (isBrowser()) {
      // Check if DB exists
      const gameDb = localStorage.getItem('gameDb')
      const today = new Date()
      let gameDbInstance
      if (!gameDb) {
        // Create a new gameDb instance
        const initialGameDb = createGameDbObject(today)
        const gameDbString = JSON.stringify(initialGameDb)
        localStorage.setItem('gameDb', gameDbString)
        console.log('GameDB created successfully!')
      } else {
        gameDbInstance = JSON.parse(gameDb)
        console.log(gameDbInstance)
        if (shouldIncrementStreak(gameDbInstance.streak.lastLoginDate, today)) {
          // We should increment streak
          gameDbInstance.streak.count += 1
          const gameDbString = JSON.stringify(gameDbInstance)
          // Save to localStorage again
          localStorage.setItem('gameDb', gameDbString)
        } else {
          // Streak stays the same
          console.log('keep streak the same!')
        }
      }
    }
  }, [])

  function login(service = 'github') {
    return async () => {
      await auth.login(service)
      setAuthenticated(await auth.isLoggedIn('github'))
    }
  }
  return (
    <React.Fragment>
      {loading && <LoadingScreen />}
      <Overlay
        overlay={overlay}
        setOverlay={setOverlay}
        show={showOverlay}
        toggleOverlay={setShowOverlay}
      />
      <AudioPlayer url={song} />
      {authenticated && !loading ? (
        <Dashboard setOverlay={setOverlay} toggleOverlay={setShowOverlay} />
      ) : (
        <StartScreen login={login()} />
      )}
    </React.Fragment>
  )
}

export default withApollo(App)
