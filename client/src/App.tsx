/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import GlobalStyle, { lightTheme, darkTheme } from './globalStyle'
import Sidebar from './components/Sidebar'
import StyledContainer from './components/styled/Container.styled'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './hooks/useDarkMode'

function App (): JSX.Element {
  const [theme] = useDarkMode()
  const themeMode = JSON.parse(theme as string) === true ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <StyledContainer>
        <Sidebar />
      </StyledContainer>
    </ThemeProvider>
  )
}

export default App
