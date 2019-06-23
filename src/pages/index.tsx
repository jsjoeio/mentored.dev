import React, { useState, useEffect } from 'react'
import App from '../components/organisms/App'
import { isDeviceMobile } from '../utils/functions'
import MobileMessage from '../components/atoms/MobileMessage'

interface IAuth {
  login: (service: string) => void
  isLoggedIn: (service: string) => boolean
}

const Index: React.FC<{ auth: IAuth }> = ({ auth }) =>
  !isDeviceMobile() ? <App auth={auth} /> : <MobileMessage />

export default Index
