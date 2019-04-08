import React, { useState, useEffect } from 'react'
import styled from '../../utils/styled'
import IconSoundOn from './IconSoundOn'
import IconSoundOff from './IconSoundOff'

const AudioContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 2.65vh 5px;

  svg {
    transition: all 0.3s ease;
    border: 3px solid transparent;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }
`

const Button = styled.button`
  box-sizing: border-box;
  border: none;
  padding: 0;
  background-color: transparent;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;

    svg {
      border: 3px solid ${props => props.theme.focus.main};
      border-radius: 50%;
    }
  }
`

const useAudio = (url: string) => {
  // Audio is a web API. Need to check defined first otherwise Gatsby build will fail
  if (typeof Audio !== undefined) {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(true)

    const toggle = (): void => setPlaying(!playing)

    useEffect(() => {
      playing ? audio.play() : audio.pause()
      audio.loop = true
      return () => {
        audio.pause()
      }
    }, [playing])

    return [playing, toggle]
  }
}

const AudioPlayer: React.FC<{ url: string }> = ({ url }) => {
  const [playing, toggle] = useAudio(url)

  return (
    <AudioContainer>
      <Button onClick={toggle}>
        {playing ? <IconSoundOn /> : <IconSoundOff />}
      </Button>
    </AudioContainer>
  )
}

export default AudioPlayer
