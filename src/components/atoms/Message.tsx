import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.p`
  color: ${props => props.theme.neutral.darker};
  font-size: 2.2rem;
  white-space: pre-line;
  margin: 0 0 6px;
  overflow-y: hidden;
`

export interface MessageProps {
  message: string
  isTalking: boolean
  setTalking: React.Dispatch<React.SetStateAction<boolean>>
  setMessageLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Message: React.FC<MessageProps> = ({
  message,
  isTalking,
  setTalking,
  setMessageLoading
}) => {
  const [charCount, setCharCount] = useState(0)
  const [text, setText] = useState('')
  const [timer, setTimer] = useState(0)
  const [speed, setSpeed] = useState(25)

  function typeWriter() {
    if (charCount < message.length) {
      setText(text + message.charAt(charCount))
      setCharCount(charCount + 1)
    } else {
      setTalking(!isTalking)
      setMessageLoading(false)
    }
  }

  useEffect(() => {
    // Listen for enter to start game
    function listenForEnter(e: KeyboardEvent) {
      // This works but prevents any other keys from working.
      // So this works but scrolls page to bottom.
      if (e.keyCode === 32) {
        e.preventDefault()
        console.log('spacebar')
        setSpeed(1)
      }
    }
    document.addEventListener('keydown', listenForEnter, false)
    return () => {
      document.removeEventListener('keydown', listenForEnter, false)
    }
  }, [])

  // Reset everything if message changes
  useEffect(() => {
    setTalking(!isTalking)
    setText('')
    clearTimeout(timer)
    setCharCount(0)
    setSpeed(25)
  }, [message])

  useEffect(() => {
    // setTimeout returns a timer Id, this allows us to clear the timeout
    // if the user clicks next before the message finishes typing out.
    setTimer(
      window.setTimeout(() => {
        typeWriter()
      }, speed)
    )
  }, [charCount])

  return <Container>{text}</Container>
}

export default Message
