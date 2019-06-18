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
import { GET_REPO_OWNER } from '../../utils/apiCalls'
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
  const [user, setUser] = useState('')

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
    async function getRepoOwner() {
      try {
        const data = await client.query({ query: GET_REPO_OWNER })
        setUser(data.data.me.github.login)
      } catch (e) {
        console.error(e)
      }
    }
    getRepoOwner()
  }, [])

  useEffect(() => {
    if (user !== '') {
      console.log('not empty string')
    }
    /*
    Here is where I'm stuck. After i've stored the user in local state, I want to then use this
    to call the get file to get the streak file.

    I'm wondering if I should break up my functions. I want to have a function that just gets the repo.

    - if repo exists, get file from repo and also save the file sha...
    - if repo doesn't exist, create repo and create file.

    I think first step is to get all that logic in this file.

    */
  }, [user])

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
