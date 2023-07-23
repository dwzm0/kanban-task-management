/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import GlobalStyle from './globalStyle'
import Sidebar from './components/Sidebar'
import StyledContainer from './components/styled/Container.styled'

function App (): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <Sidebar />
      </StyledContainer>
    </>
  )
}

export default App
