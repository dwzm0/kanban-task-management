/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react'
import GlobalStyle, { lightTheme, darkTheme } from './globalStyle'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'
import StyledContainer from './components/styled/Container.styled'
import { useAppDispatch, useAppSelector } from './hooks/useReduxHooks'
import { initializeDashboards } from './reducers/dashboardReducer'
import { ThemeProvider } from 'styled-components'
import { ThemeCurrValueContext } from './contexts/themeContext'
import { useDarkTheme } from './hooks/useDarkTheme'

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [theme, toggleTheme] = useDarkTheme()
  const selectDashboards = useAppSelector((state) => state.dashboards)
  const selectCurrId = useAppSelector((state) => state.currId)

  useEffect(() => {
    dispatch(initializeDashboards())
  }, [dispatch])

  console.log(selectDashboards)
  console.log(selectCurrId)

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
