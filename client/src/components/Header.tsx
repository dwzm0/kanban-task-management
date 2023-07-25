import React from 'react'
import { StyledHeader } from './styled/Header.styled'
import { useAppSelector } from '../hooks/useReduxHooks'

const Header = (): JSX.Element => {
  const initDashboards = useAppSelector((state) => state.dashboards)
 

  return (
    <StyledHeader>
        <div>Header</div>
    </StyledHeader>
  )
}

export default Header
