import React from 'react'
import Typist from 'react-typist'

const Mesage = ({ message }) => {
  console.log('rendering')
  return <Typist>{message}</Typist>
}

export default Mesage
