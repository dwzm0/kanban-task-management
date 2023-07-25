/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import GlobalStyle, { lightTheme, darkTheme } from './globalStyle'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'
import StyledContainer from './components/styled/Container.styled'
import { ThemeProvider } from 'styled-components'
import { ThemeCurrValueContext } from './contexts/themeContext'
import { useDarkTheme } from './hooks/useDarkTheme'

const App = (): JSX.Element => {
  const [theme, toggleTheme] = useDarkTheme()

  return (
    <ThemeCurrValueContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <StyledContainer >
          <Sidebar />
          <Header />
          <Main />
        </StyledContainer>
      </ThemeProvider>
    </ThemeCurrValueContext.Provider>
  )
}

export default App
