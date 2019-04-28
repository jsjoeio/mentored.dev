import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from 'react-testing-library'
import CharacterTitle from '../../src/components/atoms/CharacterTitle'
import theme from '../../src/utils/theme'

test('Displays the arrow component', () => {
  const component = render(
    <ThemeProvider theme={theme.lightTheme}>
      <CharacterTitle title="Joe" />
    </ThemeProvider>
  )
  // Assertion
  expect(component).toBeTruthy()
})
