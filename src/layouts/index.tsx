import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'

const Layout = ({ children }) => {
  // adding ability to set theme, but Layout only likes one child.
  // WIll have to figure out later @TechDebt
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={darkTheme ? theme.darkTheme : theme.lightTheme}>
      {children}
    </ThemeProvider>
  )
}

export default Layout
