import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import getAuth from '../utils/authentication'

const Layout = ({ children }) => {
  // @TechDebt implement changing the theme.
  const auth = getAuth()
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={darkTheme ? theme.darkTheme : theme.lightTheme}>
      {React.cloneElement(children, { auth })}
    </ThemeProvider>
  )
}

export default Layout
