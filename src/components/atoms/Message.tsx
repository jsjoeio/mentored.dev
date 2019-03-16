import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.p`
  font-size: 2.2rem;
  white-space: pre-line;
`

const Message = ({ message }) => {
  const [charCount, setCharCount] = useState(0)
  const [text, setText] = useState('')
  const [timer, setTimer] = useState('')
  let speed = 50

  function typeWriter() {
    if (charCount < message.length) {
      setText(text + message.charAt(charCount))
      setCharCount(charCount + 1)
    }
  }

  // Reset everything if message changes
  useEffect(() => {
    setText('')
    clearTimeout(timer)
    setCharCount(0)
  }, [message])

  useEffect(() => {
    // setTimeout returns a timer Id, this allows us to clear the timeout
    // if the user clicks next before the message finishes typing out.
    setTimer(
      setTimeout(() => {
        typeWriter()
      }, speed)
    )
  }, [charCount])

  return <Container id="demo">{text}</Container>
}

export default Message
