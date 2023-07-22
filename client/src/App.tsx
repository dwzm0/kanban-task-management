/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react'
import GlobalStyle from './globalStyle'
import StyledContainer from './components/styled/Container.styled'
import { useAppDispatch, useAppSelector } from './hooks'
import { initializeDashboards } from './reducers/dashboardReducer'

function App (): JSX.Element {
  const dispatch = useAppDispatch()
  const initDashboards = useAppSelector((state) => state.dashboards)

  useEffect(() => {
    dispatch(initializeDashboards())
  }, [dispatch])

  console.log(initDashboards)

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        {initDashboards.map((board) => {
          return <div key={board._id}>{board.name}</div>
        })}
      </StyledContainer>
    </>
  )
}

export default App
