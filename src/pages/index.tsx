import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Laptop from '../components/atoms/Laptop'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Container = styled.div`
  text-align: center;
  margin: auto;
  height: 80vh;
  width: 100%;
`

const Title = styled.h1`
  margin-top: 20vh;
  font-size: 15vh;
  font-weight: bold;
  text-transform: lowercase;

  @media only screen and (max-width: 600px) {
    margin-top: 10vh;
    font-size: 8vh;
  }
`

const SubTitle = styled.p`
  margin-top: 2vh;
  font-size: 3vh;
`

const Instructions = styled.p`
  margin-top: 4vh;
  font-size: 3vh;
`

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 4vh;
  font-size: 1.75vh;
  text-transform: uppercase;
  text-align: center;
`

const Index = (props: IndexPageProps) => {
  return (
    <Container>
      <Title>mentored.dev</Title>
      <SubTitle>The best game for learning web development</SubTitle>
      <div>
        <Instructions>Press enter to play</Instructions>
        <Laptop />
      </div>
      <Footer>© ‘19 jsjoeio</Footer>
    </Container>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
