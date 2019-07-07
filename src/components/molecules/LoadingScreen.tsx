import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Container = styled.div`
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  padding-top: 150px;
  transition: all 0.3s ease;
`

const TipTitle = styled.h3`
  margin-top: 10px;
  font-size: 4vh;
`

const TipDescription = styled.p`
  font-size: 2rem;
`

const LoadingScreen = () => {
  const [quote, setQuote] = useState('')

  function getQuote() {
    return fetch('http://localhost:9000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ randomQuote { id quote } }' })
    })
  }

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await getQuote()
        const responseData = await res.json()
        if (responseData !== undefined) {
          const q = responseData.data.randomQuote.quote
          console.log(q, ' hello q')
          setQuote(q)
        }
      } catch (e) {
        console.error(e)
      }
    }
    fetchQuote()
  }, [])

  return (
    <Container>
      <Logo />
      <TipTitle>Tip #1</TipTitle>
      <TipDescription>{quote}</TipDescription>
    </Container>
  )
}

export default LoadingScreen
