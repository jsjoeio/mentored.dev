import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import Authentication from '../components/atoms/Authentication'

const Layout = ({ children }) => {
  // adding ability to set theme, but Layout only likes one child.
  // WIll have to figure out later @TechDebt
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={darkTheme ? theme.darkTheme : theme.lightTheme}>
      <Authentication.Provider>{children}</Authentication.Provider>
    </ThemeProvider>
  )
}

export default Layout
