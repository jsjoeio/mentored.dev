import React, { useState, useEffect } from 'react'
import App from '../components/organisms/App'

interface IAuth {
  login: (service: string) => void
  isLoggedIn: (service: string) => boolean
}

const Index: React.FC<{ auth: IAuth }> = ({ auth }) => <App auth={auth} />

export default Index
