import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
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

function useAudio(audioRef: React.MutableRefObject<HTMLAudioElement | null>) {
  const [playing, setPlaying] = useState(false)
  const toggle = (): void => setPlaying(!playing)

  useEffect(() => {
    if (audioRef && audioRef.current) {
      playing ? audioRef.current.play() : audioRef.current.pause()
    }
  }, [playing])

  return [playing, toggle] as [boolean, () => void]
}

const AudioPlayer: React.FC<{ url: string }> = ({ url }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, toggle] = useAudio(audioRef)
  const [songUrl, setSongUrl] = useState('')
  useEffect(() => {
    setSongUrl(url)
  }, [url])
  return (
    <AudioContainer>
      <audio ref={audioRef} src={url} />
      <Button onClick={() => toggle()}>
        {playing ? <IconSoundOn /> : <IconSoundOff />}
      </Button>
    </AudioContainer>
  )
}

export default AudioPlayer
